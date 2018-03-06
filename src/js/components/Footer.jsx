
import React from 'react'
import fb from '../../assets/img/facebook.png'
import insta from '../../assets/img/instagram.png'
import pin from '../../assets/img/pinterest.png'
import twitter from '../../assets/img/twitter.png'

const Footer = () => {
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

export default Footer
