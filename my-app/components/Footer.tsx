import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
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
                서울특별시 강동구 고덕비즈밸리로 26, 강동U1센터 B동 607호<br /><br />
                사업자번호 : 414-86-02540<br /><br />TEL : 02-2215-6171<br /><br />FAX : 02-2215-6171<br /><br />
                이메일 : Kys6171@otstech.co.kr
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