import Link from "next/link";
import backStyle from "./backButton.module.css";

export default function BackButton() {
  return (<Link href="/" className={backStyle.back}>← voltar</Link>);
}