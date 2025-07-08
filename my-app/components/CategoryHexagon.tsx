'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CategoryHexagon.module.css';
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

export default function CategoryHexagon() {
  const [visible, setVisible] = useState(false);
  const [hoveredHex, setHoveredHex] = useState<number | null>(null);

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

    const target = document.getElementById('category-hexagon-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="category-hexagon-section" className={styles.categorySection}>
      <div className={styles.hexBackground}>
        <div className={styles.hexGrid}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`hex-bg-${i}`} className={styles.hexBg}></div>
          ))}
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleHighlight}>혁신적인</span> 제품 카테고리
          </h2>
          <p className={styles.sectionDescription}>
            OTS Technology의 다양한 제품과 솔루션을 통해 비즈니스 혁신을 경험하세요
          </p>
        </div>
        
        <div className={`${styles.hexContainer} ${visible ? styles.visible : ''}`}>
          <div className={styles.hexagonGrid}>
            {categories.map((category, index) => (
              <div 
                className={styles.hexWrapper}
                key={category.id}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredHex(category.id)}
                onMouseLeave={() => setHoveredHex(null)}
              >
                <div className={`${styles.hexagon} ${hoveredHex === category.id ? styles.hovered : ''}`}>
                  <div className={styles.hexContent}>
                    <div 
                      className={styles.hexIconWrapper}
                      style={{ backgroundColor: `${category.color}33` }}
                    >
                      <Placeholder
                        text={category.name.split(' ')[0]}
                        width={50}
                        height={50}
                        bgColor={category.color}
                        textColor="white"
                        className={styles.categoryIcon}
                      />
                    </div>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <Link href={category.link} className={styles.categoryLink}>
                      자세히 보기
                      <svg className={styles.arrow} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 5L20 12L13 19M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                  <div 
                    className={styles.hexBorder}
                    style={{ borderColor: hoveredHex === category.id ? category.color : 'rgba(255, 255, 255, 0.1)' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${styles.ctaContainer} ${visible ? styles.visible : ''}`}>
          <Link href="/products" className={styles.ctaButton}>
            모든 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
} 