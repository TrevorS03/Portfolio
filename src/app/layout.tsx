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
      <link
        href='https://fonts.googleapis.com/css2?family=Jersey+20&display=swap'
        rel='stylesheet'
      />
      <NavBar />
      <body>{children}</body>
    </html>
  )
}
