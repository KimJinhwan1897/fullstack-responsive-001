'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { categories, CategoryItem } from '../lib/categoryData';

export default function CategoryGlass() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // 반응형으로 한 페이지에 보여줄 아이템 개수 설정
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      
      if (window.innerWidth < 640) {
        setItemsPerPage(3); // 모바일
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6); // 태블릿
      } else {
        setItemsPerPage(6); // 데스크톱
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  
  // 현재 페이지의 카테고리만 표시
  const currentCategories = categories.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );
  
  // displayCategories를 계산하는 함수
  const getDisplayCategories = () => {
    // 현재 카테고리 가져오기
    const baseCats = [...currentCategories];
    
    // PC에서 카테고리가 부족하면 더미 카테고리 추가
    if (isDesktop && baseCats.length < 6) {
      const dummyCount = 6 - baseCats.length;
      for (let i = 0; i < dummyCount; i++) {
        baseCats.push({
          id: -i - 1, // 음수 ID로 설정
          name: 'Coming Soon',
          description: '새로운 제품 카테고리가 곧 추가될 예정입니다',
          icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
          bgColor: 'from-gray-500 to-slate-400',
          link: '#',
          isDummy: true
        });
      }
    }
    
    return baseCats;
  };
  
  // 표시할 카테고리 계산 (useEffect 내에서 상태 설정 대신 메모이제이션 활용)
  const displayCategories = getDisplayCategories();

  // 다음 페이지로 이동
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // 이전 페이지로 이동
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // 특정 페이지로 이동
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 to-gray-900"
    >
      {/* Blob decorations */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block py-1.5 px-4 rounded-full text-xs font-medium tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-500 backdrop-blur-md mb-4"
          >
            제품 카테고리
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 mb-4"
          >
            혁신적인 기술 솔루션
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            귀사의 비즈니스 성장을 위한 최신 기술 솔루션을 만나보세요.
            각 분야별 특화된 제품으로 디지털 혁신을 가속화합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: category.isDummy ? 0 : -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {category.isDummy ? (
                // 더미 카테고리는 클릭 불가능
                <div className="block h-full">
                  <div 
                    style={{ 
                      transform: inView ? `perspective(1000px) rotateX(${Math.sin(scrollY * 0.003 + index) * 5}deg) rotateY(${Math.cos(scrollY * 0.001 + index) * 5}deg)` : 'none' 
                    }}
                    className="h-full rounded-2xl p-1 transition-all duration-300 bg-gradient-to-br from-slate-700 to-slate-800 opacity-60 cursor-not-allowed"
                  >
                    <div className="h-full rounded-xl overflow-hidden backdrop-blur-lg bg-slate-800/80 border-slate-700 border-dashed p-6">
                      {/* 아이콘 */}
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-700 mb-6">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-6 h-6 text-slate-400"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                        </svg>
                      </div>
                      
                      {/* 콘텐츠 */}
                      <h3 className="text-xl font-bold mb-2 text-slate-400">
                        {category.name}
                      </h3>
                      
                      <p className="mb-6 line-clamp-2 text-slate-500">
                        {category.description}
                      </p>
                      
                      {/* 준비 중 표시 */}
                      <div className="flex items-center text-sm font-medium text-slate-500">
                        <span>준비 중...</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-4 h-4 ml-1"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // 일반 카테고리는 링크 이동 가능
                <Link href={category.link} className="block h-full">
                  <div 
                    style={{ 
                      transform: inView ? `perspective(1000px) rotateX(${Math.sin(scrollY * 0.003 + index) * 5}deg) rotateY(${Math.cos(scrollY * 0.001 + index) * 5}deg)` : 'none' 
                    }}
                    className="h-full rounded-2xl p-1 transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:from-slate-800 group-hover:to-slate-800"
                  >
                    <div className="h-full rounded-xl overflow-hidden backdrop-blur-lg bg-slate-900/80 relative border border-slate-800 group-hover:border-slate-700 p-6">
                      {/* 배경 그라데이션 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* 아이콘 */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.bgColor} mb-6`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-6 h-6 text-white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                        </svg>
                      </div>
                      
                      {/* 콘텐츠 */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">
                        {category.name}
                      </h3>
                      
                      <p className="text-slate-400 mb-6 line-clamp-2 group-hover:text-slate-300">
                        {category.description}
                      </p>
                      
                      {/* 더보기 버튼 */}
                      <div className="flex items-center text-sm font-medium">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${category.bgColor} group-hover:text-white`}>
                          더 알아보기
                        </span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 bg-clip-text text-transparent bg-gradient-to-r ${category.bgColor} group-hover:text-white`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      
                      {/* 우측 하단 장식 */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-800 rounded-tl-[100px] opacity-50"></div>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center mt-12 gap-4"
          >
            <button 
              onClick={prevPage}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${
                    currentPage === index
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={nextPage}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: totalPages > 1 ? 0.8 : 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/products"
            className="px-8 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-600/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            모든 제품 보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 