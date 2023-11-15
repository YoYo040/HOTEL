import React from 'react'
import Contact from '../contact/Contact'

import Reservation from '../reservation/Reservation'
import Rooms from '../rooms/Rooms'
import About from '../services/Services'
import Testimonials from '../testimonials/Testimonials'


function Section() {
  return (
    <>
        
        <About/>
        <Reservation/>
        <Rooms/>
        <Testimonials/>
        <Contact/>
        
    </>
  )
}

export default Section