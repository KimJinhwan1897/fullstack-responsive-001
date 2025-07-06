'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: '제품 무료 체험이 가능한가요?',
      answer: '네, 모든 제품은 14일 무료 체험 기간을 제공합니다. 신용카드 정보 없이도 시작할 수 있습니다.'
    },
    {
      id: 2,
      question: '플랜 간 업그레이드는 언제든지 가능한가요?',
      answer: '네, 언제든지 더 높은 플랜으로 업그레이드할 수 있으며, 차액만 일할 계산되어 청구됩니다.'
    },
    {
      id: 3,
      question: '제품 설정에 기술적인 지식이 필요한가요?',
      answer: '아니오, 모든 제품은 기술적 배경지식이 없는 사용자도 쉽게 설정할 수 있도록 설계되었습니다. 추가 지원이 필요한 경우 고객 지원팀에 문의하세요.'
    },
    {
      id: 4,
      question: '환불 정책은 어떻게 되나요?',
      answer: '구독 후 30일 이내에 만족하지 못하시면 전액 환불해 드립니다. 환불 요청은 고객지원 페이지를 통해 가능합니다.'
    },
    {
      id: 5,
      question: '서비스 가입 후 기술 지원은 어떻게 받을 수 있나요?',
      answer: '고객 포털을 통해 티켓을 제출하거나 이메일, 전화로 지원팀에 문의하실 수 있습니다. 프리미엄 플랜 고객은 전담 지원 매니저가 배정됩니다.'
    },
    {
      id: 6,
      question: '데이터 백업은 어떻게 이루어지나요?',
      answer: '모든 데이터는 암호화되어 여러 지역의 서버에 자동으로 백업되며, 일일, 주간, 월간 백업을 제공합니다. 고객은 언제든지 백업 데이터를 복원할 수 있습니다.'
    }
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/customer" className="text-blue-600 hover:underline">← 고객 문의로 돌아가기</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">자주 묻는 질문 (FAQ)</h1>
      <p className="mb-12 max-w-2xl">
        OTS TECHNOLOGY 제품 및 서비스에 대한 자주 묻는 질문들에 대한 답변을 찾아보세요.
        원하는 답변이 없으시면 언제든지 저희에게 문의해 주세요.
      </p>
      
      <div className="max-w-3xl">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeId === faq.id ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className={`px-6 pb-6 ${activeId === faq.id ? 'block' : 'hidden'}`}>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-gray-100 rounded-lg max-w-3xl">
        <h2 className="text-xl font-bold mb-4">찾으시는 정보가 없으신가요?</h2>
        <p className="mb-4">
          더 궁금한 사항이 있으시면 저희 지원팀에 문의해 주세요. 
          최대한 빠르게 답변해 드리겠습니다.
        </p>
        <Link href="/customer/support" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block hover:bg-blue-700 transition-colors">
          지원팀에 문의하기
        </Link>
      </div>
    </div>
  );
} 