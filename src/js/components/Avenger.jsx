
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Avenger = (props) => {
  const { avengers, avengerId } = props
  const avenger = avengers[avengerId]
  return (
    <Fragment>
      <div className="avenger">
        <img src={`${avenger.thumbnail.path}.${avenger.thumbnail.extension}`} />
        <div className="avenger-description">
          <span className="h-4">
            {avenger.name}
          </span>
          <span className="avenger-bio">
            {avenger.description}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

Avenger.propTypes = {
  avengers: PropTypes.array,
  avengerId: PropTypes.string
}

export default Avenger
