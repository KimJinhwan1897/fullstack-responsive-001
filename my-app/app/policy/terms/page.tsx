import React from 'react';
import Link from 'next/link';

export default function TermsPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <nav className="flex mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">홈</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-indigo-600 font-medium">이용약관</span>
            </nav>
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">이용약관</h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden mb-16 backdrop-blur-sm bg-white/90">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="p-10">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl mb-12">
                <p className="text-xl font-medium text-center text-indigo-800">
                  본 약관은 (주)오티에스 테크놀러지(이하 '회사')가 운영하는 웹사이트(이하 '사이트')에서 제공하는 
                  인터넷 관련 서비스(이하 '서비스')를 이용함에 있어 사이트와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
              
              <div className="space-y-16">
                <section>
                  <div className="flex items-start mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                      <span className="text-2xl">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">정의</h2>
                  </div>
                  <div className="pl-20 space-y-6 text-gray-700">
                    <p className="leading-relaxed text-lg">
                      본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                          회원
                        </h3>
                        <p className="text-gray-700 pl-11">
                          '회원'이라 함은 회사의 사이트에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                          아이디(ID)
                        </h3>
                        <p className="text-gray-700 pl-11">
                          '아이디(ID)'라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">3</span>
                          비밀번호
                        </h3>
                        <p className="text-gray-700 pl-11">
                          '비밀번호'라 함은 회원이 부여 받은 아이디와 일치된 회원임을 확인하고 회원의 개인정보를 보호하기 위해 회원 자신이 설정한 문자와 숫자의 조합을 말합니다.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">4</span>
                          서비스
                        </h3>
                        <p className="text-gray-700 pl-11">
                          '서비스'라 함은 구현되는 단말기(PC, 모바일, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 회사가 제공하는 모든 서비스를 의미합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                
                <section>
                  <div className="flex items-start mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                      <span className="text-2xl">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">약관의 효력 및 변경</h2>
                  </div>
                  <div className="pl-20 space-y-6 text-gray-700">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <ul className="space-y-5">
                        <li className="flex items-start">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-lg">
                            본 약관은 사이트를 통하여 이를 공지하거나 전자우편, 기타의 방법으로 회원에게 통지함으로써 효력이 발생합니다.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-lg">
                            회사는 "전자상거래 등에서의 소비자보호에 관한 법률", "약관의 규제에 관한 법률", "전자문서 및 전자거래기본법", "전자금융거래법", "전자서명법", "정보통신망 이용촉진 및 정보보호 등에 관한 법률", "소비자기본법" 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-lg">
                            회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
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
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">이용계약 체결</h2>
                  </div>
                  <div className="pl-20 space-y-6 text-gray-700">
                    <p className="leading-relaxed text-lg">
                      이용계약은 회원이 되고자 하는 자(이하 '가입신청자')가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-bold text-indigo-800">중요 안내</p>
                      </div>
                      <p className="text-indigo-800">
                        회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
                      </p>
                      <ul className="mt-4 space-y-2 pl-8 list-disc text-indigo-800">
                        <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                        <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                        <li>허위의 정보를 기재하거나, 회사가 요구하는 정보를 제공하지 않은 경우</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                
                <section>
                  <div className="flex items-start mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                      <span className="text-2xl">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">서비스 이용 및 제한</h2>
                  </div>
                  <div className="pl-20 space-y-6 text-gray-700">
                    <p className="leading-relaxed text-lg">
                      서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
                    </p>
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
                      <h3 className="font-bold text-xl text-indigo-800 mb-5">서비스 제한 및 중지</h3>
                      <div className="space-y-4">
                        <div className="flex">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <p className="text-gray-700">
                            회사는 천재지변이나 국가비상사태, 해킹, 컴퓨터 바이러스, 서버 장애, 기간통신사업자의 서비스 중지, 시스템 점검 및 업그레이드 등 정상적인 서비스 운영이 불가능한 상황이 발생한 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                          </p>
                        </div>
                        <div className="flex">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <p className="text-gray-700">
                            회사는 서비스 이용을 제한하거나 정지하는 때에는 그 사유 및 기간, 해제 조건 등을 지체 없이 이용자에게 알립니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                
                <section>
                  <div className="flex items-start mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold mr-5 shadow-lg transform -rotate-3">
                      <span className="text-2xl">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight pt-2">회원 탈퇴 및 자격 상실</h2>
                  </div>
                  <div className="pl-20 space-y-6 text-gray-700">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
                      <h3 className="font-bold text-xl text-indigo-800 mb-5">탈퇴 및 자격 상실 조건</h3>
                      <div className="space-y-4">
                        <div className="flex">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <p className="text-gray-700">
                            회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.
                          </p>
                        </div>
                        <div className="flex">
                          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <p className="text-gray-700">
                            회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 bg-white p-5 rounded-xl">
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                          <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                          <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 경우</li>
                          <li>회사가 정한 정보 외의 정보(컴퓨터 프로그램 등)를 송신 또는 게시하는 경우</li>
                          <li>회사 및 기타 제3자의 저작권 등 지적재산권을 침해하는 경우</li>
                          <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 경우</li>
                          <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 경우</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
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