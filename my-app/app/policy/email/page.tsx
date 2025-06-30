import React from 'react';
import Link from 'next/link';

export default function EmailPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <nav className="flex mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">홈</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-indigo-600 font-medium">이메일무단수집거부</span>
            </nav>
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">이메일무단수집거부</h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="bg-white shadow-2xl rounded-3xl mb-12 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-10 flex justify-center items-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-xl">
                <svg 
                  className="w-24 h-24 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>
            <div className="p-10 text-center">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
                (주)오티에스 테크놀러지는 이메일 무단수집을 거부합니다.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-xl rounded-3xl p-10 space-y-8 text-gray-700 leading-relaxed backdrop-blur-sm bg-white/90">
            <p className="text-xl">
              본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 
              무단으로 수집되는 것을 거부하며, 이를 위반할 시 <span className="font-semibold text-indigo-600">정보통신망 법에 의해 처벌</span>됩니다.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
            
            <p className="text-xl">
              오티에스 테크놀러지는 고객의 소중한 정보가 노출되지 않도록 최선을 다하고 있습니다.<br />
              오티에스 테크놀러지 홈페이지 서비스를 이용하는 고객에게 유해한 정보환경으로부터 권익을 보호함과 
              동시에 인터넷상의 정보문화 향상을 위해 노력합니다.
            </p>
            
            <div className="mt-10 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-indigo-800">참고 사항</p>
              </div>
              <p className="text-indigo-800">
                정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의2 (전자우편주소의 무단 수집행위 등 금지)에 따라 
                누구든지 전자우편주소의 무단 수집을 목적으로 하는 프로그램이나 기술적 장치를 이용하여 
                전자우편주소를 수집하는 행위를 하여서는 아니 됩니다.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 