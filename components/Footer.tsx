import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Image src="/logo.png" alt="Neotech" width={140} height={40} className={styles.footerLogo} />
            <p>
              We are the best world Information Technology Company. Providing the highest quality in hardware & Software solutions.
            </p>
            <p className={styles.needHelp}>Need help? Call us</p>
            <a href="tel:+084-456-0789" className={styles.phoneNumber}>9752325601</a>
            <p className={styles.supportEmail}>support@varentra.com</p>
            <address className={styles.address}>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </address>
          </div>

          <div className={styles.footerLinks}>
            <h3>Company</h3>
            <nav>
              <Link href="/about">About Company</Link>
              <Link href="/customers">For Customers</Link>
              <Link href="/blog">Blog & News</Link>
              <Link href="/careers">Careers & Reviews</Link>
              <Link href="/sitemap">Sitemap</Link>
            </nav>
          </div>

          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <nav>
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/terms">Terms of use</Link>
            </nav>
          </div>

          <div className={styles.footerContact}>
            <h3>Contact</h3>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© Copyright 2024 <span className={styles.footerHighlight}>Varentra</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
