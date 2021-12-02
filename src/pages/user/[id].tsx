import React from 'react'
import { useRouter } from 'next/router'

export default function PageId(): JSX.Element {
  const { query } = useRouter()
  return <h1>{query.id}</h1>
}