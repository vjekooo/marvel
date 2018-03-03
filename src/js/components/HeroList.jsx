
import React from 'react'
import Hero from './Hero'
import PropTypes from 'prop-types'

const HeroList = (props) => {
  const { heroes } = props
  const listHeroes = Object.keys(heroes).map(hero =>
    <Hero
      key={hero}
      heroId={hero}
      heroes={heroes}
    />
  )
  return (
    <div>
      {listHeroes}
    </div>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.array
}

export default HeroList
