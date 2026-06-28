"use client";

import { useEffect, useState } from "react";
import { MdSmartphone } from "react-icons/md";

import CallToAction from "./CallToAction";



interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
} // OK

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
    <CallToAction click={handleInstall}>
      Adicionar Atalho
      <MdSmartphone />
    </CallToAction>
  );
}
