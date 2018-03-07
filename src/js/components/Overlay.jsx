
import React from 'react'
import PopUpAvenger from './PopUpAvenger'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const {
    currentAvenger,
    overlayVisibility,
    closeOverlay,
    input,
    handleChange,
    handleSubmit
  } = props
  const overlayClass = overlayVisibility ? 'overlay visible' : ' overlay hidden'
  return (
    <div className={overlayClass}>
      <div className="overlay-content">
        <div className="hold-this-button">
          <span
            className="close-button"
            onClick={closeOverlay}
          >
          </span>
        </div>
        <PopUpAvenger
          currentAvenger={currentAvenger}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
      </div>
    </div>
  )
}

Overlay.propTypes = {
  currentAvenger: PropTypes.object,
  overlayVisibility: PropTypes.bool,
  closeOverlay: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  input: PropTypes.string
}

export default Overlay
