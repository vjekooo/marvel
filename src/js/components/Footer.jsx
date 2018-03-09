
import React from 'react'
import PropTypes from 'prop-types'
import fb from '../../assets/img/facebook.png'
import insta from '../../assets/img/instagram.png'
import pin from '../../assets/img/pinterest.png'
import twitter from '../../assets/img/twitter.png'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'

const Footer = (props) => {
  const { currentUser } = props
  const user = !currentUser
    ? <SignIn />
    : <CurrentUser currentUser={currentUser} />
  return (
    <footer>
      <div className="footer-nav">
        <div className="marvel">
          MARVEL
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">Join</a>
            </li>
            {
              user
            }
          </ul>
        </div>
        <div className="social">
          <img src={fb} />
          <img src={insta} />
          <img src={pin} />
          <img src={twitter} />
        </div>
      </div>
      <div className="copy">
        <span>
          &copy; 2016 Landing. All rights reserved
        </span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  currentUser: PropTypes.object
}

export default Footer
