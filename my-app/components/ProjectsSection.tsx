'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProjectsSection.module.css';
import Placeholder from './Placeholder';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '금융권 클라우드 마이그레이션',
    category: '클라우드',
    image: '/images/project-finance.jpg',
    description: '대규모 금융 기관의 레거시 시스템을 클라우드로 안전하게 마이그레이션하여 비용 절감 및 확장성 향상',
    link: '/projects/finance-cloud'
  },
  {
    id: 2,
    title: '제조업 IoT 플랫폼 구축',
    category: 'IoT & 인프라',
    image: '/images/project-manufacturing.jpg',
    description: '스마트 팩토리 구현을 위한 IoT 센서 네트워크 및 실시간 모니터링 플랫폼 구축',
    link: '/projects/manufacturing-iot'
  },
  {
    id: 3,
    title: '유통업 AI 수요 예측 시스템',
    category: 'AI & 분석',
    image: '/images/project-retail.jpg',
    description: '머신러닝 기반 수요 예측 모델 개발로 재고 최적화 및 비용 절감 달성',
    link: '/projects/retail-ai'
  },
  {
    id: 4,
    title: '공공기관 통합 모니터링 체계 구축',
    category: '옵저버빌리티',
    image: '/images/project-government.jpg',
    description: '다수의 시스템을 통합 모니터링하는 대시보드 구축으로 장애 대응 시간 단축',
    link: '/projects/government-monitoring'
  },
  {
    id: 5,
    title: '의료기관 데이터 분석 플랫폼',
    category: '데이터 플랫폼',
    image: '/images/project-healthcare.jpg',
    description: '의료 데이터의 안전한 수집 및 분석을 위한 통합 플랫폼 구축',
    link: '/projects/healthcare-data'
  },
  {
    id: 6,
    title: '통신사 네트워크 최적화',
    category: '네트워크',
    image: '/images/project-telecom.jpg',
    description: '머신러닝 기반 네트워크 트래픽 분석 및 자동 최적화 시스템 개발',
    link: '/projects/telecom-network'
  }
];

// 카테고리 필터 옵션
const filterOptions = [
  { value: 'all', label: '전체' },
  { value: '클라우드', label: '클라우드' },
  { value: 'AI & 분석', label: 'AI & 분석' },
  { value: 'IoT & 인프라', label: 'IoT & 인프라' },
  { value: '옵저버빌리티', label: '옵저버빌리티' },
  { value: '데이터 플랫폼', label: '데이터 플랫폼' },
  { value: '네트워크', label: '네트워크' }
];

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // 필터 변경 핸들러
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === filter);
      setFilteredProjects(filtered);
    }
  };

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
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>최근 프로젝트</h2>
          <p className={styles.sectionSubtitle}>OTS Technology의 성공적인 구축 사례를 소개합니다</p>
        </div>

        <div className={`${styles.filtersContainer} ${visible ? styles.fadeIn : ''}`}>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`${styles.filterButton} ${activeFilter === option.value ? styles.activeFilter : ''}`}
              onClick={() => handleFilterChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className={`${styles.projectsGrid} ${visible ? styles.fadeIn : ''}`}>
          {filteredProjects.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectImageContainer}>
                <Placeholder 
                  text={project.category}
                  bgColor={
                    project.category === '클라우드' ? "#3b82f6" :
                    project.category === 'AI & 분석' ? "#8b5cf6" :
                    project.category === 'IoT & 인프라' ? "#10b981" :
                    project.category === '옵저버빌리티' ? "#f59e0b" :
                    project.category === '데이터 플랫폼' ? "#ec4899" :
                    "#14b8a6"
                  }
                  textColor="white"
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <Link href={project.link} className={styles.viewProjectBtn}>
                    자세히 보기
                  </Link>
                </div>
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaContainer} ${visible ? styles.fadeIn : ''}`}>
          <Link href="/projects" className={styles.viewAllBtn}>
            모든 프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
} 