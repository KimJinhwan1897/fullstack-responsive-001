'use client';

import { useEffect } from "react";
import IntroAnimation from "../components/IntroAnimation";
import HeroSection from "../components/HeroSection";
import CategoryGlass from "../components/CategoryGlass";
import AboutSection from "../components/AboutSection";
import PartnersMarquee from "../components/PartnersMarquee";
import CompanySection from "../components/CompanySection";

export default function Home() {
  console.log("Home page rendered");
  
  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col">
      {/* 인트로 애니메이션 */}
      <IntroAnimation />
      
      {/* 메인 히어로 섹션 */}
      <HeroSection />

      {/* 회사 소개 섹션 */}
      <CompanySection />
      
      {/* 최신 글래스모피즘 디자인 제품 카테고리 */}
      <CategoryGlass />
      
      {/* 파트너사 로고 섹션 - 마퀴 스타일 */}
      <PartnersMarquee />

    </div>
  );
}
