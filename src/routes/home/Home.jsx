import React from 'react'
import Nav from './nav/Nav'
import Hero from './hero/Hero'
import Blogs from './blogs/Blogs'
import artwork from "../../assets/artwork.svg"
const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Blogs/>
      <div className='flex items-center justify-center mb-[100px]' >
        <img src={artwork} alt="" />
      </div>
    </>
  )
}

export default Home