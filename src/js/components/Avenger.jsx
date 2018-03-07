
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Avenger = (props) => {
  const { avengers, avengerId, showAvengerOverlay } = props
  const avenger = avengers[avengerId]
  return (
    <Fragment>
      <div className="avenger"
        onClick={() => showAvengerOverlay(avenger)}
      >
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
  avengerId: PropTypes.string,
  showAvengerOverlay: PropTypes.func
}

export default Avenger
