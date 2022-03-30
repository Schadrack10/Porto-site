import React from 'react'
import PropTypes from 'prop-types'
import {Navbar} from './Navbar/Navbar'
import Footer from './footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        {/* <Navbar /> */}
        {children}
        <Footer/>
    </>
  )
}


export default Layout