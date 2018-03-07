
import React from 'react'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { overlayVisibility } = props
  const overlayClass = overlayVisibility ? 'overlay visible' : ' overlay hidden'
  return (
    <div className={overlayClass}>
    </div>
  )
}

Overlay.propTypes = {
  overlayVisibility: PropTypes.bool
}

export default Overlay
