import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Linkedin Resume Generator',
  description:
    'A React Typescript web app that takes a LinkedIn URL and spits out a personalized PDF resume',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <main className='flex min-h-screen flex-col items-center justify-center p-8'>
          <div className='flex w-full max-w-6xl flex-1'>{children}</div>
        </main>
      </body>
    </html>
  )
}
