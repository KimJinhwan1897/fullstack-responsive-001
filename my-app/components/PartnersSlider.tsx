'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PartnersSlider.module.css';

// 파트너사 데이터
const partners = [
  { id: 1, name: '삼성전자', logo: '/images/partner-samsung.png' },
  { id: 2, name: 'LG전자', logo: '/images/partner-lg.png' },
  { id: 3, name: 'SK하이닉스', logo: '/images/partner-sk.png' },
  { id: 4, name: '현대자동차', logo: '/images/partner-hyundai.png' },
  { id: 5, name: 'KT', logo: '/images/partner-kt.png' },
  { id: 6, name: 'POSCO', logo: '/images/partner-posco.png' },
  { id: 7, name: '네이버', logo: '/images/partner-naver.png' },
  { id: 8, name: '카카오', logo: '/images/partner-kakao.png' }
];

export default function PartnersSlider() {
  const [visible, setVisible] = useState(false);

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

  return (
    <section id="partners-section" className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.fadeIn : ''}`}>파트너사</h2>
        <p className={`${styles.sectionSubtitle} ${visible ? styles.fadeIn : ''}`}>
          OTS Technology와 함께하는 파트너사들을 소개합니다
        </p>
        
        <div className={`${styles.logoSlider} ${visible ? styles.fadeIn : ''}`}>
          <div className={styles.logoTrack}>
            {/* 로고를 두 번 반복하여 무한 슬라이드 효과 생성 */}
            {[...partners, ...partners].map((partner, index) => (
              <div className={styles.logoItem} key={`${partner.id}-${index}`}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={160} 
                  height={80} 
                  className={styles.logoImage}
                  onError={(e) => {
                    // 이미지 로드 실패 시 기본 로고로 대체
                    e.currentTarget.src = '/images/partner-placeholder.png';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${styles.ctaContainer} ${visible ? styles.fadeIn : ''}`}>
          <a href="#" className={styles.ctaButton}>
            파트너십 문의하기
          </a>
        </div>
      </div>
    </section>
  );
} 