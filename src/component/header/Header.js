import React from 'react'
import NavBar from '../navbar/NavBar'
import Hero from '../hero/Hero'
import './Header.css'

function Header() {
  return (
    <header id='home' className='header'>
        <NavBar/>
        <Hero/>
    </header>
  )
}

export default Header