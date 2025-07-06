export default function AIProductsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">AI 제품</h1>
      <p className="mb-8">OTS TECHNOLOGY의 인공지능 솔루션을 소개합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">AI Ops</h2>
          <p>인공지능을 활용한 운영 자동화 시스템으로 효율적인 IT 운영을 지원합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">데이터 분석</h2>
          <p>AI를 활용한 데이터 분석 솔루션으로 비즈니스 인사이트를 제공합니다.</p>
        </div>
      </div>
    </div>
  );
} 