import React from 'react'
import { UserButton } from '@clerk/nextjs'
const Home = () => {
  return (
    <div>
      <UserButton showName />
      <h1>Dev Overflow</h1>
    </div>
  )
}

export default Home