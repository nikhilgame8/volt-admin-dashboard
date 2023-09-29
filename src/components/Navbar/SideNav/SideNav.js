import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/full-logo.svg";

const SideNav = () => {
  const [toggleBar, setToggleBar] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);



  const handleShowSideBar = (e) => {
    const sidebar = document.getElementById("sidebar");
    const distanceSidebar = 50;
    if (
      !toggleBar &&
      (e.clientX < distanceSidebar || sidebar.contains(e.target))
    ) {
      // document.getElementById("sidebar").style.width = "25rem"
      setShowSideBar(true);
      // setToggleBar(true);
      console.log(toggleBar);
      // console.log(showSideBar)
      // setToggleBar(prevToggle => !prevToggle);
      console.log("inside the sidebar")
    } else {
      setShowSideBar(false);
      // document.getElementById("sidebar").style.width = "25rem"
      console.log("outside the sidebar")
    }
  };

  useEffect(() => {
    
    window.addEventListener("mousemove", handleShowSideBar);
    return () => {
      window.removeEventListener("mousemove", handleShowSideBar);
    };
  }, []);
  // const toggleSideBar = () => {
  //   if(toggleBar){
  //     // setShowSideBar(true)
  //     document.getElementById("sidebar").style.width = "25rem"
  //   // document.body.classList.add("toggle-sidebar");

  //     // document.getElementById("sidebar").classList.remove('collapsed')
  //     // setToggleBar(false)
  //     setToggleBar(false)
  //     console.log("inside")
  //   }
  //   else{
  //     document.getElementById('sidebar').style.width = "7rem"
  //     setToggleBar(true)
  //     console.log("closing side")
  //   }
  // }
  const handleToggle = () => {
    const sidebar = document.getElementById("sidebar");
    // if(showSideBar){
    //   setToggleBar(true)
    // }
    // else{
    //   setToggleBar((prevToggle) => !prevToggle);
    // }

    // sidebar.classList.add("handleSidebar");
    document.getElementById("sidebar").style.width = "7rem"
    document.body.classList.toggle("toggle-sidebar");
    setToggleBar(!toggleBar)
    console.log("clicked");
  };

  // const handleMouseOut = () =>{
  //   console.log('outside')
  //   document.getElementById("sidebar").classList.add('collapsed')
  //   document.getElementById("sidebar").classList.remove('collapsed')
  // }

  return (
    <div className={``}>
      <aside
        id="sidebar"
        className={`sidebar ${toggleBar ? "" : "collapsed"}`}
        onMouseMove={handleShowSideBar}
      >
        {/* // <aside id="sidebar" className={ `sidebar ${toggleBar ? "" : "collapsed"}`}> */}
        <div className="top d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <img
              src={logo}
              alt="pollpe-logo"
              className="img-fluid d-lg-block d-none"
            />
          </NavLink>
          <div className="toggle-sidebar-btn" onClick={handleToggle}>
          {/* already commented */}
            {/* <div className="toggle-sidebar-btn"> */}
            {/* {toggleBar ? <img src={removeDotButton} alt="" /> : <img src = {dotButton} alt="dot-button"/>} */}

            <div className="active-dot-btn d-flex justify-content-center align-items-center">
              <div className={`${toggleBar ? "dot" : ""}`}></div>
            </div>
          </div>
          {/* <!-- Dot Icon --> */}
        </div>

        {/* end */}
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              <i className="bi bi-grid"></i>
              <span>Overview</span>
            </NavLink>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#componentsA-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              {/* <FontAwesomeIcon icon={faChartSimple}/> */}
              <i className="fa-solid fa-chart-simple"></i>
              <span>Polls</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="componentsA-nav"
              className="nav-content collapse show"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/create-poll">
                  <i className="fa-regular fa-square-plus"></i>
                  <span>Create</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/polls">
                  <i className="fa-regular fa-compass"></i>
                  <span>All Polls</span>
                </NavLink>
              </li>
              <li>
                <a href="/">
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Scheduled</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-arrow-down-up"></i>
                  <span>Ongoing</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Polls Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link" to="/view-insights">
              <i className="fa-solid fa-chart-pie"></i>
              <span>Analytics</span>
            </NavLink>
          </li>
          {/* <!-- End Analytics Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#ComponentsB-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="fa-solid fa-gear"></i>
              <span>Setting</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="ComponentsB-nav"
              className="nav-content collapse show"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/">
                  <i className="fa-solid fa-layer-group"></i>
                  <span>Template</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-solid fa-unlock"></i>
                  <span>Access</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-solid fa-bars-progress"></i>
                  <span>Category</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-solid fa-gears"></i>
                  <span>Setting</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Setting Nav --> */}

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fa-solid fa-bell"></i>
              <span>Notifications</span>
            </a>
          </li>
          {/* <!-- End Notification Nav --> */}
        </ul>
      </aside>
    </div>
  );
};

export default SideNav;
