import { useRouter } from 'next/router'
import React from 'react'

export default function AAA() {
  const router = useRouter()
  return (
    <div>
      {router.query.aaa} / {router.query.bbb111}
    </div>
  )
}
