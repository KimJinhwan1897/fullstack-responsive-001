'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가하세요
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
    console.log(formData);
    // 폼 리셋
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: '',
      agreeToTerms: false
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/customer" className="text-blue-600 hover:underline">← 고객 문의로 돌아가기</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">기술 지원 요청</h1>
      <p className="mb-12 max-w-2xl">
        제품 사용 중 문제가 발생하셨나요? 아래 양식을 작성하시면 전문 기술팀이 최대한 빠르게 도와드립니다.
      </p>
      
      <div className="max-w-3xl">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">제목 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium mb-2">문의 유형 *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">선택해주세요</option>
                <option value="technical">기술 문제</option>
                <option value="billing">결제 문의</option>
                <option value="feature">기능 요청</option>
                <option value="other">기타</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">메시지 *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="agreeToTerms" className="text-gray-700">
                개인정보 수집 및 이용에 동의합니다. *
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            제출하기
          </button>
        </form>
      </div>
      
      <div className="max-w-3xl mt-12">
        <h2 className="text-2xl font-bold mb-6">다른 방법으로 문의하기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">전화 문의</h3>
            <p className="text-gray-600 mb-4">평일 09:00 - 18:00</p>
            <a href="tel:02-1234-5678" className="text-blue-600 font-medium">02-1234-5678</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">이메일 문의</h3>
            <p className="text-gray-600 mb-4">24시간 접수 가능</p>
            <a href="mailto:support@otstechnology.com" className="text-blue-600 font-medium">support@otstechnology.com</a>
          </div>
        </div>
      </div>
    </div>
  );
} 