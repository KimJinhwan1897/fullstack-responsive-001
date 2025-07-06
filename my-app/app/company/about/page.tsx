import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  // 핵심 가치 데이터
  const values = [
    {
      title: '혁신',
      description: '우리는 끊임없이 새로운 기술과 방법을 탐구하여 고객에게 최상의 솔루션을 제공합니다.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '신뢰',
      description: '우리는 정직과 투명성을 바탕으로 고객과 파트너, 직원들과의 관계를 구축합니다.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '협력',
      description: '우리는 함께할 때 더 큰 성과를 이룰 수 있다고 믿으며, 고객 및 파트너와 협력하여 최상의 결과를 만들어냅니다.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: '고객 중심',
      description: '우리는 항상 고객의 니즈와 성공을 최우선으로 생각하며, 최상의 경험을 제공하기 위해 노력합니다.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/company" className="text-blue-600 hover:underline">← 기업 소개로 돌아가기</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">기업 정보</h1>
      
      {/* 비전 및 미션 */}
      <div className="mb-16">
        <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">비전</h2>
          <p className="text-xl leading-relaxed">
            "혁신적인 기술로 세상을 더 나은 곳으로 만든다"
          </p>
        </div>
        
        <div className="bg-gray-800 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">미션</h2>
          <p className="text-xl leading-relaxed">
            "최첨단 기술 솔루션을 통해 기업들이 복잡한 디지털 환경에서 성공할 수 있도록 지원한다"
          </p>
        </div>
      </div>
      
      {/* 핵심 가치 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 경영진 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">경영진 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-60 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">임원 사진</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">홍길동 {index === 1 ? '대표이사' : index === 2 ? 'CTO' : 'COO'}</h3>
                <p className="text-gray-600 mb-4">
                  {index === 1 
                    ? '20년 이상의 IT 산업 경험을 바탕으로 회사를 이끌고 있습니다.' 
                    : index === 2 
                    ? '최신 기술 트렌드를 선도하며 혁신적인 제품 개발을 주도합니다.' 
                    : '탁월한 운영 전략으로 조직의 효율성을 극대화합니다.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 회사 연혁 */}
      <div>
        <h2 className="text-2xl font-bold mb-8">회사 연혁</h2>
        <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
          <div className="mb-12 relative">
            <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
            <h3 className="text-xl font-bold mb-2">2022</h3>
            <ul className="space-y-2">
              <li>글로벌 AI 솔루션 출시</li>
              <li>연매출 100억 달성</li>
              <li>해외 지사 확장 (일본, 베트남)</li>
            </ul>
          </div>
          
          <div className="mb-12 relative">
            <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
            <h3 className="text-xl font-bold mb-2">2020</h3>
            <ul className="space-y-2">
              <li>클라우드 모니터링 플랫폼 출시</li>
              <li>기술 혁신상 수상</li>
              <li>연구개발팀 확장</li>
            </ul>
          </div>
          
          <div className="mb-12 relative">
            <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
            <h3 className="text-xl font-bold mb-2">2018</h3>
            <ul className="space-y-2">
              <li>법인 전환</li>
              <li>시리즈 A 투자 유치</li>
              <li>본사 확장 이전</li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
            <h3 className="text-xl font-bold mb-2">2015</h3>
            <ul className="space-y-2">
              <li>회사 설립</li>
              <li>초기 제품 개발 및 출시</li>
              <li>시드 투자 유치</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 