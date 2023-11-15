import React, { useState } from 'react'
import Title from '../title/Title'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'
import { clientData } from './ClientData'
import img from '../../assete/imgs/user1.jpg'
function Testimonials() {
    const items = clientData.map(item =>
        
        <div className="testimonial carousel-item  shadow bg-white p-4 mb-5" key={item.id}>
            <div className="tes-user-profile mb-3 d-flex align-items-center">
                <img className="img-thumbnail rounded-circle me-3" src={item.img} alt="testimonial 1" />
                <div className="user-names">
                    <h5 className="user-name">{item.name}</h5>
                    <h6 className="user-activity text-muted">{item.fonction}</h6>
                </div>
            </div>
            <p className="user-text mb-3 text-muted">
                {item.comment}
            </p>
            <div className="user-rate text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </div>


    )
    return (

        <div className="container py-4">
            <div className="reviews-content">
                <div className="reviews-title text-center pb-5">
                    <Title title='Our customers reviews'/>
                </div>
                <div className="row justify-content-center box-shadow">
                    <div className="c col-lg-8 col-11" data-aos='fade-up' data-aos-delay='150'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                
                            </div>
                            <div className="carousel-inner py-3">
                            <div className="testimonial carousel-item active shadow bg-white p-4 mb-5">
                                    <div className="tes-user-profile mb-3 d-flex align-items-center">
                                        <img className="img-thumbnail rounded-circle me-3" src={img} alt="testimonial 1" />
                                        <div className="user-names">
                                            <h5 className="user-name">Harold Ederson</h5>
                                            <h6 className="user-activity text-muted">client</h6>
                                        </div>
                                    </div>
                                    <p className="user-text mb-3 text-muted">
                                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                    <div className="user-rate text-warning">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>

                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Testimonials