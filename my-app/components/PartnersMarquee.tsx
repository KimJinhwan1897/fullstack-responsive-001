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
const secondRowPartners = [
  { id: 1, name: '파트너01', image: '/images/partners/partner07.jpg' },
  { id: 2, name: '파트너02', image: '/images/partners/partner06.jpg' },
  { id: 3, name: '파트너03', image: '/images/partners/partner05.jpg' },
  { id: 4, name: '파트너04', image: '/images/partners/partner04.jpg' },
  { id: 5, name: '파트너05', image: '/images/partners/partner03.jpg' },
  { id: 6, name: '파트너06', image: '/images/partners/partner02.jpg' },
  { id: 7, name: '파트너07', image: '/images/partners/partner01.jpg' },
]; // 첫 번째 줄과 동일한 파트너 배열

export default function PartnersMarquee() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // ref로 스크롤 방향을 관리 (상태보다 더 안정적)
  const isScrollingDownRef = useRef(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // 스크롤 방향을 감지하는 함수 (throttle 적용)
  const updateScrollDirection = () => {
    const currentScrollY = window.scrollY;
    
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        isScrollingDownRef.current = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      
      ticking.current = true;
    }
  };

  // 스크롤 이벤트 리스너
  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  // 헤더 영역 Intersection Observer
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // 화면에 들어올 때는 항상 페이드 인
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          } 
          // 화면에서 나갈 때는 스크롤 방향에 따라 처리
          else {
            // 올리는 중일 때만 페이드 아웃
            if (!isScrollingDownRef.current) {
              setIsHeaderVisible(false);
            }
          }
        });
      },
      {
        threshold: [0.1],
        rootMargin: '-10% 0px'
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
    };
  }, []);

  // 마퀴 영역 Intersection Observer
  useEffect(() => {
    const marqueeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // 화면에 들어올 때는 항상 페이드 인
          if (entry.isIntersecting) {
            setIsMarqueeVisible(true);
          } 
          // 화면에서 나갈 때는 스크롤 방향에 따라 처리
          else {
            // 올리는 중일 때만 페이드 아웃
            if (!isScrollingDownRef.current) {
              setIsMarqueeVisible(false);
            }
          }
        });
      },
      {
        threshold: [0.1],
        rootMargin: '-10% 0px'
      }
    );

    if (marqueeRef.current) {
      marqueeObserver.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        marqueeObserver.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <section id="partners-marquee-section" ref={sectionRef} className={styles.partnersMarqueeSection}>
      {/* 배경 요소 - 항상 표시 */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>
      <div className={styles.bgElement3}></div>
      
      <div className={styles.container}>
        {/* 헤더 영역 - 독립적인 페이드 효과 */}
        <div 
          ref={headerRef}
          className={`${styles.headerWrapper} ${isHeaderVisible ? styles.fadeIn : styles.fadeOut}`}
        >
          <div className={styles.sectionHeader}>
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
        </div>
        
        {/* 마퀴 영역 - 독립적인 페이드 효과 */}
        <div 
          ref={marqueeRef}
          className={`${styles.marqueeWrapper} ${isMarqueeVisible ? styles.fadeIn : styles.fadeOut}`}
        >
          <div 
            className={`${styles.marqueeContainer}`}
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
      </div>
    </section>
  );
} 