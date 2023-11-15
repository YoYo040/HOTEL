import React from 'react'
import './Title.css';

function Title(props) {
  return (
    <h1 className='title mb-3'>{props.title}</h1>
  )
}

export default Title