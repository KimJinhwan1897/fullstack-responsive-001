'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './FeatureShowcase.module.css';
import Placeholder from './Placeholder';

// 서비스 데이터
const services = [
  {
    id: 1,
    icon: '/images/icon-cloud.png',
    title: '클라우드 솔루션',
    description: '확장 가능하고 안정적인 클라우드 인프라 및 관리 솔루션을 제공합니다.',
    link: '/products/cloud'
  },
  {
    id: 2,
    icon: '/images/icon-ai.png',
    title: 'AI 및 머신러닝',
    description: '비즈니스 데이터를 활용한 예측 분석 및 자동화 솔루션으로 의사 결정을 지원합니다.',
    link: '/products/ai'
  },
  {
    id: 3,
    icon: '/images/icon-observe.png',
    title: '옵저버빌리티',
    description: '시스템 모니터링, 로그 분석 및 성능 추적을 통한 완벽한 가시성을 제공합니다.',
    link: '/products/observability'
  },
  {
    id: 4,
    icon: '/images/icon-infra.png',
    title: 'IT 인프라',
    description: '네트워크, 서버, 스토리지 등 안정적인 인프라 구축 및 운영 솔루션을 제공합니다.',
    link: '/products/infrastructure'
  }
];

export default function FeatureShowcase() {
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

    const target = document.getElementById('features-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="features-section" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.fadeIn : ''}`}>핵심 서비스</h2>
        <p className={`${styles.sectionSubtitle} ${visible ? styles.fadeIn : ''}`}>
          OTS Technology가 제공하는 핵심 서비스를 소개합니다
        </p>
        
        <div className={`${styles.servicesGrid} ${visible ? styles.fadeIn : ''}`}>
          {services.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <div className={styles.serviceIcon}>
                <Placeholder
                  text={service.title.split(' ')[0]}
                  width={64}
                  height={64}
                  bgColor="#3b82f6"
                  textColor="white"
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.learnMore}>
                자세히 보기
                <svg className={styles.arrowIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 