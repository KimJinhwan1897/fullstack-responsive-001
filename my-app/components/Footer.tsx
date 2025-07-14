'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 화면에 들어오면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // 화면에서 나가면 isVisible을 false로 설정
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // 30%가 보이면 효과 시작 (기존 10%에서 변경)
        rootMargin: '-50px 0px' // 뷰포트 하단에서 50px 더 내려가야 감지 시작
      }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.fadeIn : styles.fadeOut}`} 
      id="footer"
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
    </footer>
  );
} 