import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './header.css'
import '../../../static/icons/logo.png'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <StaticImage
          className="header-logo-image"
          src="../../../static/icons/logo.png"
          alt="logo"
        />
      </Link>
    </header>
  )
}

export default Header
