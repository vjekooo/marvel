
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import heart from '../../assets/img/Shape_red.png'

const PopUpAvenger = (props) => {
  const {
    currentAvenger,
    input,
    handleChange,
    handleSubmit
  } = props
  console.log(input)
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
          <form
            onSubmit={handleSubmit}
          >
            <textarea
              placeholder="Write something interesting about this Avenger here."
              value={input}
              onChange={handleChange}
            >
            </textarea>
            <input
              type="submit"
              value="ADD TO MY AVENGERS"
              className="button add-avenger-green"
            >
            </input>
          </form>
        </div>
        <button className="button add-avenger-white">
          <img src={heart} />
          <span>ADD TO MY AVENGERS</span>
        </button>
      </div>
    </Fragment>
  )
}

PopUpAvenger.propTypes = {
  currentAvenger: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  input: PropTypes.string
}

export default PopUpAvenger
