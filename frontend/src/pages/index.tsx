import React from 'react'
import UserInterface from '../components/UserInterface'

import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <>
      <div>HOME PAGE</div>
      <Link href="/login">
        Login
      </Link>
    </>
  )
}

export default Home;