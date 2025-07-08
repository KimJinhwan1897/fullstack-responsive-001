'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './PartnersSection.module.css';
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

export default function PartnersSection() {
  const [visible, setVisible] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

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

    const target = document.getElementById('partners-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 자동 슬라이더
  useEffect(() => {
    if (!isAutoScrolling || !sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollStep = 1; // 픽셀 단위로 스크롤
    const scrollInterval = 30; // 밀리초 단위로 업데이트 간격

    autoScrollRef.current = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        // 슬라이더가 끝에 도달하면 처음으로 돌아감
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollStep;
      }
    }, scrollInterval);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isAutoScrolling]);

  // 마우스 오버 시 자동 스크롤 일시 중지
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  // 마우스 아웃 시 자동 스크롤 재개
  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="partners-section" className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>파트너사</h2>
          <p className={styles.sectionSubtitle}>신뢰할 수 있는 기술 파트너와 함께합니다</p>
        </div>

        <div 
          className={`${styles.partnersSlider} ${visible ? styles.fadeIn : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
        >
          <div className={styles.partnersTrack}>
            {/* 기본 파트너 목록 */}
            {partners.map((partner) => (
              <div key={partner.id} className={styles.partnerItem}>
                <Placeholder
                  text={partner.name}
                  width={180}
                  height={80}
                  bgColor="white"
                  textColor="#475569"
                  className={styles.partnerLogo}
                />
              </div>
            ))}
            
            {/* 무한 스크롤을 위한 복제본 */}
            {partners.map((partner) => (
              <div key={`clone-${partner.id}`} className={styles.partnerItem}>
                <Placeholder
                  text={partner.name}
                  width={180}
                  height={80}
                  bgColor="white"
                  textColor="#475569"
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 