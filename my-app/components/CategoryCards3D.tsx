'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CategoryCards3D.module.css';
import Placeholder from './Placeholder';

// 카테고리 데이터
const categories = [
  {
    id: 1,
    name: '클라우드 솔루션',
    description: '확장 가능하고 안정적인 클라우드 인프라 및 관리 솔루션',
    image: '/images/category-cloud.jpg',
    link: '/products/cloud',
    color: '#3b82f6'
  },
  {
    id: 2,
    name: 'AI & 머신러닝',
    description: '비즈니스 인사이트 도출을 위한 인공지능 및 머신러닝 솔루션',
    image: '/images/category-ai.jpg',
    link: '/products/ai',
    color: '#8b5cf6'
  },
  {
    id: 3,
    name: '옵저버빌리티',
    description: '시스템 모니터링과 로그 분석을 통한 완벽한 가시성 확보',
    image: '/images/category-observability.jpg',
    link: '/products/observability',
    color: '#10b981'
  },
  {
    id: 4,
    name: 'IT 인프라',
    description: '안정적이고 효율적인 IT 인프라 구축 및 관리 솔루션',
    image: '/images/category-infrastructure.jpg',
    link: '/products/infrastructure',
    color: '#f59e0b'
  },
  {
    id: 5,
    name: 'IT 서비스',
    description: 'IT 서비스 및 자산 관리를 위한 맞춤형 솔루션',
    image: '/images/category-services.jpg',
    link: '/products/services',
    color: '#ec4899'
  },
  {
    id: 6,
    name: '데이터 시각화',
    description: '복잡한 데이터를 이해하기 쉬운 시각적 형태로 변환',
    image: '/images/category-visualization.jpg',
    link: '/products/visualization',
    color: '#14b8a6'
  }
];

export default function CategoryCards3D() {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

    const target = document.getElementById('category-cards-3d-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 카드 회전 처리 함수
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (!activeCard) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // 마우스 위치를 카드 중앙 기준으로 계산 (-1 ~ 1 범위)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // 회전 각도 계산 (최대 10도)
    const rotateY = x * 20;
    const rotateX = -y * 20;
    
    // 그림자 위치 계산
    const shadowX = x * 20;
    const shadowY = y * 20;
    
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
    
    card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.2)
    `;
  };
  
  // 카드 회전 초기화 함수
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setActiveCard(null);
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
  };

  return (
    <section id="category-cards-3d-section" className={styles.categorySection}>
      <div className={styles.noiseOverlay}></div>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.visible : ''}`}>
          <span className={styles.sectionTag}>제품 카테고리</span>
          <h2 className={styles.sectionTitle}>혁신적인 기술 솔루션</h2>
          <p className={styles.sectionDescription}>
            OTS Technology가 제공하는 다양한 제품과 서비스를 소개합니다.<br />
            귀사의 비즈니스 성장을 돕는 최적의 솔루션을 찾아보세요.
          </p>
        </div>
        
        <div className={`${styles.categoryGrid} ${visible ? styles.visible : ''}`}>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              onMouseEnter={() => setActiveCard(category.id)}
              onMouseMove={(e) => handleMouseMove(e, category.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                transitionDelay: `${index * 0.1}s`,
                backgroundColor: `${category.color}10`
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <Placeholder
                    text={category.name.split(' ')[0]}
                    width={60}
                    height={60}
                    bgColor={category.color}
                    textColor="white"
                    className={styles.categoryIcon}
                  />
                </div>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
                <Link href={category.link} className={styles.categoryLink}>
                  <span>자세히 보기</span>
                  <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div 
                className={styles.cardBg}
                style={{
                  backgroundColor: category.color,
                  opacity: 0.05
                }}
              ></div>
              
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 