export default function CloudProductsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">클라우드 제품</h1>
      <p className="mb-8">OTS TECHNOLOGY의 클라우드 서비스 및 솔루션을 소개합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">클라우드 플랫폼</h2>
          <p>유연하고 확장 가능한 클라우드 인프라 솔루션을 제공합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">클라우드 모니터링</h2>
          <p>클라우드 리소스의 상태와 성능을 실시간으로 모니터링합니다.</p>
        </div>
      </div>
    </div>
  );
} 