import React, { useState } from 'react'
import Header from './Header/Header'
import SideNav from './SideNav/SideNav'

const Layout = (getPollTitle) => {
  const [toggleBar, setToggleBar] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div>
      <Header getPollTitle={getPollTitle} toggleBar={toggleBar} setToggleBar={setToggleBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideNav toggleBar={toggleBar} setToggleBar={setToggleBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  )
}

export default Layout