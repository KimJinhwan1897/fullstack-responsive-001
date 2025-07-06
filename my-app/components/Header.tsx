'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 스크롤 감지 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // 스크롤 중임을 표시
      setIsScrolling(true);
      
      // 스크롤이 멈춘 후 일정 시간이 지나면 스크롤 상태 해제
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrolled]);

  // 현재 상태에 따라 적절한 로고 선택
  const logoSrc = "/images/header_logo_none.png";

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerDefault} ${isHovered || isScrolling ? styles.headerActive : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        <div className={styles.headerInner}>
          {/* 로고 */}
          <div className={styles.logoContainer}>
            <h1 className={styles.logoTitle}>
              <Link href="/" className={styles.logoWrapper}>
                <Image 
                  src={logoSrc}
                  alt="OTS TECHNOLOGY" 
                  width={180} 
                  height={40} 
                  className={styles.logoImage}
                  priority
                />
              </Link>
            </h1>
          </div>

          {/* PC 네비게이션 - 모바일에서는 숨김 */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/products" className={styles.navLink}>
                  제품안내
                </Link>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownContent}>
                    <Link href="/products/cloud" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#3b82f6' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                      <span>클라우드</span>
                    </Link>
                    <Link href="/products/ai" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#8b5cf6' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>AI</span>
                    </Link>
                    <Link href="/products/observability" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#6366f1' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span>옵저버빌리티</span>
                    </Link>
                    <Link href="/products/infrastructure" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#10b981' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      <span>IT 인프라</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link href="/customer" className={styles.navLink}>
                  고객문의
                </Link>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownContent}>
                    <Link href="/customer/faq" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#f59e0b' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span>FAQ</span>
                    </Link>
                    <Link href="/customer/support" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#14b8a6' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>문의하기</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link href="/company" className={styles.navLink}>
                  기업소개
                </Link>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownContent}>
                    <Link href="/company/about" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#3b82f6' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd" />
                      </svg>
                      <span>기업 정보</span>
                    </Link>
                    <Link href="/company/news" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#ef4444' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                      </svg>
                      <span>뉴스룸</span>
                    </Link>
                    <Link href="/company/recruit" className={styles.dropdownItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon} style={{ color: '#6366f1' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      <span>인재 채용</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link href="/resources" className={styles.navLink}>
                  자료실
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/used-products" className={styles.navLink}>
                  중고제품
                </Link>
              </li>
            </ul>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className={styles.mobileMenuButton}>
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuVisible : styles.mobileMenuHidden}`}>
        <div className={styles.mobileMenuContainer}>
          <nav className={styles.mobileNav}>
            <div className={styles.mobileMenuSection}>
              <ul className={styles.mobileNavList}>
                <li>
                  <Link href="/products" className={styles.mobileNavItem}>제품안내</Link>
                </li>
                <li>
                  <Link href="/customer" className={styles.mobileNavItem}>고객문의</Link>
                </li>
                <li>
                  <Link href="/company" className={styles.mobileNavItem}>기업소개</Link>
                </li>
                <li>
                  <Link href="/resources" className={styles.mobileNavItem}>자료실</Link>
                </li>
                <li>
                  <Link href="/used-products" className={styles.mobileNavItem}>중고제품</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 