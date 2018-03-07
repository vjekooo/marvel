
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import heart from '../../assets/img/Shape_red.png'

const PopUpAvenger = (props) => {
  const { currentAvenger } = props
  // ToDO: this is shit, fix it!
  const avengerName = !currentAvenger
    ? 'Avenger'
    : currentAvenger.name
  const avengerImage = !currentAvenger
    ? 'Avenger'
    : `${currentAvenger.thumbnail.path}.${currentAvenger.thumbnail.extension}`
  return (
    <Fragment>
      <div className="pop-up-avenger">
        <img
          src={avengerImage}
        />
        <div className="input">
          <h2 className="h-2">
            {avengerName}
          </h2>
          <form>
            <textarea
              placeholder="Write something interesting about this Avenger here.">
            </textarea>
          </form>
        </div>
      </div>
      <div className="buttons">
        <button className="button add-avenger-white">
          <img src={heart} />
          <span>ADD TO MY AVENGERS</span>
        </button>
        <button className="button add-avenger-green">
          ADD TO MY AVENGERS
        </button>
      </div>
    </Fragment>
  )
}

PopUpAvenger.propTypes = {
  currentAvenger: PropTypes.object
}

export default PopUpAvenger
