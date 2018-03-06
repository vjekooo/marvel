
import React from 'react'
import Avenger from './Avenger'
import PropTypes from 'prop-types'

const AvengersList = (props) => {
  const { avengers } = props
  console.log(Object.keys(avengers))
  const listAvengers = Object.keys(avengers).map(avenger =>
    <Avenger
      key={avenger}
      avengerId={avenger}
      avengers={avengers}
    />
  )
  return (
    <div className="avengers-list">
      <span className="h-2">Pick an avenger</span>
      {listAvengers}
    </div>
  )
}

AvengersList.propTypes = {
  avengers: PropTypes.array
}

export default AvengersList
