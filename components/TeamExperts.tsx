import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const TeamExperts = () => {
  const teamMembers = [
    {
      name: 'Nayan Harod',
      role: 'AI Expert',
      image: '/team/jonathan.jpg'
    },
    {
      name: 'Yash Moyal',
      role: 'Algorithm Specialist',
      image: '/team/rebecca.jpg'
    },
    {
      name: 'Vishnu Patidar',
      role: 'Social Expert',
      image: '/team/alina.jpg'
    },
    {
      name: 'Mahendra Gurjar',
      role: ' Marketing manager',
      image: '/team/dennis.jpg'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <span className={styles.sectionTag}>MEET OUR TEAM</span>
        <h2 className={styles.teamTitle}>
          Meet our team<br />
          of experts
        </h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={340}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExperts;
