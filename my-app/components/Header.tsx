import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">나의 웹사이트</Link>
        </h1>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:underline">홈</Link></li>
            <li><Link href="/about" className="hover:underline">소개</Link></li>
            <li><Link href="/products" className="hover:underline">제품</Link></li>
            <li><Link href="#services" className="hover:underline">서비스</Link></li>
            <li><Link href="#contact" className="hover:underline">문의하기</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 