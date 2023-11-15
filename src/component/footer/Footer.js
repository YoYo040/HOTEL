import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {ImMail4} from 'react-icons/im';
import "./Footer.css";

function Footer() {
  return (
    <div className='bg-dark text-light'>
    <div className='d-flex justify-content-between row p-3'>
      <div className='info-footer col-12 col-md-4 m-0 mb-5'>
        <h1>L7aj <span>Space</span></h1>
        <p className='text-muted'>Happy and conforteble</p>
      </div>
      <div className='add-footer col-12 col-md-4 m-0 text-sm-start text-center mb-5'>
        <h5 className='add-title'>Adress</h5>
        <ul className='text-start p-0 m-0 text-muted'>
          <li>23020,Adouz Beni Mellal,</li>
          <li>Morocoo.</li>
        </ul>
      </div>
      <div className='media-footer col-12 col-md-4 m-0 text-sm-start text-center mb-5'>
        <h5 className='media-title'>Falow US</h5>
        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <div className='media-icons d-flex justify-content-between'>
          <span><FaFacebook/></span>
          <span><FaInstagram/></span>
          <span><FaLinkedin/></span>
          <span><FaTwitter/></span>
          <span><ImMail4/></span>
        </div>
      </div>

    </div>
    <p className='text-center text-light text-muted'>Copyright©2023</p>
    </div>
  )
}

export default Footer