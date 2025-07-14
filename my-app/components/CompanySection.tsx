'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CompanySection.module.css';

export default function CompanySection() {
  // 첫 번째 파트와 두 번째 파트로 메시지 분리
  const firstPartMessages = [
    "우리의 첫걸음이 내일의 기준이 됩니다.",
    "대한민국 최초에서 대한민국 1등이 되기까지"
  ];
  
  const secondPartMessages = [
    "혁신을 통한 미래 가치 창출",
    "기술로 세상을 바꾸는 기업"
  ];

  // 애니메이션 상태 관리
  const [isFirstPartVisible, setIsFirstPartVisible] = useState(true);
  const [isSecondPartVisible, setIsSecondPartVisible] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const firstPartRef = useRef<HTMLDivElement>(null);
  const secondPartRef = useRef<HTMLDivElement>(null);
  
  // 애니메이션 무한 반복 구현
  useEffect(() => {
    const animationCycle = () => {
      // 첫 번째 메시지 페이드 인
      setIsFirstPartVisible(true);
      setIsSecondPartVisible(false);
      
      // 첫 번째 메시지 페이드 아웃 (3초 후)
      setTimeout(() => {
        setIsFirstPartVisible(false);
        
        // 첫 번째 메시지 페이드 아웃 완료 후 두 번째 메시지 페이드 인 (1초 후)
        setTimeout(() => {
          setIsSecondPartVisible(true);
          
          // 두 번째 메시지 페이드 아웃 (3초 후)
          setTimeout(() => {
            setIsSecondPartVisible(false);
            
            // 두 번째 메시지 페이드 아웃 완료 후 다시 사이클 시작 (1초 후)
            setTimeout(animationCycle, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    };
    
    // 애니메이션 시작
    animationCycle();
    
    return () => {
      // 컴포넌트 언마운트 시 모든 타이머 정리 (실제로는 정리하기 어려움)
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.companySection} id="company-section">
      <div className={styles.titleWrap}>
        <div className={styles.messageContainer}>
          {/* 첫 번째 메시지 파트 */}
          <div 
            ref={firstPartRef} 
            className={`${styles.sectionDescription} ${isFirstPartVisible ? styles.fadeIn : styles.fadeOut}`}
          >
            {firstPartMessages.map((line, index) => (
              <span key={index} style={{ display: 'block', marginBottom: '0.5rem' }}>
                {line}
              </span>
            ))}
          </div>
          
          {/* 두 번째 메시지 파트 */}
          <div 
            ref={secondPartRef} 
            className={`${styles.sectionDescription} ${isSecondPartVisible ? styles.fadeIn : styles.fadeOut}`}
          >
            {secondPartMessages.map((line, index) => (
              <span key={index} style={{ display: 'block', marginBottom: '0.5rem' }}>
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 