'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  // 뉴스 카테고리
  const categories = [
    { id: 'all', name: '전체' },
    { id: 'press', name: '보도자료' },
    { id: 'company', name: '회사소식' },
    { id: 'events', name: '행사' },
    { id: 'awards', name: '수상' }
  ];

  // 뉴스 데이터
  const newsItems = [
    {
      id: 1,
      title: 'OTS TECHNOLOGY, 글로벌 클라우드 엑스포 참가',
      category: 'events',
      date: '2023-10-15',
      summary: '우리 회사가 서울에서 열린 글로벌 클라우드 엑스포에 참가하여 최신 클라우드 솔루션을 선보였습니다.',
      image: '/images/news-1.jpg'
    },
    {
      id: 2,
      title: '신규 AI 플랫폼 출시로 AI 시장 진출',
      category: 'press',
      date: '2023-09-22',
      summary: '당사는 기업용 AI 분석 솔루션 "AI Insights"를 공식 출시하여 AI 비즈니스 시장에 진출했습니다.',
      image: '/images/news-2.jpg'
    },
    {
      id: 3,
      title: '2023 디지털 혁신상 수상',
      category: 'awards',
      date: '2023-08-10',
      summary: '우리 회사의 클라우드 플랫폼이 2023년 디지털 혁신상을 수상하는 영예를 안았습니다.',
      image: '/images/news-3.jpg'
    },
    {
      id: 4,
      title: '일본 지사 설립으로 글로벌 사업 확장',
      category: 'company',
      date: '2023-07-03',
      summary: '글로벌 사업 확장의 일환으로 일본 도쿄에 지사를 설립하여 아시아 시장 진출을 본격화합니다.',
      image: '/images/news-4.jpg'
    },
    {
      id: 5,
      title: '신규 임원 영입으로 경영진 강화',
      category: 'company',
      date: '2023-06-15',
      summary: '글로벌 기업 출신의 전문 경영인을 신임 COO로 영입하여 경영 역량을 강화했습니다.',
      image: '/images/news-5.jpg'
    },
    {
      id: 6,
      title: '차세대 옵저버빌리티 플랫폼 발표',
      category: 'press',
      date: '2023-05-20',
      summary: '인공지능 기술을 활용한 차세대 옵저버빌리티 플랫폼 "Vision360"을 발표했습니다.',
      image: '/images/news-6.jpg'
    },
    {
      id: 7,
      title: '연례 고객 컨퍼런스 성공리에 개최',
      category: 'events',
      date: '2023-04-12',
      summary: '전국 고객사들을 초청하여 연례 기술 컨퍼런스를 성공적으로 개최했습니다.',
      image: '/images/news-7.jpg'
    },
    {
      id: 8,
      title: '탄소중립 이니셔티브 발표',
      category: 'company',
      date: '2023-03-22',
      summary: '2030년까지 탄소중립 달성을 목표로 하는 친환경 이니셔티브를 발표했습니다.',
      image: '/images/news-8.jpg'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // 선택된 카테고리에 따라 뉴스 필터링
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(news => news.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/company" className="text-blue-600 hover:underline">← 기업 소개로 돌아가기</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">뉴스룸</h1>
      <p className="mb-12 max-w-2xl text-lg">
        OTS TECHNOLOGY의 최신 소식과 보도자료를 확인하세요.
      </p>
      
      {/* 카테고리 필터 */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* 뉴스 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(news => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {/* 실제 이미지가 없으므로 임시 색상 블록으로 대체 */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <span className="text-blue-400">뉴스 이미지</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mr-2">
                  {categories.find(c => c.id === news.category)?.name}
                </span>
                <span className="text-gray-500 text-sm">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.summary}</p>
              <Link 
                href={`/company/news/${news.id}`} 
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                자세히 보기
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* 페이지네이션 */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <a href="#" className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">이전</a>
          <a href="#" className="px-3 py-2 rounded-md bg-blue-600 text-white">1</a>
          <a href="#" className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">2</a>
          <a href="#" className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">3</a>
          <span className="px-3 py-2 text-gray-600">...</span>
          <a href="#" className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">다음</a>
        </nav>
      </div>
      
      {/* 뉴스레터 구독 */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">뉴스레터 구독</h2>
          <p className="mb-6 text-gray-700">
            OTS TECHNOLOGY의 최신 소식을 이메일로 받아보세요.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="이메일 주소" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              구독하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 