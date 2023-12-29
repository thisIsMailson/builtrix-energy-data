import React from 'react'
import UserInterface from '../components/UserInterface'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className='m-4'>
        <UserInterface backendName="go" />
      </div>
    </div>
  )
}

export default Home;