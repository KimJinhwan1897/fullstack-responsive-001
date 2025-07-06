import Link from 'next/link';
import Image from 'next/image';

export default function CompanyPage() {
  const sections = [
    {
      id: 'about',
      title: '기업 정보',
      description: 'OTS TECHNOLOGY의 비전, 미션 및 핵심 가치에 대해 알아보세요.',
      link: '/company/about',
      linkText: '자세히 보기',
      imageSrc: '/images/company-about.jpg'
    },
    {
      id: 'news',
      title: '뉴스룸',
      description: '최신 회사 소식, 보도 자료 및 미디어 자료를 확인하세요.',
      link: '/company/news',
      linkText: '뉴스 보기',
      imageSrc: '/images/company-news.jpg'
    },
    {
      id: 'recruit',
      title: '인재 채용',
      description: '함께 성장할 열정적인 인재를 찾고 있습니다. 채용 정보를 확인하세요.',
      link: '/company/recruit',
      linkText: '채용 정보',
      imageSrc: '/images/company-recruit.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">기업 소개</h1>
      <p className="mb-12 max-w-2xl text-lg">
        OTS TECHNOLOGY는 혁신적인 기술 솔루션을 제공하는 글로벌 기업으로,
        클라우드, AI, 옵저버빌리티, IT 인프라 분야에서 선도적인 위치를 차지하고 있습니다.
      </p>
      
      {/* 회사 소개 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {/* 실제 이미지가 없으므로 임시 색상 블록으로 대체 */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                <span className="text-blue-500 font-medium">{section.title} 이미지</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <Link href={section.link} className="text-blue-600 font-medium hover:underline">
                {section.linkText} →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* 회사 개요 */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">회사 개요</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <dl>
              <div className="mb-4">
                <dt className="font-medium text-gray-700">설립년도</dt>
                <dd className="mt-1 text-lg">2015년</dd>
              </div>
              <div className="mb-4">
                <dt className="font-medium text-gray-700">대표이사</dt>
                <dd className="mt-1 text-lg">홍길동</dd>
              </div>
              <div className="mb-4">
                <dt className="font-medium text-gray-700">임직원 수</dt>
                <dd className="mt-1 text-lg">150명</dd>
              </div>
            </dl>
          </div>
          <div>
            <dl>
              <div className="mb-4">
                <dt className="font-medium text-gray-700">본사</dt>
                <dd className="mt-1 text-lg">서울특별시 강남구 테헤란로 123</dd>
              </div>
              <div className="mb-4">
                <dt className="font-medium text-gray-700">주요 사업</dt>
                <dd className="mt-1 text-lg">클라우드 솔루션, AI 플랫폼, IT 인프라 구축</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">대표 전화</dt>
                <dd className="mt-1 text-lg">02-1234-5678</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* 연혁 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">주요 연혁</h2>
        <div className="space-y-8">
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-lg font-bold">2022</div>
            <div>
              <p className="mb-2">글로벌 AI 솔루션 출시</p>
              <p className="mb-2">연매출 100억 달성</p>
              <p>해외 지사 확장 (일본, 베트남)</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-lg font-bold">2020</div>
            <div>
              <p className="mb-2">클라우드 모니터링 플랫폼 출시</p>
              <p>기술 혁신상 수상</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-lg font-bold">2018</div>
            <div>
              <p className="mb-2">법인 전환</p>
              <p>시리즈 A 투자 유치</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-lg font-bold">2015</div>
            <div>
              <p>회사 설립</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 고객사 */}
      <div>
        <h2 className="text-2xl font-bold mb-8">주요 고객사</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-24 bg-white rounded-lg flex items-center justify-center border">
              <span className="text-gray-400">고객사 로고 {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 