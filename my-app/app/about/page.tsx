import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* 소개 페이지 메인 배너 */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6">회사 소개</h1>
          <p className="text-xl max-w-3xl mx-auto">
            최신 웹 기술을 활용한 혁신적인 솔루션을 제공하는 전문 개발 팀입니다.
          </p>
        </div>
      </div>

      {/* 회사 미션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">우리의 미션</h2>
            <p className="text-lg mb-6">
              우리는 기술의 힘을 통해 비즈니스와 사회에 긍정적인 변화를 가져오는 것을 목표로 합니다. 
              사용자 친화적이고 효율적인 웹 서비스를 제공하여 고객의 디지털 여정을 지원합니다.
            </p>
            <p className="text-lg">
              매일 발전하는 웹 기술 생태계 속에서 최신 트렌드를 선도하며, 지속 가능한 개발 방법을 추구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">회사 연혁</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* 타임라인 중앙선 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
              
              {/* 2020년 */}
              <div className="mb-16 relative">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-600">2020년</h3>
                    <p className="mt-2">회사 설립 및 첫 프로젝트 시작</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
              
              {/* 2021년 */}
              <div className="mb-16 relative">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-blue-600">2021년</h3>
                    <p className="mt-2">주요 클라이언트 확보 및 팀 확장</p>
                  </div>
                </div>
              </div>
              
              {/* 2022년 */}
              <div className="mb-16 relative">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-600">2022년</h3>
                    <p className="mt-2">클라우드 솔루션 출시 및 기술 스택 강화</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
              
              {/* 2023년 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-blue-600">2023년</h3>
                    <p className="mt-2">국제 시장 진출 및 AI 서비스 개발 시작</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">핵심 팀원 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 팀원 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">홍길동</h3>
                <p className="text-blue-600 mb-4">CEO / 창립자</p>
                <p>10년 이상의 웹 개발 경험을 가진 기술 전문가이자 비전 설계자입니다.</p>
              </div>
            </div>
            
            {/* 팀원 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">김철수</h3>
                <p className="text-blue-600 mb-4">CTO</p>
                <p>클라우드 아키텍처 및 백엔드 시스템 전문가로 확장 가능한 인프라 구축을 담당합니다.</p>
              </div>
            </div>
            
            {/* 팀원 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">이영희</h3>
                <p className="text-blue-600 mb-4">디자인 책임자</p>
                <p>사용자 중심 디자인 전문가로 직관적이고 아름다운 UI/UX 경험을 설계합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 고객사 로고 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">함께한 고객사</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white h-24 rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-2xl text-gray-300 font-bold">로고 {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 일해보세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            귀사의 디지털 전환을 위한 최고의 파트너가 되겠습니다.
            지금 바로 문의하세요.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            문의하기
          </a>
        </div>
      </section>
    </div>
  );
} 