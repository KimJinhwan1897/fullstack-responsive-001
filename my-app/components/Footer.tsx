'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // ref로 스크롤 방향을 관리 (상태보다 더 안정적)
  const isScrollingDownRef = useRef(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  // 스크롤 방향을 감지하는 함수 (throttle 적용)
  const updateScrollDirection = () => {
    const currentScrollY = window.scrollY;
    
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        isScrollingDownRef.current = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      
      ticking.current = true;
    }
  };

  // 스크롤 이벤트 리스너
  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);
  
  // Footer 영역 Intersection Observer
  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // 화면에 들어올 때는 항상 페이드 인
          if (entry.isIntersecting) {
            setIsVisible(true);
          } 
          // 화면에서 나갈 때는 스크롤 방향에 따라 처리
          else {
            // 올리는 중일 때만 페이드 아웃
            if (!isScrollingDownRef.current) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: [0.1],
        rootMargin: '-10% 0px'
      }
    );

    if (contentRef.current) {
      footerObserver.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        footerObserver.unobserve(contentRef.current);
      }
    };
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className={styles.footer}
      id="footer"
    >
      {/* 콘텐츠 영역에만 페이드 인/아웃 효과 적용 */}
      <div 
        ref={contentRef} 
        className={`${styles.footerContent} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className={styles.layoutContainer}>
          <div className={styles.footerContentArea}>
            <div className={styles.footerInfoWrap}>
              <div className={styles.footerLogo}>
                <Link href="/">
                  <Image 
                    src="/images/logo_2.png" 
                    alt="OTS Technology" 
                    width={120} 
                    height={40} 
                    className={styles.logoImg}
                  />
                </Link>
              </div>
              <div className={styles.footerInfo}>
                <p className={styles.footerCeo}>(주)오티에스 테크놀러지</p>
                <address className={styles.footerAddress}>
                  서울특별시 강동구 고덕비즈밸리로 26 <br />
                  강동U1센터 B동 607호<br /><br />
                  대표 : 김유석<br />
                  사업자번호 : 414-86-02540<br />
                  TEL : 02-2215-6171<br />FAX : 02-2215-6171<br />
                  이메일 : Kys6171@otstech.co.kr<br />
                  
                </address>
              </div>
            </div>
          </div>
          <div className={styles.footerBottomArea}>
            <div className={styles.footerTerm}>
              <Link href="/policy/email" className={styles.link}>이메일무단수집거부</Link>
              <Link href="/policy/privacy" className={styles.link}>개인정보처리방침</Link>
              <Link href="/policy/terms" className={styles.link}>이용약관</Link>
            </div>
            <p className={styles.copyright}>
              Copyright © {new Date().getFullYear()} ㈜오티에스 테크놀러지. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 