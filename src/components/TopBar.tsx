import Link from "next/link";
import styles from "./TopBar.module.css";
import InstallButton from "./InstallButton";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <Link href="/" className={styles.logo}>
        BSI<span className={styles.accent}>.</span>IFF
      </Link>
      <InstallButton />
    </div>
  );
}