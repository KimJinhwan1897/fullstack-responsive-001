'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * 페이지 라우팅 시 스크롤을 상단으로 이동시키는 컴포넌트
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 페이지가 변경될 때 스크롤을 상단으로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
} 