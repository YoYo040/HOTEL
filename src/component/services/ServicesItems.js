import React from 'react'

function AboutItems(props) {
  return (
    <div className='about-content-item col-11 col-lg-6 d-flex mb-5'>
          <div className='mx-2'>
            <i>{props.icon} </i>
          </div>
          <div className='mx-2'>
            <h4>{props.title} </h4>
            <p>{props.script} </p>
            <button className='btn btn-warning'>{props.button} </button>
          </div>


        </div>
  )
}

export default AboutItems