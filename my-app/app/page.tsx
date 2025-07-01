import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 메인 히어로 섹션 */}
      <HeroSection />

      {/* 소개 섹션 */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">우리는 이런 기술을 사용합니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Next.js</h3>
              <p>리액트 기반의 풀스택 프레임워크로 빠른 페이지 로딩과 서버 사이드 렌더링을 지원합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Tailwind CSS</h3>
              <p>유틸리티 우선 CSS 프레임워크로 빠르고 유연한 디자인 시스템을 구축할 수 있습니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Supabase</h3>
              <p>오픈소스 Firebase 대체재로 데이터베이스, 인증, 스토리지 등의 백엔드 기능을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">제공 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">웹사이트 개발</h3>
              <p>맞춤형 웹사이트 개발 서비스를 제공합니다.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">성능 최적화</h3>
              <p>웹사이트 속도와 성능을 최적화하여 사용자 경험을 개선합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">문의하기</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  이름
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  이메일
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="이메일을 입력하세요" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  메시지
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows={4} placeholder="메시지를 입력하세요"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" type="button">
                  보내기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
