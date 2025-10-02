import '@devoyce/ui/globals.css'

import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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
      <head>
        <title>
          Devoyce - Automate leave and invoices for employees and contractors
        </title>
        <link rel="icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <meta
          name="description"
          content="Centralize leave requests, auto-generate invoices by rate and working days, and notify organizations upon approval. Simple, reliable, and built for multi-org SaaS."
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Devoyce" />
        <meta name="theme-color" content="#18B85B" />
      </head>
      <body className="font antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
