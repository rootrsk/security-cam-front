import React from 'react'

function HardwareComonent({item}) {
    return(
        <div className='feature' >
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <div className='description-div'>
                <p>{item.description}</p>
            </div>
        </div>
    )
    
}

export default HardwareComonent