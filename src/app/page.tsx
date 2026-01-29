'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/pages/home')
  }, [router]) // Dependency array includes router to ensure the effect runs when router is ready

  return (
    <div>
      <p>Redirecting to Home...</p>
    </div>
  )
}
