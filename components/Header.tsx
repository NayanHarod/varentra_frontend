import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <span style={{transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></span>
        <span style={{opacity: menuOpen ? '0' : '1'}}></span>
        <span style={{transform: menuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'}}></span>
      </div>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/pages" onClick={() => setMenuOpen(false)}>Pages</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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
