import React from 'react'
import Title from '../title/Title'
import { DataRooms } from './DataRooms'
import './Rooms.css'
import RoomsItem from './RoomsItem'
function Rooms() {
  function maping(x) {
    const items = x.map((item,index) => index < 3 && <RoomsItem
      key={item.id}
      img_01={item.img_01}
      img_02={item.img_02}
      img_03={item.img_03}
      img_04={item.img_04}
      title={item.title}
      script_1={item.script_1}
      script_2={item.script_2}
      script_3={item.script_3}
      text={item.text}
      
      prix={item.prix}
    />)
    return items;
  }
  return (
    <div className='rooms p-5' id='rom'>
      <Title title='Our Roms'/>
      <div className='rooms-items d-flex row mb-3'>
        {maping(DataRooms)}
      </div>
    </div>
  )
}

export default Rooms