'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './IntroAnimation.module.css';

export default function IntroAnimation() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFirstSceneActive, setIsFirstSceneActive] = useState<boolean>(true);
  const [isSecondSceneActive, setIsSecondSceneActive] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [debugMode, setDebugMode] = useState<boolean>(false);

  useEffect(() => {
    // 디버그 모드가 활성화되어 있으면 무조건 인트로를 표시
    if (debugMode) {
      console.log('Debug mode active, showing intro');
      setIsActive(true);
      setIsFirstSceneActive(true);
      setIsSecondSceneActive(false);
      setShouldRender(true);
      return;
    }

    // 메인 페이지가 아니면 인트로를 표시하지 않음
    if (pathname !== '/') {
      console.log('Not on home page, not rendering intro');
      setShouldRender(false);
      return;
    }

    // 클라이언트 사이드에서만 쿠키를 확인
    if (typeof window !== 'undefined') {
      const hasIntroCookie = document.cookie
        .split('; ')
        .some(row => row.startsWith('intro=done'));
      
      console.log('Checking for intro cookie:', hasIntroCookie ? 'Found' : 'Not found');
      
      if (hasIntroCookie) {
        // 쿠키가 있으면 인트로를 렌더링하지 않음
        console.log('Intro cookie found, not rendering intro');
        setShouldRender(false);
        return;
      }
      
      // 쿠키가 없으면 인트로 표시 및 쿠키 설정
      console.log('First visit, showing intro animation');
      setShouldRender(true);
      setIsActive(true);
      
      // 인트로 표시 여부를 쿠키에 저장 (24시간 유효)
      document.cookie = 'intro=done; path=/; max-age=86400';
      
      // 첫 번째 씬에서 두 번째 씬으로 전환
      const timer1 = setTimeout(() => {
        console.log('Transitioning to second scene');
        setIsFirstSceneActive(false);
        setIsSecondSceneActive(true);
      }, 2000);
      
      // 인트로 종료 및 페이드 아웃
      const timer2 = setTimeout(() => {
        console.log('Ending intro animation');
        setIsActive(false);
        
        // 애니메이션 종료 후 컴포넌트 제거
        setTimeout(() => {
          console.log('Removing intro from DOM');
          setShouldRender(false);
        }, 1500); // CSS 트랜지션 시간만큼 대기
      }, 4000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [pathname, debugMode]);

  // 쿠키 삭제 함수
  const deleteCookie = () => {
    document.cookie = 'intro=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert('인트로 쿠키가 삭제되었습니다. 페이지를 새로고침하세요.');
  };

  // 디버그 모드 토글 함수
  const toggleDebugMode = () => {
    setDebugMode(prev => !prev);
  };

  // 인트로를 렌더링하지 않아야 할 경우 null 반환
  if (!shouldRender && !debugMode) {
    return null;
  }

  return (
    <>
      {/* 디버그 툴 UI (항상 표시) */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 10000 }}>
        <button 
          onClick={deleteCookie}
          style={{ 
            padding: '8px 16px', 
            background: '#f44336', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            marginRight: '10px',
            cursor: 'pointer'
          }}
        >
          쿠키 삭제
        </button>
        <button 
          onClick={toggleDebugMode}
          style={{ 
            padding: '8px 16px', 
            background: debugMode ? '#4CAF50' : '#2196F3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {debugMode ? '디버그 끄기' : '디버그 켜기'}
        </button>
      </div>

      {/* 인트로 애니메이션 컨테이너 */}
      <div 
        className={`${styles['intro-container']} ${!isActive ? styles['hidden'] : ''}`}
      >
        {/* 첫 번째 씬 - 로고 */}
        {isFirstSceneActive && (
          <div className={`${styles.scene} ${styles['scene-first']}`}>
            <div className={styles['logo-container']}>
              <div className={styles['str-logo']}>
                <Image
                  src="/images/intro_logo_1.png"
                  alt="OTS TECHNOLOGY"
                  width={300}
                  height={150}
                  priority
                  className={styles['logo-image']}
                />
              </div>
            </div>
          </div>
        )}

        {/* 두 번째 씬 - 환영 메시지 */}
        {isSecondSceneActive && (
          <div className={`${styles.scene} ${styles['scene-second']}`}>
            <div className={styles['welcome-text']}>
              가치있는 솔루션<br />
              함께 하겠습니다
            </div>
          </div>
        )}
      </div>
    </>
  );
} 