'use client';

import { useEffect, useState } from 'react';
import styles from './CompanySection.module.css';

export default function CompanySection() {
  const [visible, setVisible] = useState(true);
  const messages = [
    "우리의 첫걸음이 내일의 기준이 됩니다.",
    "대한민국 최초에서 대한민국 1등이 되기까지",
    "혁신을 통한 미래 가치 창출",
    "기술로 세상을 바꾸는 기업"
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // 메시지 변경 효과
    const messageInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(messageInterval);
    };
  }, [messages.length]);

  return (
    <section className={styles.companySection} id="company-section">
      <div className={styles.titleWrap}>
        <p className={styles.sectionTitle}></p>
        <p className={`${styles.sectionDescription} ${visible ? styles.visible : styles.hidden}`}>
          {messages[currentMessageIndex]}
        </p>
      </div>
    </section>
  );
} 