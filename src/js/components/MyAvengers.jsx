
import React from 'react'
import PropTypes from 'prop-types'

const MyAvengers = (props) => {
  // ToDo: awesome naming skills, fix it!
  const { myAvengers } = props
  const listAvengers = Object.keys(myAvengers).map(avenger =>
    console.log(avenger)
  )
  return (
    <div className="my-avengers">
      <h3 className="h-2">
        My Avenger team
      </h3>
      <div className="avenger">
        <img />
        <h2>{listAvengers}</h2>
      </div>
    </div>
  )
}

MyAvengers.propTypes = {
  myAvengers: PropTypes.array
}

export default MyAvengers
