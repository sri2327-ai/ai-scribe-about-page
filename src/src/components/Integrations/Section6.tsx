import React from 'react';
import styles from '@/styles/integration.module.scss';

const data = [
  {
    title: 'No Disruptions',
    description: 'Works with your existing tools—no rip-and-replace required.',
  },
  {
    title: 'Scalable & Future-Proof',
    description: 'Adapts effortlessly as your practice grows.',
  },
  {
    title: 'Lightning-Fast Charting',
    description: 'AI-driven notes, structured data, and auto-generated codes in minutes.',
  },
  {
    title: 'Ironclad Security',
    description: 'HIPAA, PIPEDA & GDPR Compliant | ISO 27001 Certified | AES-256 Encrypted',
  },
  {
    title: 'Reliability at Scale',
    description: 'Fault-tolerant architecture with multiple availability zones.',
  },
];

export default function WhyS10Section(){
  return (
    <div className={styles.whySection}>
      <div className={styles.left}>
        <h2>Why S10.AI?</h2>
        <p>Smarter, Faster, More Secure</p>
      </div>

      <div className={styles.right}>
        {data.map((item, index) => (
          <div className={styles.featureRow} key={index}>
            <div className={styles.featureTitle}>{item.title}</div>
            <div className={styles.featureDesc}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

