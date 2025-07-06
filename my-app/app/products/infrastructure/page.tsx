export default function InfrastructurePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">IT 인프라</h1>
      <p className="mb-8">OTS TECHNOLOGY의 IT 인프라 솔루션을 소개합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">서버 관리</h2>
          <p>안정적이고 효율적인 서버 인프라 구축 및 관리 서비스를 제공합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">네트워크 솔루션</h2>
          <p>안전하고 빠른 네트워크 인프라 구축 및 최적화 서비스를 제공합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">IoT 플랫폼</h2>
          <p>다양한 IoT 디바이스 연결 및 관리를 위한 통합 플랫폼을 제공합니다.</p>
        </div>
      </div>
    </div>
  );
} 