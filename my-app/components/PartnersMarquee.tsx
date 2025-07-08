'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './PartnersMarquee.module.css';
import Placeholder from './Placeholder';

// 파트너 데이터
const partners = [
  { id: 1, name: '삼성전자', logo: '/images/partner-samsung.png' },
  { id: 2, name: '현대자동차', logo: '/images/partner-hyundai.png' },
  { id: 3, name: 'LG', logo: '/images/partner-lg.png' },
  { id: 4, name: 'SK', logo: '/images/partner-sk.png' },
  { id: 5, name: 'KT', logo: '/images/partner-kt.png' },
  { id: 6, name: '신한은행', logo: '/images/partner-shinhan.png' },
  { id: 7, name: '네이버', logo: '/images/partner-naver.png' },
  { id: 8, name: '카카오', logo: '/images/partner-kakao.png' },
  { id: 9, name: '포스코', logo: '/images/partner-posco.png' },
  { id: 10, name: '한국전력', logo: '/images/partner-kepco.png' }
];

export default function PartnersMarquee() {
  const [visible, setVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

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

    const target = document.getElementById('partners-marquee-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 로고 색상 배열
  const logoColors = [
    '#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444',
    '#8b5cf6', '#ec4899', '#f97316', '#14b8a6', '#6366f1'
  ];

  return (
    <section id="partners-marquee-section" className={styles.partnersMarqueeSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <div className={styles.headerLine}></div>
          <h2 className={styles.sectionTitle}>신뢰할 수 있는 파트너사</h2>
          <p className={styles.sectionSubtitle}>
            OTS Technology는 다양한 산업 분야의 기업들과 협력하여 
            비즈니스 혁신을 이끌고 있습니다
          </p>
        </div>
        
        <div 
          className={`${styles.marqueeContainer} ${visible ? styles.fadeIn : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 첫 번째 마퀴 (왼쪽에서 오른쪽) */}
          <div 
            className={`${styles.marquee} ${isPaused ? styles.paused : ''}`} 
            ref={marqueeRef1}
          >
            <div className={styles.marqueeGroup}>
              {partners.slice(0, 5).map((partner, index) => (
                <div key={partner.id} className={styles.partnerItem}>
                  <Placeholder
                    text={partner.name}
                    width={180}
                    height={100}
                    bgColor={logoColors[index % logoColors.length]}
                    textColor="white"
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup}>
              {partners.slice(0, 5).map((partner, index) => (
                <div key={`clone-${partner.id}`} className={styles.partnerItem}>
                  <Placeholder
                    text={partner.name}
                    width={180}
                    height={100}
                    bgColor={logoColors[index % logoColors.length]}
                    textColor="white"
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 두 번째 마퀴 (오른쪽에서 왼쪽) */}
          <div 
            className={`${styles.marquee} ${styles.reverse} ${isPaused ? styles.paused : ''}`} 
            ref={marqueeRef2}
          >
            <div className={styles.marqueeGroup}>
              {partners.slice(5, 10).map((partner, index) => (
                <div key={partner.id} className={styles.partnerItem}>
                  <Placeholder
                    text={partner.name}
                    width={180}
                    height={100}
                    bgColor={logoColors[(index + 5) % logoColors.length]}
                    textColor="white"
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup}>
              {partners.slice(5, 10).map((partner, index) => (
                <div key={`clone-${partner.id}`} className={styles.partnerItem}>
                  <Placeholder
                    text={partner.name}
                    width={180}
                    height={100}
                    bgColor={logoColors[(index + 5) % logoColors.length]}
                    textColor="white"
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 배경 요소 */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>
      <div className={styles.bgElement3}></div>
    </section>
  );
} 