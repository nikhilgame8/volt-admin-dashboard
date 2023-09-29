import React from 'react'
import Header from './Header/Header'
import SideNav from './SideNav/SideNav'

const Layout = (getPollTitle) => {
  return (
    <div>
        <Header getPollTitle={getPollTitle}/>
        <SideNav/>
    </div>
  )
}

export default Layout