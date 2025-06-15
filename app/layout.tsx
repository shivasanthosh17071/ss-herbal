import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SS Herbal',
  description: 'Created by @santhosh.dev',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
