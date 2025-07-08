'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectsGallery.module.css';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '기업 클라우드 마이그레이션',
    category: '클라우드 솔루션',
    image: '/images/project-cloud.jpg',
    link: '/projects/cloud-migration'
  },
  {
    id: 2,
    title: '실시간 모니터링 시스템',
    category: '옵저버빌리티',
    image: '/images/project-monitoring.jpg',
    link: '/projects/monitoring-system'
  },
  {
    id: 3,
    title: '예측 유지보수 AI',
    category: 'AI 및 머신러닝',
    image: '/images/project-ai.jpg',
    link: '/projects/ai-maintenance'
  },
  {
    id: 4,
    title: '통합 IT 인프라 구축',
    category: 'IT 인프라',
    image: '/images/project-infrastructure.jpg',
    link: '/projects/infrastructure-build'
  },
  {
    id: 5,
    title: '보안 모니터링 솔루션',
    category: '보안 및 네트워크',
    image: '/images/project-security.jpg',
    link: '/projects/security-monitoring'
  },
  {
    id: 6,
    title: '데이터 시각화 대시보드',
    category: '데이터 시각화',
    image: '/images/project-visualization.jpg',
    link: '/projects/visualization-dashboard'
  }
];

export default function ProjectsGallery() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 카테고리 목록 생성
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

    const target = document.getElementById('projects-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="projects-section" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.fadeIn : ''}`}>주요 프로젝트</h2>
        <p className={`${styles.sectionSubtitle} ${visible ? styles.fadeIn : ''}`}>
          OTS Technology의 주요 프로젝트 및 성공 사례를 소개합니다
        </p>
        
        <div className={`${styles.categoryFilters} ${visible ? styles.fadeIn : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.activeCategory : ''}`}
            >
              {category === 'all' ? '전체' : category}
            </button>
          ))}
        </div>
        
        <div className={`${styles.projectsGrid} ${visible ? styles.fadeIn : ''}`}>
          {filteredProjects.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectImage}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src = '/images/project-placeholder.jpg';
                  }}
                />
              </div>
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
                <Link href={project.link} className={styles.projectLink}>
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaContainer} ${visible ? styles.fadeIn : ''}`}>
          <Link href="/projects" className={styles.ctaButton}>
            모든 프로젝트 보기
            <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 