import '@devoyce/ui/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font antialiased">{children}</body>
    </html>
  )
}
