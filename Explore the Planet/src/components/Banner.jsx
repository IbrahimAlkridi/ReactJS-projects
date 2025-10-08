import React from 'react'
import './banner.css';
import planetImg from '../assets/planet.svg';
const Banner = () => {
  return (
    <div className='header'>
      <div className="main-img"><img src={planetImg} alt="planet-img" /></div>
      <h1 className='title'>Discover the <span>World</span>, One Country at a Time <span></span></h1>
      <p>Search any country to explore its flag, capital, population, and more.</p>
    </div>
  )
}

export default Banner