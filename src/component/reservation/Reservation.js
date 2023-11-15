import React, { useState } from 'react'
import './Reservation.css'

function Reservation() {
   
    const [state, setState] = useState({
        num_room: "",
        num_chil: "",
        date_in: "",
        date_out: "",
        num_adu: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };
      
  return (
    <div className='reserv'>
        
        <div className='reserv-content m-5'>
            <form className='d-flex row' onSubmit={handleSubmit}>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    <label>Date In</label>
                    <input type='date' name='date_in'   value={state.date_in} onChange={handleInputChange} />
                </div>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    <label>Date Out</label>
                    <input type='date' name='date_in' value={state.date_out} onChange={handleInputChange} />
                </div>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    <label>Adults</label>
                    <input type='number' placeholder='1'  name='num_adu' value={state.num_adu} onChange={handleInputChange } />
                </div>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    <label>Children</label>
                    <input type='number' placeholder='1' name='num_chil' value={state.num_chil} onChange={handleInputChange} />
                </div>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    <label>Rooms</label>
                    <input type='number' placeholder='1' name='num_room' value={state.num_room} onChange={handleInputChange} />
                </div>
                <div className='row m-0 p-2 col-11 col-sm-6 col-md-6 col-lg-2'>
                    
                    <input type='submit' value='BOOK NOW' className='btn btn-warning ' id='reserv'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reservation