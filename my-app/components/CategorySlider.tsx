'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CategorySlider.module.css';
import Placeholder from './Placeholder';

// 카테고리 데이터
const categories = [
  {
    id: 1,
    name: '클라우드 솔루션',
    description: '안정적이고 확장 가능한 클라우드 인프라 및 관리 솔루션',
    image: '/images/category-cloud.jpg',
    link: '/products/cloud'
  },
  {
    id: 2,
    name: 'AI & 머신러닝',
    description: '비즈니스 인사이트 도출을 위한 인공지능 및 머신러닝 솔루션',
    image: '/images/category-ai.jpg',
    link: '/products/ai'
  },
  {
    id: 3,
    name: '옵저버빌리티',
    description: '시스템 모니터링과 로그 분석을 통한 완벽한 가시성 확보',
    image: '/images/category-observability.jpg',
    link: '/products/observability'
  },
  {
    id: 4,
    name: 'IT 인프라',
    description: '안정적이고 효율적인 IT 인프라 구축 및 관리 솔루션',
    image: '/images/category-infrastructure.jpg',
    link: '/products/infrastructure'
  }
];

export default function CategorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 자동 재생 토글
  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // 자동 재생 효과
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

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

    const target = document.getElementById('category-slider-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="category-slider-section" className={styles.productCategories}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>제품 카테고리</h2>
          <div className={styles.sliderControls}>
            <button 
              className={styles.prevBtn} 
              onClick={prevSlide} 
              aria-label="이전"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              className={`${styles.autoplayBtn} ${isAutoPlaying ? styles.playing : ''}`}
              onClick={toggleAutoPlay}
              aria-label={isAutoPlaying ? '자동재생 중지' : '자동재생 시작'}
            >
              {isAutoPlaying ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
            <button 
              className={styles.nextBtn} 
              onClick={nextSlide} 
              aria-label="다음"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className={`${styles.sliderContainer} ${visible ? styles.fadeIn : ''}`}>
          <div 
            className={styles.categorySlider} 
            style={{transform: `translateX(-${currentSlide * 100}%)`}}
          >
            {categories.map((category) => (
              <div className={styles.categoryCard} key={category.id}>
                <div className={styles.categoryImageContainer}>
                  <Placeholder
                    text={category.name}
                    bgColor={
                      category.id === 1 ? "#3b82f6" :
                      category.id === 2 ? "#8b5cf6" :
                      category.id === 3 ? "#10b981" :
                      "#f59e0b"
                    }
                    textColor="white"
                    className={styles.categoryImage}
                    style={{ position: 'absolute', inset: 0, borderRadius: 0 }}
                  />
                  <div className={styles.categoryOverlay}></div>
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryDesc}>{category.description}</p>
                  <Link href={category.link} className={styles.categoryLink}>
                    더 알아보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${styles.sliderDots} ${visible ? styles.fadeIn : ''}`}>
          {categories.map((_, index) => (
            <button
              key={index}
              className={`${styles.sliderDot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 