import React from 'react'

function FeatureCard({feature}) {
  return (
    <div className='feature' >
        <img src={feature.image} alt={feature.title} />
        <h2>{feature.title}</h2>
        <div className='description-div'>
            <p>{feature.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard