import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Products() {
  // 제품 데이터
  const products = [
    {
      id: 1,
      name: '웹사이트 빌더 Pro',
      category: '웹 개발',
      description: '드래그 앤 드롭 인터페이스로 전문적인 웹사이트를 몇 분 만에 제작할 수 있는 강력한 웹사이트 빌더입니다.',
      features: [
        '드래그 앤 드롭 인터페이스',
        '100+ 프리미엄 템플릿',
        'SEO 최적화 도구',
        '반응형 디자인 자동 적용',
        'SSL 보안 인증서 제공'
      ],
      price: '월 19,900원부터',
      popular: true
    },
    {
      id: 2,
      name: 'CRM 솔루션',
      category: '비즈니스',
      description: '고객 관계 관리를 위한 올인원 솔루션으로 영업, 마케팅, 고객 서비스를 효율적으로 관리할 수 있습니다.',
      features: [
        '고객 데이터 중앙 관리',
        '영업 파이프라인 시각화',
        '자동화된 마케팅 캠페인',
        '고객 서비스 티켓 시스템',
        '상세한 분석 및 보고서'
      ],
      price: '월 29,900원부터',
      popular: false
    },
    {
      id: 3,
      name: '이커머스 플랫폼',
      category: '이커머스',
      description: '온라인 쇼핑몰을 쉽게 구축하고 관리할 수 있는 종합 이커머스 솔루션입니다.',
      features: [
        '간편한 상품 등록 및 관리',
        '다양한 결제 시스템 통합',
        '재고 관리 자동화',
        '모바일 최적화 쇼핑 경험',
        '마케팅 도구 및 할인 기능'
      ],
      price: '월 39,900원부터',
      popular: true
    },
    {
      id: 4,
      name: '데이터 분석 대시보드',
      category: '데이터/분석',
      description: '복잡한 비즈니스 데이터를 직관적인 시각화로 제공하는 고급 분석 플랫폼입니다.',
      features: [
        '실시간 데이터 모니터링',
        '맞춤형 대시보드 생성',
        '다양한 데이터 소스 통합',
        'AI 기반 예측 분석',
        '자동 리포트 생성'
      ],
      price: '월 49,900원부터',
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* 제품 소개 배너 */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6">제품 소개</h1>
          <p className="text-xl max-w-3xl mx-auto">
            비즈니스 성장을 위한 혁신적인 디지털 솔루션을 만나보세요.
          </p>
        </div>
      </div>

      {/* 제품 필터링 */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            모두 보기
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            웹 개발
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            비즈니스
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            이커머스
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            데이터/분석
          </button>
        </div>
      </div>

      {/* 제품 목록 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                  product.popular ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                {product.popular && (
                  <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                    인기 제품
                  </div>
                )}
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-gray-400 text-xl">제품 이미지</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 기능</h4>
                    <ul className="text-sm text-gray-600">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-blue-600 font-bold">{product.price}</span>
                    <a 
                      href={`/products/${product.id}`} 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      자세히 보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 비교표 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">제품 비교</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">기능</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">기본 플랜</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">프로 플랜</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">엔터프라이즈 플랜</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">사용자 수</td>
                  <td className="py-3 px-4 text-center border-b">1명</td>
                  <td className="py-3 px-4 text-center border-b">5명</td>
                  <td className="py-3 px-4 text-center border-b">무제한</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">스토리지</td>
                  <td className="py-3 px-4 text-center border-b">10 GB</td>
                  <td className="py-3 px-4 text-center border-b">100 GB</td>
                  <td className="py-3 px-4 text-center border-b">1 TB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">API 접근</td>
                  <td className="py-3 px-4 text-center border-b">❌</td>
                  <td className="py-3 px-4 text-center border-b">✅</td>
                  <td className="py-3 px-4 text-center border-b">✅</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">프리미엄 지원</td>
                  <td className="py-3 px-4 text-center border-b">❌</td>
                  <td className="py-3 px-4 text-center border-b">❌</td>
                  <td className="py-3 px-4 text-center border-b">✅</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">가격</td>
                  <td className="py-3 px-4 text-center font-medium">월 19,900원</td>
                  <td className="py-3 px-4 text-center font-medium">월 49,900원</td>
                  <td className="py-3 px-4 text-center font-medium">문의 요망</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">제품 무료 체험이 가능한가요?</h3>
                <p className="text-gray-600">네, 모든 제품은 14일 무료 체험 기간을 제공합니다. 신용카드 정보 없이도 시작할 수 있습니다.</p>
              </div>
            </div>
            <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">플랜 간 업그레이드는 언제든지 가능한가요?</h3>
                <p className="text-gray-600">네, 언제든지 더 높은 플랜으로 업그레이드할 수 있으며, 차액만 일할 계산되어 청구됩니다.</p>
              </div>
            </div>
            <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">제품 설정에 기술적인 지식이 필요한가요?</h3>
                <p className="text-gray-600">아니오, 모든 제품은 기술적 배경지식이 없는 사용자도 쉽게 설정할 수 있도록 설계되었습니다. 추가 지원이 필요한 경우 고객 지원팀에 문의하세요.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">환불 정책은 어떻게 되나요?</h3>
                <p className="text-gray-600">구독 후 30일 이내에 만족하지 못하시면 전액 환불해 드립니다. 환불 요청은 고객지원 페이지를 통해 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            14일 무료 체험으로 제품의 모든 기능을 경험해 보세요.
            신용카드가 필요 없습니다.
          </p>
          <a 
            href="/signup" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg inline-block hover:bg-gray-100 transition-colors"
          >
            무료로 시작하기
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
} 