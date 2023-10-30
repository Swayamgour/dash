import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CenterNav from '../../components/centerNav/CenterNav'
import './Home.css'

function Home() {
  return (
    <div className='HomeSection'>
       <Navbar />
       <CenterNav />
    </div>
  )
}

export default Home