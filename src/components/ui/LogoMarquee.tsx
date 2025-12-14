'use client';

import { useState } from 'react';
import styles from './LogoMarquee.module.css';

const clients = [
  'Client1-Microsoft.svg',
  'Client2-UOB.svg',
  'Client3-NTUC.svg',
  'Client4-OTCi.svg',
  'Client5-Seatrium.svg',
  'Client6-SPGroup.svg',
  'Client7-SATS.svg',
  'Client8-Certis.svg',
  'Client9-RP.svg',
  'Client10-Crayon.svg',
  'Client11-Trainocate.svg',
  'Client12-ESR.svg',
  'Client13-PSA.svg',
  'Client14-APLL.svg',
  'Client15-Mediacorp.svg',
  'Client16-PUB.svg',
  'Client17-Synapxe.svg',
  'Client18-ToteBoard.svg',
  'Client19-MAS.svg',
];

export default function LogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marqueeTrack} ${isPaused ? styles.paused : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First set of logos */}
        {clients.map((client, index) => (
          <div key={`logo-1-${index}`} className={styles.logoWrapper}>
            <img
              src={`/images/clients/${client}`}
              alt={`Client logo ${index + 1}`}
              className={styles.logo}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div key={`logo-2-${index}`} className={styles.logoWrapper}>
            <img
              src={`/images/clients/${client}`}
              alt={`Client logo ${index + 1}`}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
