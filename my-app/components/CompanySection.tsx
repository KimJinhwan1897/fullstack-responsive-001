'use client';

import { useEffect, useState } from 'react';
import styles from './CompanySection.module.css';

export default function CompanySection() {
  const [visible, setVisible] = useState(true);
  const message = "우리의 첫걸음이 내일의 기준이 됩니다.\n대한민국 최초에서 대한민국 1등이 되기까지\n혁신을 통한 미래 가치 창출\n기술로 세상을 바꾸는 기업";

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <section className={styles.companySection} id="company-section">
      <div className={styles.titleWrap}>
        <p className={styles.sectionTitle}></p>
        <div className={`${styles.sectionDescription} ${visible ? styles.visible : styles.hidden}`}>
          {message.split('\n').map((line, index) => (
            <span key={index} style={{ display: 'block', marginBottom: '0.5rem' }}>
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
} 