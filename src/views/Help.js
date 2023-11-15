import React, { useState } from 'react'

function Help() {
    const [ana, setAna] = useState(
        {
            NOM: 'Badr',
            PRENOM: 'Maiddam',
            ID: 'IB26745',
            NUM: '06548751357'
        }

    )
    const newAna = () => setAna(
        badItem => {
            return ({...badItem,
                    ID: 'AC67843543',
                    NUM: '58355735'
            }
            )
        }
    )
    return (
        <div>
            <h1>NOM: {ana.NOM} </h1>
            <h1>PRENOM: {ana.PRENOM} </h1>
            <h1>ID: {ana.ID} </h1>
            <h1>NUM: {ana.NUM} </h1>
            <button onClick={newAna}>
                change
            </button>


        </div>
    )
}

export default Help