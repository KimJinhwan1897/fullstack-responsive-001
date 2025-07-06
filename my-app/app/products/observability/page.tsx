export default function ObservabilityPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">옵저버빌리티</h1>
      <p className="mb-8">OTS TECHNOLOGY의 옵저버빌리티 솔루션을 소개합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">애플리케이션 모니터링</h2>
          <p>실시간 애플리케이션 성능 모니터링 및 분석 솔루션입니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">로그 관리</h2>
          <p>중앙화된 로그 수집, 저장 및 분석 시스템으로 문제 해결 시간을 단축합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">데이터베이스 모니터링</h2>
          <p>데이터베이스 성능 및 상태를 실시간으로 모니터링하는 솔루션입니다.</p>
        </div>
      </div>
    </div>
  );
} 