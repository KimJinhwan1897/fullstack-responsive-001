'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css';
import Placeholder from './Placeholder';

const stats = [
  { id: 1, value: '20+', label: '운영 경험 (연)' },
  { id: 2, value: '300+', label: '고객사' },
  { id: 3, value: '97%', label: '고객 만족도' },
  { id: 4, value: '50+', label: '전문가 인력' },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const [countedStats, setCountedStats] = useState(stats.map(stat => ({
    ...stat,
    displayValue: '0',
  })));

  // 스크롤 감지로 애니메이션 효과 적용
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('about-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 숫자 카운팅 애니메이션
  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // 애니메이션 시간 (ms)
    const frameRate = 60; // 프레임 레이트
    const totalFrames = Math.floor(duration / (1000 / frameRate));

    stats.forEach((stat, statIndex) => {
      let frame = 0;
      
      // 숫자 부분과 텍스트 부분 분리
      const value = stat.value;
      const numberPart = value.replace(/[^0-9.]/g, '');
      const textPart = value.replace(numberPart, '');
      const target = parseFloat(numberPart);

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(progress * target);

        setCountedStats(prev => {
          const newStats = [...prev];
          newStats[statIndex] = {
            ...prev[statIndex],
            displayValue: currentCount + textPart
          };
          return newStats;
        });

        if (frame === totalFrames) {
          clearInterval(timer);
          // 최종값으로 설정
          setCountedStats(prev => {
            const newStats = [...prev];
            newStats[statIndex] = {
              ...prev[statIndex],
              displayValue: value
            };
            return newStats;
          });
        }
      }, 1000 / frameRate);

      return () => clearInterval(timer);
    });
  }, [visible]);

  return (
    <section id="about-section" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={`${styles.aboutContent} ${visible ? styles.fadeIn : ''}`}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>우리 회사 소개</h2>
            <p className={styles.aboutDescription}>
              OTS Technology는 2003년 설립 이래 IT 인프라, 클라우드, AI, 옵저버빌리티 솔루션 분야에서 
              혁신적인 기술과 서비스를 제공해 왔습니다. 최고의 전문가들로 구성된 팀이 고객의 비즈니스 
              성장을 위한 최적의 솔루션을 제공합니다.
            </p>
            <p className={styles.aboutDescription}>
              국내외 다양한 산업 분야의 기업들과 협력하며 쌓은 경험을 바탕으로, 
              고객의 디지털 혁신을 성공적으로 이끌어내는 신뢰할 수 있는 파트너가 되겠습니다.
            </p>
            <Link href="/about" className={styles.aboutLink}>
              회사 소개 더 보기
              <svg className={styles.arrowIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className={styles.aboutImageContainer}>
            <Placeholder
              text="회사 소개 이미지"
              className={styles.aboutImage}
              width={500}
              height={400}
              bgColor="#4f46e5"
              textColor="white"
            />
          </div>
        </div>

        <div className={`${styles.statsGrid} ${visible ? styles.fadeIn : ''}`}>
          {countedStats.map((stat) => (
            <div className={styles.statItem} key={stat.id}>
              <div className={styles.statValue}>{stat.displayValue}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 