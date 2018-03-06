
import React from 'react'
import image from '../../assets/img/image.png'

const JoinAvengers = () => {
  return (
    <section className="join-avengers">
      <div className="join-call-to-action">
        <h1 className="h-1">
          Join the<br/>
          Avengers!
        </h1>
        <button className="join-button">
          <span>JOIN AVENGERS</span>
        </button>
      </div>
      <img src={image} />
    </section>
  )
}

export default JoinAvengers
