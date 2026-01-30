import type { Metadata } from 'next'
import './globals.css'
import NavBar from './Components/NavBar/NavBar'

export const metadata: Metadata = {
  title: 'Trevor Small - Portfolio',
  description: 'The portfolio of Trevor Small, a software developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <NavBar />
      <body>{children}</body>
    </html>
  )
}
