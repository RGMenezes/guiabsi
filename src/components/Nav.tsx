import Link from "next/link";
import styles from "./Nav.module.css";
import InstallButton from "./InstallButton";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        BSI<span className={styles.accent}>.</span>IFF
      </Link>
      <InstallButton />
    </nav>
  );
}
