
import React from 'react'

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
          icons
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
