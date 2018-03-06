
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
          JOIN AVENGERS
        </button>
      </div>
      <div>
        <img src={image} />
      </div>
    </section>
  )
}

export default JoinAvengers
