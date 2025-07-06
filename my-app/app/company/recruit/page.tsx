'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RecruitPage() {
  // 채용 공고 데이터
  const jobs = [
    {
      id: 1,
      title: '풀스택 개발자',
      department: '개발팀',
      type: '정규직',
      location: '서울 강남',
      experience: '3년 이상',
      description: '클라우드 기반 웹 애플리케이션 개발 및 유지보수를 담당할 풀스택 개발자를 찾고 있습니다.',
      requirements: [
        'React, Vue.js, Angular 중 하나 이상의 프레임워크에 대한 깊은 이해',
        'Node.js, Python, Java 중 하나 이상의 백엔드 기술 경험',
        '데이터베이스 설계 및 최적화 능력',
        '클라우드 서비스(AWS, GCP, Azure) 사용 경험',
        '애자일 개발 방법론에 대한 이해'
      ],
      benefits: [
        '경쟁력 있는 연봉 및 성과급',
        '자유로운 재택근무',
        '최신 장비 지원',
        '교육비 및 도서 구매 지원',
        '건강검진 및 단체보험 가입'
      ]
    },
    {
      id: 2,
      title: 'AI/ML 엔지니어',
      department: 'AI 연구소',
      type: '정규직',
      location: '서울 강남',
      experience: '5년 이상',
      description: '머신러닝 모델 개발 및 최적화를 담당할 AI/ML 엔지니어를 모집합니다.',
      requirements: [
        '머신러닝 모델 설계 및 구현 경험',
        'Python, TensorFlow, PyTorch 활용 능력',
        '데이터 분석 및 시각화 능력',
        'NLP 또는 컴퓨터 비전 프로젝트 경험',
        '관련 분야 석사 이상 학위 소지자 우대'
      ],
      benefits: [
        '경쟁력 있는 연봉 및 성과급',
        '연구 논문 발표 지원',
        '국내외 학회 참가 지원',
        '최신 장비 및 소프트웨어 제공',
        '유연한 근무 시간'
      ]
    },
    {
      id: 3,
      title: '클라우드 솔루션 아키텍트',
      department: '클라우드 서비스팀',
      type: '정규직',
      location: '서울 강남',
      experience: '7년 이상',
      description: '고객사에 최적화된 클라우드 아키텍처를 설계하고 컨설팅하는 업무를 담당합니다.',
      requirements: [
        '클라우드 아키텍처 설계 및 구현 경험',
        'AWS, GCP, Azure 중 하나 이상의 클라우드 서비스 전문 지식',
        '관련 자격증 보유자 우대 (AWS SA, GCP PCA, Azure Solutions Architect 등)',
        '대규모 시스템 마이그레이션 프로젝트 경험',
        '영어 의사소통 능력'
      ],
      benefits: [
        '경쟁력 있는 연봉 및 성과급',
        '자격증 취득 지원 및 인센티브',
        '국내외 출장 지원',
        '전문 교육 프로그램 참여 기회',
        '탄력적 근무제'
      ]
    }
  ];

  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    setActiveJobId(activeJobId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/company" className="text-blue-600 hover:underline">← 기업 소개로 돌아가기</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">인재 채용</h1>
      <p className="mb-12 max-w-2xl text-lg">
        OTS TECHNOLOGY는 열정적이고 창의적인 인재를 찾고 있습니다. 
        함께 성장하고 혁신적인 기술로 미래를 만들어갈 여러분을 기다립니다.
      </p>
      
      {/* 채용 철학 */}
      <div className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">채용 철학</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">인재 중심</h3>
            <p className="text-gray-600">우리는 직원들의 성장과 발전을 최우선으로 생각합니다. 개인의 역량을 발휘할 수 있는 환경을 제공합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">지속적 학습</h3>
            <p className="text-gray-600">끊임없이 배우고 성장하는 문화를 추구합니다. 다양한 교육과 자기계발 기회를 지원합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">다양성 존중</h3>
            <p className="text-gray-600">다양한 배경과 관점을 가진 인재들이 모여 더 큰 가치를 창출합니다. 포용적인 문화를 지향합니다.</p>
          </div>
        </div>
      </div>
      
      {/* 채용 공고 목록 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">현재 채용 중인 포지션</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleJob(job.id)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-600">{job.department} | {job.type} | {job.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="text-blue-600 mr-2">자세히 보기</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeJobId === job.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </button>
              
              {activeJobId === job.id && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="mb-6 text-lg">{job.description}</p>
                  
                  <h4 className="font-bold mb-2">자격 요건</h4>
                  <ul className="list-disc pl-6 mb-6">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="mb-1">{req}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-bold mb-2">혜택 및 복지</h4>
                  <ul className="list-disc pl-6 mb-6">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="mb-1">{benefit}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#" 
                    className="bg-blue-600 text-white px-6 py-2 rounded inline-block hover:bg-blue-700 transition-colors"
                  >
                    지원하기
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* 채용 프로세스 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">채용 프로세스</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-6 border-r border-b md:border-b-0 border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">1</div>
            <h3 className="text-lg font-bold mb-2">지원서 접수</h3>
            <p className="text-gray-600">온라인으로 이력서와 포트폴리오를 제출합니다.</p>
          </div>
          <div className="flex-1 p-6 border-r border-b md:border-b-0 border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">2</div>
            <h3 className="text-lg font-bold mb-2">서류 심사</h3>
            <p className="text-gray-600">자격 요건 및 경력을 검토하여 1차 선발합니다.</p>
          </div>
          <div className="flex-1 p-6 border-r border-b md:border-b-0 border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">3</div>
            <h3 className="text-lg font-bold mb-2">기술 면접</h3>
            <p className="text-gray-600">포지션에 필요한 기술적 역량을 평가합니다.</p>
          </div>
          <div className="flex-1 p-6 border-b md:border-b-0 border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">4</div>
            <h3 className="text-lg font-bold mb-2">최종 면접</h3>
            <p className="text-gray-600">문화적 적합성과 소프트 스킬을 평가합니다.</p>
          </div>
        </div>
      </div>
      
      {/* 문의 안내 */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">채용 문의</h2>
        <p className="mb-6">
          채용과 관련하여 궁금한 점이 있으시면 아래 연락처로 문의해 주세요.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="mailto:recruit@otstechnology.com" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-blue-700 transition-colors">
            이메일: recruit@otstechnology.com
          </a>
          <a href="tel:02-1234-5679" className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-gray-900 transition-colors">
            전화: 02-1234-5679
          </a>
        </div>
      </div>
    </div>
  );
} 