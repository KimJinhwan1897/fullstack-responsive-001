'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      id: 1,
      image: 'images/home_main-visual-1.png',
      title: 'OTS Technology',
      subtitle: 'Technology',
      description: '전자·통신·반도체 분야의 정밀 계측 솔루션 전문 기업',
      link: '/products'
    },
    {
      id: 2,
      image: 'images/home_main-visual-2.png',
      title: 'Solution',
      subtitle: 'Solution',
      description: '국책 연구소, 대학, 기업체 등 다양한 분야에 제품과 솔루션을 공급한 경험 보유',
      link: '/products'
    },
    {
      id: 3,
      image: 'images/home_main-visual-3.png',
      title: 'AI',
      subtitle: 'AI',
      description: '예측 가능한 방식으로의 변화',
      link: '/products'
    },
    {
      id: 4,
      image: 'images/home_main-visual-4.png',
      title: 'IT 인프라',
      subtitle: 'IT 인프라',
      description: '현존하는 모든 인프라 관리',
      link: '/products'
    },
    {
      id: 5,
      image: 'images/home_main-visual-5.png',
      title: 'IT 서비스',
      subtitle: 'IT 서비스',
      description: 'IT 서비스/자산 관리\n이제, 맞춤형으로',
      link: '/products'
    },
    {
      id: 6,
      image: 'images/home_main-visual-6.png',
      title: '시각화',
      subtitle: '시각화',
      description: '모든 데이터에 대한 완벽한 가시성 확보',
      link: '/products'
    }
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // 포매팅된 슬라이드 번호 (01, 02, 등)
  const formatSlideNumber = (num: number) => {
    return (num + 1).toString().padStart(2, '0');
  };

  // 현재 슬라이드에 따라 표시할 페이지네이션 점들을 계산
  const renderPagination = () => {
    const paginationItems = [];
    
    // 모든 슬라이드 번호에 대해 반복
    for (let i = 0; i < slides.length; i++) {
      // 현재 슬라이드 위치에는 플레이 버튼 삽입
      if (i === currentSlide) {
        paginationItems.push(
          <button
            key={`play-${i}`}
            type="button"
            className={styles.playButton}
            onClick={togglePlayPause}
            aria-label={isPaused ? '재생' : '일시정지'}
          >
            {isPaused ? (
              <svg className={styles.playButtonIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <div className={styles.pauseIcon}>II</div>
            )}
          </button>
        );
      } else {
        // 현재 슬라이드가 아닌 위치에는 점 표시
        paginationItems.push(
          <button
            key={`dot-${i}`}
            className={styles.paginationDot}
            onClick={() => goToSlide(i)}
            aria-label={`슬라이드 ${i + 1}로 이동`}
          />
        );
      }
    }
    
    return paginationItems;
  };

  return (
    <section className={styles.heroSection}>
      {/* 슬라이드 컨테이너 */}
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`${styles.slide} ${
              currentSlide === index ? styles.slideVisible : styles.slideHidden
            }`}
          >
            {/* 배경 이미지 적용 */}
            <div 
              className={styles.imageBackground}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.overlay}></div>
            </div>
            
            {/* 슬라이드 텍스트 */}
            <div className={styles.contentWrapper}>
              <div className="container mx-auto px-4 md:px-10">
                <div className={styles.contentContainer}>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                  <h2 className={styles.title}>{slide.title}</h2>
                  <p className={styles.description}>
                    {slide.description}
                  </p>
                  <Link 
                    href={slide.link}
                    className={styles.button}
                  >
                    더 알아보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 새로운 컨트롤러 - 오른쪽 정렬 */}
      <div className={styles.controlsWrapper}>
        {/* 컨트롤 행 */}
        <div className={styles.controlsRow}>
          {renderPagination()}
        </div>

        {/* 슬라이드 번호 */}
        <div className={styles.slideCounter}>
          <span className={styles.currentSlide}>{formatSlideNumber(currentSlide)}</span>
          <span className={styles.totalSlides}>/ {formatSlideNumber(slides.length - 1)}</span>
        </div>
      </div>

      {/* 좌우 네비게이션 버튼 (숨김) */}
      <button
        onClick={prevSlide}
        className={`${styles.navigationButton} ${styles.prevButton}`}
        aria-label="이전 슬라이드"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navigationButton} ${styles.nextButton}`}
        aria-label="다음 슬라이드"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection; 