
import React from 'react'
import Avenger from './Avenger'
import PropTypes from 'prop-types'

const AvengersList = (props) => {
  const { avengers, showAvengerOverlay } = props
  const avengersLength = Object.keys(avengers).length
  const listAvengers = Object.keys(avengers).map(avenger =>
    <Avenger
      key={avenger}
      avengerId={avenger}
      avengers={avengers}
      showAvengerOverlay={showAvengerOverlay}
    />
  )
  return (
    <div className="avengers-list">
      <span className="h-2">Pick an avenger<span> ({avengersLength})</span></span>
      {listAvengers}
    </div>
  )
}

AvengersList.propTypes = {
  avengers: PropTypes.array,
  showAvengerOverlay: PropTypes.func
}

export default AvengersList
