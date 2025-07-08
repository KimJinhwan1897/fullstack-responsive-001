'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './PartnersCards.module.css';
import Placeholder from './Placeholder';

// 파트너 데이터
const partners = [
  { 
    id: 1, 
    name: '삼성전자', 
    logo: '/images/partner-samsung.png',
    description: '글로벌 테크 리더로서 혁신적인 기술과 제품 개발',
    partnership: '클라우드 인프라 및 IoT 솔루션'
  },
  { 
    id: 2, 
    name: '현대자동차', 
    logo: '/images/partner-hyundai.png',
    description: '스마트 모빌리티 솔루션과 미래 자동차 산업을 선도',
    partnership: '커넥티드 카 플랫폼 개발'
  },
  { 
    id: 3, 
    name: 'LG', 
    logo: '/images/partner-lg.png',
    description: '가전, 모바일, 비즈니스 솔루션 분야의 글로벌 기업',
    partnership: 'AI 및 스마트홈 솔루션'
  },
  { 
    id: 4, 
    name: 'SK', 
    logo: '/images/partner-sk.png',
    description: '통신, 에너지, 바이오 등 다양한 분야의 혁신 기업',
    partnership: '빅데이터 분석 및 클라우드 서비스'
  },
  { 
    id: 5, 
    name: 'KT', 
    logo: '/images/partner-kt.png',
    description: '통신과 미디어, ICT 융합 서비스를 제공하는 기업',
    partnership: '5G 인프라 및 엣지 컴퓨팅'
  },
  { 
    id: 6, 
    name: '신한은행', 
    logo: '/images/partner-shinhan.png',
    description: '디지털 금융 서비스 혁신을 선도하는 금융 기관',
    partnership: '핀테크 솔루션 및 보안 시스템'
  }
];

export default function PartnersCards() {
  const [visible, setVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  
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

    const target = document.getElementById('partners-cards-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 파트너 카드 색상 (그라데이션)
  const cardGradients = [
    'linear-gradient(135deg, #4f46e5, #2563eb)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #ef4444, #dc2626)',
    'linear-gradient(135deg, #ec4899, #db2777)',
  ];

  // 파트너사 클릭 핸들러
  const handlePartnerClick = (id: number) => {
    if (selectedPartner === id) {
      setSelectedPartner(null);
    } else {
      setSelectedPartner(id);
    }
  };

  return (
    <section id="partners-cards-section" className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${visible ? styles.fadeIn : ''}`}>
          <span className={styles.sectionTag}>PARTNERS</span>
          <h2 className={styles.sectionTitle}>
            성공적인 비즈니스를 위한 <span className={styles.highlight}>파트너십</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            OTS Technology는 국내외 선도적인 기업들과 파트너십을 통해 
            고객의 디지털 혁신을 지원합니다
          </p>
        </div>
        
        <div className={`${styles.partnersGrid} ${visible ? styles.fadeIn : ''}`}>
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className={`${styles.partnerCard} ${selectedPartner === partner.id ? styles.expanded : ''}`}
              style={{ 
                backgroundImage: cardGradients[index % cardGradients.length],
                transitionDelay: `${index * 0.1}s`
              }}
              onClick={() => handlePartnerClick(partner.id)}
            >
              <div className={styles.cardContent}>
                <div className={styles.logoContainer}>
                  <Placeholder
                    text={partner.name}
                    width={80}
                    height={80}
                    bgColor="white"
                    textColor="#1e293b"
                    style={{ borderRadius: '50%', fontWeight: 'bold', fontSize: '0.875rem' }}
                    className={styles.partnerLogo}
                  />
                </div>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                
                <div className={styles.partnerDetails}>
                  <p className={styles.partnerDescription}>{partner.description}</p>
                  <div className={styles.partnershipInfo}>
                    <span className={styles.partnershipLabel}>주요 협력 분야</span>
                    <p className={styles.partnershipValue}>{partner.partnership}</p>
                  </div>
                  <Link href="#" className={styles.learnMore}>
                    더 알아보기
                    <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaContainer} ${visible ? styles.fadeIn : ''}`}>
          <Link href="/partners" className={styles.viewAllBtn}>
            모든 파트너사 보기
          </Link>
        </div>
      </div>

      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
    </section>
  );
} 