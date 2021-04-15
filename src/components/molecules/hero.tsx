import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts.
        <br />
      </h1>
      <div className="hero-author">
        <StaticImage
          src="../../../static/icons/tkcel.JPG"
          className="hero-author-image"
          alt="avatar"
        />
        <p className="hero-author-text">
          Written by XXXX.
          <br />
          Front Engineer at Hoge.Inc. Love JavaScript.
        </p>
      </div>
    </div>
  )
}
