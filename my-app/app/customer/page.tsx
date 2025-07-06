import Link from 'next/link';

export default function CustomerPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">고객 문의</h1>
      <p className="mb-12 max-w-2xl">
        OTS TECHNOLOGY는 고객의 문의사항을 신속하게 처리해 드립니다. 
        아래 메뉴 중 필요한 서비스를 선택해 주세요.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/customer/faq">
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">자주 묻는 질문 (FAQ)</h2>
            <p className="text-gray-600 mb-6">
              제품 및 서비스에 관한 가장 일반적인 질문들에 대한 답변을 찾아보세요.
            </p>
            <div className="text-blue-600 font-medium">FAQ 바로가기 →</div>
          </div>
        </Link>
        
        <Link href="/customer/support">
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">기술 지원 요청</h2>
            <p className="text-gray-600 mb-6">
              제품 사용 중 문제가 발생하셨나요? 전문 기술팀이 도와드립니다.
            </p>
            <div className="text-blue-600 font-medium">기술 지원 요청하기 →</div>
          </div>
        </Link>
      </div>
      
      <div className="mt-12 p-8 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">긴급 문의</h2>
        <p className="mb-4">
          긴급한 문제나 중요한 이슈가 있으신가요? 저희에게 직접 연락해 주세요.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="tel:02-1234-5678" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-blue-700 transition-colors">
            전화 문의: 02-1234-5678
          </a>
          <a href="mailto:support@otstechnology.com" className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-gray-900 transition-colors">
            이메일: support@otstechnology.com
          </a>
        </div>
      </div>
    </div>
  );
} 