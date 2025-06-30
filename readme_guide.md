# Cursor AI + Next.js + GitHub Desktop + GitHub + Vercel + Supabase 풀스택 개발 환경 가이드

## 1. 필요 도구 설치

### 1.1 Cursor AI
- [Cursor AI 공식 사이트](https://cursor.sh)에서 다운로드하여 설치
- 추천 버전: 최신 버전 사용
- 설치 확인: Cursor AI를 실행한 후 좌측 하단에서 버전 정보 확인 가능

### 1.2 Node.js 및 npm
- [Node.js 공식 사이트](https://nodejs.org)에서 LTS 버전 설치 (npm 포함)
- 추천 버전: Node.js 18.x LTS 또는 20.x LTS
- 설치 확인: PowerShell에서 다음 명령어 실행
  ```
  node -v
  npm -v
  ```

### 1.3 Next.js
- Node.js 설치 후 프로젝트 생성 시 자동으로 설치됨
- 추천 버전: Next.js 14.x 이상
- 설치 확인: 프로젝트 생성 후 package.json에서 Next.js 버전 확인

### 1.4 GitHub Desktop
- [GitHub Desktop](https://desktop.github.com) 다운로드 및 설치
- 추천 버전: 최신 안정화 버전
- 설치 확인: GitHub Desktop 실행 후 상단 메뉴의 "Help" > "About GitHub Desktop"에서 버전 확인



## 2. 계정 설정

### 2.1 GitHub 계정
- [GitHub](https://github.com) 가입 또는 로그인
- GitHub Desktop에서 계정 연결

### 2.2 Vercel 계정
- [Vercel](https://vercel.com) 가입 (GitHub 계정으로 로그인 가능)

### 2.3 Supabase 계정
- [Supabase](https://supabase.com) 가입 (GitHub 계정으로 로그인 가능)

## 3. 프로젝트 시작하기

### 3.1 GitHub 리포지토리 생성
1. GitHub에서 새 리포지토리 생성
2. 리포지토리 이름과 설명 입력
3. 공개/비공개 설정 선택
4. README 파일 추가 옵션 선택

### 3.2 GitHub Desktop으로 리포지토리 클론
1. GitHub Desktop 실행
2. "File" > "Clone Repository" 선택
3. 방금 생성한 리포지토리 선택
4. 로컬 경로 지정 후 "Clone" 클릭

### 3.3 Next.js 프로젝트 생성

다음 PowerShell 명령어를 실행하여 Next.js 프로젝트 생성:
```
npx create-next-app .
```

설치 과정에서 다음 옵션을 선택할 수 있습니다:
- TypeScript 사용 여부
- ESLint 설정 여부
- Tailwind CSS 사용 여부
- `src/` 디렉토리 사용 여부
- App Router 사용 여부
- 커스텀 import 별칭 설정

## 4. Supabase 설정

### 4.1 Supabase 프로젝트 생성
1. Supabase 대시보드에서 "New Project" 클릭
2. 프로젝트 이름과 비밀번호 설정
3. 지역 선택 후 프로젝트 생성

### 4.2 Supabase 클라이언트 설치
Next.js 프로젝트 디렉토리에서 다음 PowerShell 명령어 실행:
```
npm install @supabase/supabase-js
```

### 4.3 환경 변수 설정
1. 프로젝트 루트에 `.env.local` 파일 생성
2. Supabase 대시보드에서 프로젝트 API 키와 URL 복사
3. `.env.local` 파일에 다음 내용 추가:
```
NEXT_PUBLIC_SUPABASE_URL=귀하의_프로젝트_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=귀하의_공개_ANON_키
```

## 5. 프로젝트 구조 설정

### 5.1 기본 폴더 구조 생성
Next.js App Router 기반 프로젝트 구조:
```
/app - 페이지와 레이아웃
  /api - API 라우트
  /components - 페이지별 컴포넌트
/components - 공통 컴포넌트
/lib - 유틸리티 함수
/hooks - 커스텀 훅
/services - API 호출 및 서비스
/public - 정적 자산
/styles - 글로벌 스타일
```

### 5.2 Supabase 클라이언트 설정
`/lib/supabaseClient.js` 파일 생성:
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## 6. 개발 및 테스트

### 6.1 개발 서버 실행
다음 PowerShell 명령어로 개발 서버 실행:
```
npm run dev
```

### 6.2 Cursor AI 활용
1. Cursor AI에서 프로젝트 폴더 열기
2. AI 기능을 활용하여 코드 작성 및 문제 해결
3. 주요 기능: 코드 자동 완성, 에러 디버깅, 리팩토링 제안

## 7. GitHub 커밋 및 푸시

### 7.1 GitHub Desktop으로 변경사항 커밋
1. GitHub Desktop에서 변경된 파일 확인
2. 커밋 메시지 작성
3. "Commit to main" 클릭
4. "Push origin" 클릭하여 GitHub에 업로드

## 8. Vercel 배포

### 8.1 Vercel 프로젝트 설정
1. Vercel 대시보드에서 "Import Project" 클릭
2. GitHub 리포지토리 연결
3. 환경 변수 설정 (Supabase URL 및 키 추가)
4. "Deploy" 클릭

### 8.2 배포 설정 최적화
1. 자동 배포 설정: GitHub 리포지토리에 푸시할 때마다 자동 배포
2. 커스텀 도메인 설정 (필요한 경우)
3. 환경 변수 관리

## 9. 추가 기능 및 확장

### 9.1 인증 기능 구현
Supabase의 인증 기능을 활용하여 사용자 관리 시스템 구축

### 9.2 데이터베이스 설계
Supabase Studio에서 테이블 및 관계 설정

### 9.3 스타일링 라이브러리 추가
Next.js는 기본적으로 CSS 모듈, Sass, Tailwind CSS를 지원합니다.
추가 스타일링 라이브러리 설치 (선택 사항):
```
# styled-components 설치
npm install styled-components

# 또는 Emotion 설치
npm install @emotion/react @emotion/styled
```

## 10. 문제 해결 및 리소스

### 10.1 일반적인 문제 해결
- 환경 변수가 로드되지 않을 경우: `.env.local` 파일 확인 및 앱 재시작
- API 키 관련 오류: Supabase 대시보드에서 키 확인
- 배포 실패: Vercel 빌드 로그 확인

### 10.2 유용한 리소스
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Supabase 문서](https://supabase.io/docs)
- [Vercel 문서](https://vercel.com/docs) 