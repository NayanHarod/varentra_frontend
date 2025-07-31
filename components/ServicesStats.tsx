import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ServicesStats = () => {
  const stats = [
    { label: 'IT Management', value: '95%' },
    { label: 'Data Security', value: '80%' },
    { label: 'Technology Solution', value: '90%' }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.servicesImage}>
        <Image
          src="/team.jpg"
          alt="Technology Meeting"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.servicesGrid}>
        <div>
          <span className={styles.sectionTag}>TECHNOLOGY INDEX</span>
          <h2 className={styles.sectionTitle}>We Are Always Best For Technology Solution</h2>
          
          <div className={styles.statsFeatures}>
            <div className={styles.statFeature}>
              <div className={styles.serviceIcon}>
                <Image src="/icons/gear.svg" alt="Experience" width={24} height={24} />
              </div>
              <div>
                <h4>Experience</h4>
                <p>We gives you bests service to your project.</p>
              </div>
            </div>
            
            <div className={styles.statFeature}>
              <div className={styles.serviceIcon}>
                <Image src="/icons/chat.svg" alt="Quick Support" width={24} height={24} />
              </div>
              <div>
                <h4>Quick Support</h4>
                <p>We Always Here at your support and help.</p>
              </div>
            </div>
          </div>

          <div className={styles.serviceStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statLabel}>
                  <span>{stat.label}</span>
                  <span>{stat.value}</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: stat.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesStats;
