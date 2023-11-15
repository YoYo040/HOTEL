import React from 'react'
import Title from '../title/Title'
import './Contact.css'


function Contact() {
  return (
    <article className="contact py-5 my-5" id='contact'>
            <div className="container py-5">
                <div className="contact-content">
                    <Title title='Contact US'/>
                    
                    <div className="row align-items-center">
                        <div className="c col-lg-6 col-12 mb-lg-0 mb-5">
                            <div className="left-side">
                                <form action="" method="post" className='row' id="contact-form">
                                    <div className="form-group c col-md-6 col-12 mb-3" data-aos='fade-up' data-aos-delay='150'>
                                        <label htmlFor="last_name" className='mb-2'>first name</label>
                                        <input type="text" className="form-control py-2 px-3" id="first_name" placeholder="First Name" required/>
                                    </div>
                                    <div className="form-group c col-md-6 col-12 mb-3" data-aos='fade-up' data-aos-delay='200'>
                                        <label htmlFor="last_name" className='mb-2'>last name</label>
                                        <input type="text" className="form-control py-2 px-3" id="last_name" placeholder="Last Name" required/>
                                    </div>
                                    <div className="form-group c col-12 mb-3" data-aos='fade-up' data-aos-delay='250'>
                                        <label htmlFor="e-mail" className='mb-2'>Email</label>
                                        <input type="email" className="form-control py-2 px-3" id="e-mail" placeholder="Email Address" required/>
                                    </div>
                                    <div className="form-group c col-12 mb-4" data-aos='fade-up' data-aos-delay='300'>
                                        <label htmlFor="textarea" className='mb-2'>write your message down here</label>
                                        <textarea className="form-control py-2 px-3" id="textarea" rows='3'></textarea>
                                    </div>
                                    <button type="submit"  className='btn  py-2 px-3 mx-auto rounded text-capitalize w-25'>send</button>
                                </form>
                            </div>
                        </div>
                        <div className="c col-lg-6 col-12">
                            <div className="right-side text-lg-end text-center" data-aos='fade-up' data-aos-delay='350'>
                                <img className="img-fluid w-75" src="./contact.svg" alt='contact' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
  )
}

export default Contact