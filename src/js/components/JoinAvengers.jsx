
import React from 'react'
import image from '../../assets/img/image1.png'

const JoinAvengers = () => {
  return (
    <section className="join-avengers">
      <h1 className="h-1">
        Join the<br/>
        Avengers!
      </h1>
      <button className="join-button">
        <span>JOIN AVENGERS</span>
      </button>
      <img src={image} />
    </section>
  )
}

export default JoinAvengers
