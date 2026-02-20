'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ReactDOM from 'react-dom/client'
import App from 'next/dist/pages/_app'

// 1. Find the root DOM node
const container = document.getElementById('root')

// 2. Create a root
if (container) {
  const root = ReactDOM.createRoot(container)

  // 3. Render the app
  root.render(<App />)
}
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/pages/home')
  }, [router]) // Dependency array includes router to ensure the effect runs when router is ready

  return (
    <div id='root'>
      <p>Redirecting to Home...</p>
    </div>
  )
}
