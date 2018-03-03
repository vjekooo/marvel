
import React from 'react'
import PropTypes from 'prop-types'

const Hero = (props) => {
  const { heroes, heroId } = props
  const hero = heroes[heroId]
  return (
    <div>
      <h1>
        {hero.name}
      </h1>
    </div>
  )
}

Hero.propTypes = {
  heroes: PropTypes.array,
  heroId: PropTypes.string
}

export default Hero
