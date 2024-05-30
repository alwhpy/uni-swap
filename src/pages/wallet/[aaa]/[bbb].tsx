import { useRouter } from 'next/router'
import React from 'react'

export default function BBB() {
  const router = useRouter()
  return (
    <div>
      {router.query.bbb} / {router.query.aaa}
    </div>
  )
}
