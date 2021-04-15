import React from 'react'
import './index.css'
import Header from '../Header/index'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
