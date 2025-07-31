import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/logo.png"
          alt="Varentra Logo"
          width={180}
          height={60}
          priority
          style={{
            objectFit: 'contain',
            filter: 'brightness(1.1) contrast(1.1)'
          }}
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/pages">Pages</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.phone}>
          <span>Have Any Questions?</span>
          <a href="tel:+18003467890">+1 800 34 678 900</a>
        </div>
        <button className={styles.getStarted}>GET STARTED</button>
      </div>
    </header>
  );
};
