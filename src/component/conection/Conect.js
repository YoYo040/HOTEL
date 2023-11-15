import React, { useState } from 'react';
import Login from '../login/Login';
import Sign from '../signin/Sign';
import "./Conect.css";

function Conect() {
    const [conct, setConect] = useState(true);
    const switsh = () => {
        setConect(current => !current);
    };

    return  (
        <div className='conect'>
            <div>

                <div className='login p-2 d-flex row m-0'>
                    <div className='col-12  m-0'>
                        {conct ? <Login /> : <Sign />}
                    </div>

                    <div className='col-12  m-0 text-center p-3 control'>
                        <p className='text-light'>{conct ? 'I dont have accente' : 'I have accente'} </p>
                        <button className='btn btn-info' onClick={switsh}>{conct ? 'Register' : 'Login'} </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conect