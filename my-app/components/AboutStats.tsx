'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutStats.module.css';

// 통계 데이터
const stats = [
  { id: 1, number: 20, suffix: '+', label: '연혁' },
  { id: 2, number: 300, suffix: '+', label: '고객사' },
  { id: 3, number: 50, suffix: '+', label: '특허 기술' },
  { id: 4, number: 99, suffix: '%', label: '고객 만족도' }
];

export default function AboutStats() {
  const [visible, setVisible] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const animationFrameRef = useRef<number | null>(null);

  // 스크롤 감지로 애니메이션 효과 적용
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimateStats(true), 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById('about-stats-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 숫자 증가 애니메이션
  useEffect(() => {
    if (!animateStats) return;

    const animationDuration = 2000; // 2초
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    
    let frame = 0;

    const animate = () => {
      const progress = frame / totalFrames;
      const newCounters = stats.map((stat) => Math.floor(progress * stat.number));
      
      setCounters(newCounters);
      frame++;

      if (frame <= totalFrames) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCounters(stats.map(stat => stat.number)); // 최종 숫자로 설정
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateStats]);

  return (
    <section id="about-stats-section" className={styles.aboutStatsSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} ${visible ? styles.fadeIn : ''}`}>
            <h2 className={styles.sectionTitle}>OTS Technology 소개</h2>
            <p className={styles.aboutText}>
              OTS Technology는 전자·통신·반도체 분야의 정밀 계측 솔루션 전문 기업으로, 
              국내외 다양한 기관 및 기업체에 맞춤형 솔루션을 제공하고 있습니다.
            </p>
            <p className={styles.aboutText}>
              최신 기술과 노하우를 바탕으로 고객의 요구사항에 최적화된 서비스를 제공하여
              고객사의 혁신과 성장을 지원합니다.
            </p>
            <div className={styles.aboutImageContainer}>
              <Image 
                src="/images/company-about.jpg" 
                alt="OTS Technology 사무실" 
                width={500} 
                height={300}
                className={styles.aboutImage}
                onError={(e) => {
                  e.currentTarget.src = '/images/company-about-placeholder.jpg';
                }}
              />
            </div>
            <Link href="/company/about" className={styles.aboutLink}>
              기업 소개 더 보기
              <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className={`${styles.statsContainer} ${visible ? styles.fadeIn : ''}`}>
            {stats.map((stat, index) => (
              <div className={styles.statItem} key={stat.id}>
                <div className={styles.statNumber}>
                  {counters[index]}
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 