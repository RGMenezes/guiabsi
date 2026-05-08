"use client";
import { useEffect, useState } from "react";
import styles from "@/app/inner.module.css";
import stylesButton from "./InstallButton.module.css";
import { MdSmartphone } from "react-icons/md";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// Captura o evento fora do componente — persiste entre renders e navegações
let cachedPrompt: BeforeInstallPromptEvent | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    cachedPrompt = e as BeforeInstallPromptEvent;
  });
}

export default function InstallButton() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(
    () => cachedPrompt
  );

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      cachedPrompt = e as BeforeInstallPromptEvent;
      setPrompt(cachedPrompt);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);


  if (!prompt) return null;

  const handleInstall = async () => {
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") {
      cachedPrompt = null;
      setPrompt(null);
    }
  };

  return (
    <button onClick={handleInstall} className={`${stylesButton.button} ${styles.ctaBtn}`}>
      Adicionar Atalho
      <MdSmartphone />
    </button>
  );
}