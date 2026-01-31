import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Law Office of Warren J. Domangue | Colorado Attorney',
  description: 'Colorado unemployment appeals, family law, and criminal defense attorney serving Littleton and Denver metro area.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradoattorneyforyou.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
