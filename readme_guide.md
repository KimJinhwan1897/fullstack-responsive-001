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
1. **Vercel 대시보드 접속**
   - [Vercel 웹사이트](https://vercel.com)에 접속하여 로그인합니다.
   - 대시보드로 이동하면 우측 상단에 "Add New..." 버튼이 있습니다.
   - 드롭다운에서 "Project"를 선택합니다.

2. **GitHub 리포지토리 연결**
   - "Import Git Repository" 섹션에서 GitHub 계정을 연결하거나 이미 연결된 계정을 사용합니다.
   - 귀하의 GitHub 리포지토리 목록이 표시됩니다.
   - 배포하려는 Next.js 프로젝트가 있는 리포지토리를 선택합니다.
   - "Import" 버튼을 클릭합니다.

3. **프로젝트 설정 구성**
   - 프로젝트 이름 확인: 기본값은 리포지토리 이름입니다.
   - 프레임워크 설정 확인: Next.js 프로젝트로 자동 인식되어야 합니다.
   - 루트 디렉토리 설정: 만약 프로젝트가 하위 폴더인 `/my-app`에 있다면, 이를 지정합니다.
   - 빌드 설정 확인: Next.js의 기본값이 자동으로 적용됩니다.

4. **환경 변수 설정**
   - "Environment Variables" 섹션에서 "Add Variable" 버튼 클릭
   - Supabase 연결 정보 추가:
     ```
     NEXT_PUBLIC_SUPABASE_URL=귀하의_프로젝트_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY=귀하의_공개_ANON_키
     ```
   - 각각의 키와 값을 별도로 추가합니다.

5. **"Deploy" 클릭**
   - 모든 설정을 완료한 후 "Deploy" 버튼을 클릭합니다.
   - Vercel이 자동으로 프로젝트를 빌드하고 배포합니다.
   - 빌드 로그를 실시간으로 확인할 수 있습니다.

6. **배포 완료 및 확인**
   - 배포가 완료되면 "Congratulations!" 메시지와 함께 프로젝트 URL이 표시됩니다.
   - 제공된 URL로 접속하여 사이트가 제대로 배포되었는지 확인합니다.
   - 프로젝트 대시보드에서 배포 상태, 분석, 설정 등을 관리할 수 있습니다.

### 8.2 배포 설정 최적화

#### 1. 프로젝트 설정 관리
- Vercel 프로젝트 대시보드에서 `Settings` 탭으로 이동하여 다양한 설정을 관리할 수 있습니다.
- `Settings > General` 섹션에서 프로젝트 이름, 빌드 및 개발 설정, 프레임워크 사전 설정 등을 변경할 수 있습니다.
- `Settings > General > Root Directory` 설정: 만약 프로젝트가 하위 폴더(예: `/my-app`)에 있다면, 이를 정확히 지정합니다.

#### 2. Git 연동 설정
- `Settings > Git` 섹션에서 Git 연동 설정을 확인합니다.
- `Settings > Git > Production Branch` 설정에서 프로덕션 브랜치(일반적으로 `main` 또는 `master`)가 올바르게 설정되어 있는지 확인합니다.
- `Settings > Git > Auto-Deploy` 설정이 활성화되어 있는지 확인합니다. 이 설정은 코드 변경 시 자동으로 배포를 트리거합니다.
- 필요한 경우 `Settings > Git > Branch & Directory Filters`에서 특정 브랜치나 경로에 대한 배포 필터를 설정할 수 있습니다.

#### 3. 도메인 설정
- `Settings > Domains` 섹션에서 커스텀 도메인을 관리합니다.
- `Settings > Domains > Add` 버튼을 클릭하여 새 도메인을 추가합니다.
- 도메인 제공업체에서 DNS 설정을 업데이트하는 방법:
  - A 레코드: 도메인 루트를 Vercel의 IP 주소로 지정
  - CNAME 레코드: 서브도메인(예: www)을 Vercel 배포 URL로 지정
- `Settings > Domains > [도메인 선택] > SSL` 섹션에서 HTTPS 설정을 확인할 수 있습니다. SSL 인증서는 자동 발급됩니다.

#### 4. 환경별 설정
- `Settings > Environment Variables` 섹션에서 환경별 변수를 설정합니다.
- `Settings > Environment Variables > Add New` 버튼을 클릭하고 환경별(Production, Preview, Development)로 다른 값을 지정할 수 있습니다.
- `Settings > Environment Variables > [변수 선택] > Encrypt` 옵션을 통해 민감한 정보를 암호화하여 저장할 수 있으며, 팀원들이 값을 볼 수 없게 설정할 수 있습니다.

#### 5. 성능 모니터링
- `Analytics` 탭에서 웹 애널리틱스 및 성능 지표를 확인합니다.
- `Analytics > Speed Insights`를 통해 Core Web Vitals와 같은 성능 지표를 모니터링합니다.
- `Analytics > Web Analytics`에서 방문자 통계 및 사용 패턴을 분석할 수 있습니다.

#### 6. 협업 설정
- `Settings > Members`에서 팀원들을 초대하고 권한을 설정합니다.
- `Settings > Comments > Enable Comments` 옵션을 활성화하여 배포에 대한 피드백을 공유할 수 있습니다.
- `Settings > Deployment Protection`에서 특정 배포에 대한 접근 제한 설정이 가능합니다.

#### 7. 배포 웹훅 설정
- `Settings > Webhooks` 섹션에서 웹훅을 설정합니다.
- `Settings > Webhooks > Create Webhook` 버튼을 클릭하여 새 웹훅을 추가합니다.
- 배포 상태가 변경될 때 외부 서비스에 알림을 보내도록 설정할 수 있습니다.
- `Settings > Webhooks > [웹훅 선택] > Events` 섹션에서 빌드 성공/실패, 도메인 구성 변경 등의 이벤트에 대한 알림을 설정합니다.

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