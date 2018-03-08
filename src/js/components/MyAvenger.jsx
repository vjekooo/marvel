
import React from 'react'
import PropTypes from 'prop-types'

const MyAvenger = (props) => {
  const { myAvengers, avengerId } = props
  const avenger = myAvengers[avengerId]
  console.log(avenger.avenger)
  return (
    <div className="avenger">
      <img src={`${avenger.avenger.thumbnail.path}.${avenger.avenger.thumbnail.extension}`} />
      <h2 className="h-4">
        {avenger.avenger.name}
      </h2>
    </div>
  )
}

MyAvenger.propTypes = {
  myAvengers: PropTypes.array,
  avengerId: PropTypes.string
}

export default MyAvenger
