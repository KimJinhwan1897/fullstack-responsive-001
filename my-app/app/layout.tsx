import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'OTS TECHNOLOGY',
  description: 'OTS TECHNOLOGY 계측 솔루션 전문 기업',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ScrollToTop />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
