import React from 'react'
import { UserButton } from '@clerk/nextjs'
const Home = () => {
  return (
    <div>
      <UserButton showName />
    </div>
  )
}

export default Home