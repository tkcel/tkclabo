import React from 'react'
import './defaultLayout.css'
import Header from './header'
import Footer from './footer'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
