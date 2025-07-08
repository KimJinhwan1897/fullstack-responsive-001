'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import dynamic from 'next/dynamic';

// ParticlesBackground 컴포넌트를 동적으로 불러옵니다 (클라이언트 사이드 렌더링)
const ParticlesBackground = dynamic(
  () => import('../app/components/ParticlesBackground'),
  { 
    ssr: false,
    loading: () => <div className={styles.particlePlaceholder}></div>
  }
);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [showParticles, setShowParticles] = useState(false);
  
  const slides = useMemo(() => [
    {
      id: 1,
      image: '/images/home_main-visual-1.png',
      title: 'OTS Technology',
      subtitle: 'Technology',
      description: '전자·통신·반도체 분야의 정밀 계측 솔루션 전문 기업',
      link: '/products'
    },
    {
      id: 2,
      image: '/images/home_main-visual-2.png',
      title: 'Solution',
      subtitle: 'Solution',
      description: '국책 연구소, 대학, 기업체 등 다양한 분야에 제품과 솔루션을 공급한 경험 보유',
      link: '/products'
    },
    {
      id: 3,
      image: '/images/home_main-visual-3.png',
      title: 'AI',
      subtitle: 'AI',
      description: '예측 가능한 방식으로의 변화',
      link: '/products'
    },
    {
      id: 4,
      image: '/images/home_main-visual-4.png',
      title: 'IT 인프라',
      subtitle: 'IT 인프라',
      description: '현존하는 모든 인프라 관리',
      link: '/products'
    },
    {
      id: 5,
      image: '/images/home_main-visual-5.png',
      title: 'IT 서비스',
      subtitle: 'IT 서비스',
      description: 'IT 서비스/자산 관리\n이제, 맞춤형으로',
      link: '/products'
    },
    {
      id: 6,
      image: '/images/home_main-visual-6.png',
      title: '시각화',
      subtitle: '시각화',
      description: '모든 데이터에 대한 완벽한 가시성 확보',
      link: '/products'
    }
  ], []);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slideIntervalRef = useRef<number>(5000); // 기본 슬라이드 간격
  const transitionSpeedRef = useRef<number>(8); // 기본 전환 속도

  const nextSlide = () => {
    // 다음 슬라이드로 전환하기 전에 현재 슬라이드 인덱스 저장
    const prevSlide = currentSlide;
    const nextIndex = (prevSlide + 1) % slides.length;
    
    // 3번 슬라이드부터는 더 부드러운 전환을 위해 속도 조정
    if (nextIndex >= 2) { // 0-based index이므로 3번 슬라이드는 인덱스 2
      transitionSpeedRef.current = 10; // 더 느린 전환 속도
    } else {
      transitionSpeedRef.current = 8; // 기본 전환 속도
    }
    
    setCurrentSlide(nextIndex);
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

  // 모바일 감지 useEffect
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 체크
    checkIfMobile();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', checkIfMobile);

    // 모바일에서는 슬라이드 간격을 짧게 설정
    slideIntervalRef.current = isMobile ? 4000 : 5000;

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  // 초기 렌더링 감지용 useEffect
  useEffect(() => {
    // 페이지 로드 후 첫 번째 슬라이드에 확장 효과를 적용하기 위해 약간의 지연을 줍니다.
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, isMobile ? 30 : 50); // 모바일에서는 더 짧은 지연 시간
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // 파티클 지연 로딩
  useEffect(() => {
    // 모든 이미지가 로드된 후 파티클을 표시
    const allImagesLoaded = imagesLoaded.every(loaded => loaded);
    
    if (allImagesLoaded) {
      // 메인 컨텐츠 로드 후 파티클 표시
      const particleTimer = setTimeout(() => {
        setShowParticles(true);
      }, 1000);
      
      return () => clearTimeout(particleTimer);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, slideIntervalRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, slideIntervalRef.current, currentSlide]);

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

  // 이미지 프리로딩
  useEffect(() => {
    const loadedStates = Array(slides.length).fill(false);
    setImagesLoaded(loadedStates);
    
    slides.forEach((slide, index) => {
      const img = new window.Image();
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = slide.image;
    });
  }, [slides]);

  // 이미지 로드 상태에 따라 전환 속도 조정
  useEffect(() => {
    if (currentSlide >= 2 && !imagesLoaded[currentSlide]) {
      // 이미지가 로드되지 않은 경우 전환 속도를 느리게 설정
      transitionSpeedRef.current = 12;
    }
  }, [currentSlide, imagesLoaded]);

  return (
    <section className={styles.heroSection}>
      {/* 슬라이드 컨테이너 */}
      <div className={styles.slideContainer}>
        {/* 파티클 배경 추가 - 조건부 렌더링 */}
        {showParticles && <ParticlesBackground />}
        
        {/* 모든 슬라이드 이미지를 미리 로드 (숨김) */}
        <div style={{ display: 'none' }}>
          {slides.map((slide) => (
            <img 
              key={`preload-${slide.id}`}
              src={slide.image}
              alt="Preload"
              width={1}
              height={1}
            />
          ))}
        </div>
        
        {slides.map((slide, index) => {
          // 현재 슬라이드와 이전/다음 슬라이드만 렌더링
          const isVisible = index === currentSlide || 
                           index === (currentSlide + 1) % slides.length || 
                           index === (currentSlide - 1 + slides.length) % slides.length;
                           
          if (!isVisible) return null;
          
          return (
          <div 
            key={slide.id} 
            className={`${styles.slide} ${
              currentSlide === index ? styles.slideVisible : styles.slideHidden
            }`}
          >
            {/* 배경 이미지 적용 */}
            <div 
                className={`${styles.imageBackground} ${
                  currentSlide === index && !isInitialRender ? styles.imageAnimated : ''
                }`}
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  // GPU 가속 활성화
                  transform: currentSlide === index && !isInitialRender 
                    ? isMobile ? 'scale(1.05) translateZ(0)' : 'scale(1.15) translateZ(0)'
                    : isMobile ? 'scale(1.02) translateZ(0)' : 'scale(1.05) translateZ(0)',
                  // 전환 속도 동적 조정
                  transition: `transform ${index >= 2 ? transitionSpeedRef.current : 8}s ease`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
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
          );
        })}
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