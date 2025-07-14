'use client';

import { useEffect, useRef } from 'react';
import styles from './CompanyTimeline.module.css';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function CompanyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const timelineItems: TimelineItem[] = [
    {
      year: '2008',
      title: '회사 설립',
      description: '혁신적인 기술 솔루션을 제공하기 위한 첫 걸음을 내딛었습니다.'
    },
    {
      year: '2012',
      title: '첫 번째 특허 등록',
      description: '독자적인 기술력을 인정받아 첫 번째 특허를 등록했습니다.'
    },
    {
      year: '2015',
      title: '해외 시장 진출',
      description: '글로벌 시장으로 영역을 확장하며 국제적인 기업으로 성장했습니다.'
    },
    {
      year: '2018',
      title: '연구소 설립',
      description: '미래 기술 개발을 위한 전문 연구소를 설립하여 R&D 역량을 강화했습니다.'
    },
    {
      year: '2021',
      title: '클라우드 서비스 출시',
      description: '혁신적인 클라우드 솔루션을 출시하여 시장에 새로운 패러다임을 제시했습니다.'
    },
    {
      year: '현재',
      title: '끊임없는 도전',
      description: '기술로 세상을 바꾸는 기업으로서 더 나은 미래를 향해 나아갑니다.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>회사 연혁</h2>
        <p className={styles.sectionSubtitle}>우리의 여정</p>
        
        <div className={styles.timeline} ref={timelineRef}>
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.yearBadge}>{item.year}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 