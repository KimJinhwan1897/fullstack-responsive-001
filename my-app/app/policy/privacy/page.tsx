import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <nav className="flex mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">홈</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-indigo-600 font-medium">개인정보처리방침</span>
            </nav>
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">개인정보처리방침</h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden mb-16 backdrop-blur-sm bg-white/90">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="p-10 space-y-16">
              <section>
                <div className="flex items-start mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                    <span className="text-2xl">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">개인 정보의 처리 목적</h2>
                </div>
                <div className="pl-20 space-y-6 text-gray-700">
                  <p className="leading-relaxed text-lg">
                    '오티에스 테크놀러지'는 개인정보를 다음의 목적을 위해 처리합니다.<br />
                    처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                      민원사무 처리
                    </h3>
                    <p className="text-gray-700 pl-11">
                      민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                      마케팅 및 광고에의 활용
                    </h3>
                    <p className="text-gray-700 pl-11">
                      신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여 기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인 등을 목적으로 개인정보를 처리합니다.
                    </p>
                  </div>
                </div>
              </section>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              
              <section>
                <div className="flex items-start mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                    <span className="text-2xl">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">개인정보 파일 현황</h2>
                </div>
                <div className="pl-20 space-y-6 text-gray-700">
                  <p className="leading-relaxed text-lg">
                    '오티에스 테크놀러지'는 개인정보를 다음의 목적을 위해 처리합니다.<br />
                    처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
                  </p>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">개인정보 항목:</span>
                          <span className="ml-2 text-gray-700">이름, 휴대전화 번호, 이메일, 소속회사명, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">수집 방법:</span>
                          <span className="ml-2 text-gray-700">홈페이지</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">보유 기간:</span>
                          <span className="ml-2 text-gray-700">3년</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">보유 목적:</span>
                          <span className="ml-2 text-gray-700">민원사무 처리, 마케팅 및 광고에의 활용</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">관련 법령:</span>
                          <span className="ml-2 text-gray-700">「개인정보 보호법」제15조 개인정보의 수집·이용에 관한 기록, 제16조 제1항 개인</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              
              <section>
                <div className="flex items-start mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                    <span className="text-2xl">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">개인정보의 처리 및 위탁</h2>
                </div>
                <div className="pl-20 space-y-6 text-gray-700">
                  <p className="leading-relaxed text-lg">
                    '오티에스 테크놀러지'는 원활한 개인정보 업무 처리를 위하여 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                      위탁계약 체결
                    </h3>
                    <p className="text-gray-700 pl-11">
                      '오티에스 테크놀러지'는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호 조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                      위탁업무 변경 시 공개
                    </h3>
                    <p className="text-gray-700 pl-11">
                      위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                    </p>
                  </div>
                </div>
              </section>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              
              <section>
                <div className="flex items-start mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                    <span className="text-2xl">4</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">개인정보의 파기</h2>
                </div>
                <div className="pl-20 space-y-6 text-gray-700">
                  <p className="leading-relaxed text-lg">
                    '오티에스 테크놀러지'는 원칙적으로 개인정보 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.<br />
                    파기의 절차, 기한 및 방법은 다음과 같습니다.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                      파기절차
                    </h3>
                    <p className="text-gray-700 pl-11">
                      이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 혹은 즉시 파기됩니다.<br />
                      이때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                      파기 기한
                    </h3>
                    <p className="text-gray-700 pl-11">
                      이용자의 개인정보는 개인 정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인 정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
                    </p>
                  </div>
                </div>
              </section>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              
              <section>
                <div className="flex items-start mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                    <span className="text-2xl">5</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">개인정보 보호 책임자</h2>
                </div>
                <div className="pl-20 space-y-6 text-gray-700">
                  <p className="leading-relaxed text-lg">
                    '오티에스 테크놀러지'는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-2xl">
                    <div className="bg-white p-8 rounded-xl">
                      <h3 className="font-bold text-2xl text-indigo-800 mb-6 border-b pb-3 border-indigo-100">개인정보 보호 책임자</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-indigo-50 p-5 rounded-xl">
                          <h4 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2">성명</h4>
                          <p className="text-xl font-medium text-gray-800">홍길동</p>
                        </div>
                        <div className="bg-indigo-50 p-5 rounded-xl">
                          <h4 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2">직책</h4>
                          <p className="text-xl font-medium text-gray-800">팀장</p>
                        </div>
                        <div className="bg-indigo-50 p-5 rounded-xl">
                          <h4 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2">연락처</h4>
                          <p className="text-lg font-medium text-gray-800">02-1234-5678</p>
                          <p className="text-indigo-600">privacy@otstech.co.kr</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <div className="text-center">
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