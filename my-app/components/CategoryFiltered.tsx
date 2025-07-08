'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CategoryFiltered.module.css';
import Placeholder from './Placeholder';

// 제품 데이터
const products = [
  {
    id: 1,
    name: 'CloudManager Pro',
    category: 'cloud',
    description: '클라우드 인프라 관리 및 모니터링 솔루션',
    tags: ['인프라', '관리', '모니터링'],
    color: '#3b82f6',
    link: '/products/cloud/monitoring'
  },
  {
    id: 2,
    name: 'CloudPlatform',
    category: 'cloud',
    description: '확장 가능한 클라우드 플랫폼 서비스',
    tags: ['플랫폼', 'IaaS', 'PaaS'],
    color: '#60a5fa',
    link: '/products/cloud/platform'
  },
  {
    id: 3,
    name: 'AI Ops',
    category: 'ai',
    description: 'AI 기반 운영 자동화 및 최적화 시스템',
    tags: ['자동화', '운영', '최적화'],
    color: '#8b5cf6',
    link: '/products/ai/aiops'
  },
  {
    id: 4,
    name: 'DataInsight AI',
    category: 'ai',
    description: '데이터 분석 및 인사이트 제공 AI 솔루션',
    tags: ['분석', '인사이트', '데이터'],
    color: '#a78bfa',
    link: '/products/ai/data-insight'
  },
  {
    id: 5,
    name: 'ObservePro',
    category: 'observability',
    description: '시스템 성능 및 상태 모니터링 솔루션',
    tags: ['모니터링', '성능', '분석'],
    color: '#10b981',
    link: '/products/observability/app'
  },
  {
    id: 6,
    name: 'LogAnalytics',
    category: 'observability',
    description: '실시간 로그 수집 및 분석 도구',
    tags: ['로그', '분석', '실시간'],
    color: '#34d399',
    link: '/products/observability/log'
  },
  {
    id: 7,
    name: 'ServerGuard',
    category: 'infrastructure',
    description: '서버 보안 및 성능 관리 시스템',
    tags: ['보안', '서버', '관리'],
    color: '#f59e0b',
    link: '/products/infrastructure/server'
  },
  {
    id: 8,
    name: 'NetworkMonitor',
    category: 'infrastructure',
    description: '네트워크 트래픽 모니터링 및 최적화 도구',
    tags: ['네트워크', '모니터링', '트래픽'],
    color: '#fbbf24',
    link: '/products/infrastructure/network'
  }
];

// 카테고리 정의
const categories = [
  { id: 'all', name: '전체' },
  { id: 'cloud', name: '클라우드 솔루션' },
  { id: 'ai', name: 'AI & 머신러닝' },
  { id: 'observability', name: '옵저버빌리티' },
  { id: 'infrastructure', name: 'IT 인프라' }
];

export default function CategoryFiltered() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visible, setVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

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

    const target = document.getElementById('category-filtered-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 카테고리 변경 시 제품 필터링
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === activeCategory);
      setFilteredProducts(filtered);
    }
  }, [activeCategory]);

  return (
    <section id="category-filtered-section" className={styles.categorySection}>
      <div className={styles.gradientBg}></div>
      
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>
            혁신적인 제품 <span className={styles.titleAccent}>카테고리</span>
          </h2>
          <p className={styles.sectionDescription}>
            귀사의 비즈니스 니즈에 맞는 최적의 솔루션을 찾아보세요
          </p>
        </div>
        
        <div className={`${styles.filterControls} ${visible ? styles.visible : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`${styles.productCard} ${visible ? styles.visible : ''}`}
              style={{ 
                transitionDelay: `${(index % 8) * 0.1 + 0.2}s`,
                borderTop: `4px solid ${product.color}`
              }}
            >
              <div className={styles.productIcon}>
                <Placeholder
                  text={product.name.substring(0, 2)}
                  width={60}
                  height={60}
                  bgColor={product.color}
                  textColor="#ffffff"
                />
              </div>
              
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              
              <div className={styles.productTags}>
                {product.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={styles.tag}
                    style={{ backgroundColor: `${product.color}20`, color: product.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={product.link} className={styles.productLink}>
                자세히 보기
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
                  <path d="M4.16675 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaWrapper} ${visible ? styles.visible : ''}`}>
          <Link href="/products" className={styles.ctaButton}>
            모든 제품 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.ctaArrow}>
              <path d="M4.16675 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 