import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 'cloud',
      title: '클라우드',
      description: '확장 가능하고 안전한 클라우드 솔루션',
      link: '/products/cloud'
    },
    {
      id: 'ai',
      title: '인공지능',
      description: '비즈니스를 위한 AI 솔루션',
      link: '/products/ai'
    },
    {
      id: 'observability',
      title: '옵저버빌리티',
      description: '시스템 상태 모니터링 및 분석',
      link: '/products/observability'
    },
    {
      id: 'infrastructure',
      title: 'IT 인프라',
      description: '안정적인 IT 인프라 구축 및 관리',
      link: '/products/infrastructure'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">제품 안내</h1>
      <p className="mb-12 max-w-2xl">
        OTS TECHNOLOGY는 다양한 비즈니스 요구사항을 충족하기 위한 
        최신 기술 솔루션을 제공합니다.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={product.link} className="block">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <h2 className="text-xl font-bold mb-3">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="text-blue-600 font-medium">자세히 보기 →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 