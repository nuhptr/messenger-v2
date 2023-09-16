import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import ToasterContext from './context/toaster-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: 'Messenger',
  description: 'Messenger is a social media platform for sharing messages.',
  authors: [
    {
      name: 'Adi Nugraha Putra',
      url: 'https://github.com/nuhptr',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    site: '@messenger',
  },
  keywords: ['messenger', 'social media', 'messages'],
  category: 'Social Media',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToasterContext /> {/* Add toast context to use in global present */}
        {children}
      </body>
    </html>
  )
}
