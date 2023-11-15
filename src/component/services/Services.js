import React from 'react'
import Title from '../title/Title';
import DataItems from './DataItems';
import './Services.css'
import AboutItems from './ServicesItems';
function maping(x){
  const items=x.map(item=><AboutItems
      key={item.id}
      icon={item.icon}
      title={item.title}
      script={item.script}
      button={item.button}
  />)
  return items;
}
const About = () => {
  return (
    <div className='about p-5' id='services'>
      <Title title='Our Servises'/>
      <div className='about-content d-flex row'>
        {maping(DataItems)}

      </div>

    </div>
  )
}



export default About