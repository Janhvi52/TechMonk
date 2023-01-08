import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/footer';
import About from '../components/About'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home;