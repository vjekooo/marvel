
import React from 'react'
import MyAvenger from './MyAvenger'
import PropTypes from 'prop-types'

const MyAvengersList = (props) => {
  const { myAvengers } = props
  const showAvengers = Object.keys(myAvengers).map(avenger =>
    <MyAvenger
      key={avenger}
      myAvengers={myAvengers}
      avengerId={avenger}
    />
  )
  return (
    <div className="my-avengers">
      <h3 className="h-2">
        My Avenger team
      </h3>
      {showAvengers}
    </div>
  )
}

MyAvengersList.propTypes = {
  myAvengers: PropTypes.array
}

export default MyAvengersList
