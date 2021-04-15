import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './index.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <StaticImage
          className="header-logo-image"
          src="../../../../static/icons/header-icon.png"
          alt="logo"
        />
      </Link>
    </header>
  )
}

export default Header
