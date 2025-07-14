'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './PartnersMarquee.module.css';
import Image from 'next/image';

// 파트너 데이터 - 실제 이미지로 교체
const partners = [
  { id: 1, name: '파트너01', image: '/images/partners/partner01.jpg' },
  { id: 2, name: '파트너02', image: '/images/partners/partner02.jpg' },
  { id: 3, name: '파트너03', image: '/images/partners/partner03.jpg' },
  { id: 4, name: '파트너04', image: '/images/partners/partner04.jpg' },
  { id: 5, name: '파트너05', image: '/images/partners/partner05.jpg' },
  { id: 6, name: '파트너06', image: '/images/partners/partner06.jpg' },
  { id: 7, name: '파트너07', image: '/images/partners/partner07.jpg' },
];

// 첫 번째 줄과 두 번째 줄에 다르게 배치할 파트너 배열
const firstRowPartners = [
  { id: 1, name: '파트너01', image: '/images/partners/partner01.jpg' },
  { id: 2, name: '파트너02', image: '/images/partners/partner02.jpg' },
  { id: 3, name: '파트너03', image: '/images/partners/partner03.jpg' },
  { id: 4, name: '파트너04', image: '/images/partners/partner04.jpg' },
  { id: 5, name: '파트너05', image: '/images/partners/partner05.jpg' },
  { id: 6, name: '파트너06', image: '/images/partners/partner06.jpg' },
  { id: 7, name: '파트너07', image: '/images/partners/partner07.jpg' },
];

// 두 번째 줄도 동일한 순서로 사용
const secondRowPartners = [...firstRowPartners]; // 첫 번째 줄과 동일한 파트너 배열

export default function PartnersMarquee() {
  const [visible, setVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="partners-marquee-section" ref={sectionRef} className={styles.partnersMarqueeSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <div className={styles.headerLine}></div>
          <h2 className={styles.sectionTitle}>신뢰할 수 있는 파트너사</h2>
          <p className={styles.sectionSubtitle}>
            <span className={styles.desktopOnly}>
              OTS Technology는 다양한 산업 분야의 기업들과 협력하여 <br />비즈니스 혁신을 이끌고 있습니다
            </span>
            <span className={styles.mobileOnly}>
              OTS Technology는 다양한 산업 분야의<br /> 기업들과 협력하여 비즈니스 혁신을 <br />이끌고 있습니다
            </span>
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
          >
            {/* 첫 번째 그룹 - 다른 순서로 배치 */}
            <div className={styles.marqueeGroup}>
              {firstRowPartners.map((partner) => (
                <div key={`row1-a-${partner.id}`} className={styles.partnerItem}>
                  <div className={styles.partnerLogo}>
                    <Image 
                      src={partner.image} 
                      alt={partner.name}
                      width={160}
                      height={90}
                      className={styles.partnerImage}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* 복제 그룹 */}
            <div className={styles.marqueeGroup}>
              {firstRowPartners.map((partner) => (
                <div key={`row1-b-${partner.id}`} className={styles.partnerItem}>
                  <div className={styles.partnerLogo}>
                    <Image 
                      src={partner.image} 
                      alt={partner.name}
                      width={160}
                      height={90}
                      className={styles.partnerImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 두 번째 마퀴 (오른쪽에서 왼쪽) */}
          <div 
            className={`${styles.marquee} ${styles.reverse} ${isPaused ? styles.paused : ''}`} 
          >
            {/* 두 번째 그룹 - 같은 순서로 배치 */}
            <div className={styles.marqueeGroup}>
              {secondRowPartners.map((partner) => (
                <div key={`row2-a-${partner.id}`} className={styles.partnerItem}>
                  <div className={styles.partnerLogo}>
                    <Image 
                      src={partner.image} 
                      alt={partner.name}
                      width={160}
                      height={90}
                      className={styles.partnerImage}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* 복제 그룹 */}
            <div className={styles.marqueeGroup}>
              {secondRowPartners.map((partner) => (
                <div key={`row2-b-${partner.id}`} className={styles.partnerItem}>
                  <div className={styles.partnerLogo}>
                    <Image 
                      src={partner.image} 
                      alt={partner.name}
                      width={160}
                      height={90}
                      className={styles.partnerImage}
                    />
                  </div>
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