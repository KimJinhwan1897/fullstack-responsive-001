import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} 나의 웹사이트. 모든 권리 보유.</p>
      </div>
    </footer>
  );
} 