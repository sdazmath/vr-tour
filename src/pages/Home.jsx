import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <div >
        <NavBar/>
        <Hero/>
        {/* <Link to="/tour">
        <button>Get Started</button> 
        </Link> */}
      
    </div>
  )
}

export default Home
