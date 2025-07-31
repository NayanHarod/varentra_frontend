import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const CTASection = () => {
  return (
    <section className={styles.ctaBackground}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to gain competitive advantage by harnessing<br />
          data and modernising your technology?
        </h2>
        <button className={styles.ctaButton}>
          GET IN TOUCH
          <Image src="/icons/arrow-right.svg" alt="Arrow" width={16} height={16} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
