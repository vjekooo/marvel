
import React from 'react'

const Header = () => {
  return (
    <header>
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
        <span className="search">
          search
        </span>
      </div>
    </header>
  )
}

export default Header
