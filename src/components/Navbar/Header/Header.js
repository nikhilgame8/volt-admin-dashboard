import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/full-logo.svg";
import PollPelogo from "../../../assets/img/logo.svg";
import themeMode from "../../../assets/img/theme-mode-icon.svg";
import infoIcon from "../../../assets/img/info-icon.svg";
import ProfileImg from "../../../assets/img/profile-img.jpg";
import { NavLink } from "react-router-dom";

const Header = ({ getPollTitle, toggleBar, setToggleBar, showSideBar, setShowSideBar }) => {

  const [searchBar, setSearchBar] = useState(false);
  const [pollName, setPollName] = useState('')

  // useEffect(()=>{

  //   console.log(getPollTitle)
  // },[getPollTitle])

  const handleSearchBar = (e) => {
    setSearchBar(!searchBar);
    e.preventDefault();
  };
  // Handle Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleToggle = () => {
    const sidebar = document.getElementById("sidebar");
    // if(showSideBar){
    //   setToggleBar(true)
    // }
    // else{
    //   setToggleBar((prevToggle) => !prevToggle);
    // }

    // sidebar.classList.add("handleSidebar");
    document.getElementById("sidebar").style.width = "25rem"
    document.body.classList.toggle("toggle-sidebar");
    setToggleBar(!toggleBar)
    console.log("clicked");
  };


  console.log(getPollTitle.getPollTitle)

  // const writePollName = (pollName) => {
  //   setPollName(pollName)
  // }
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">

          <h4>{getPollTitle.getPollTitle}</h4>
          <NavLink to="/" className="w-24 h-full hidden lg:flex items-center">
            <img
              src={logo}
              alt="pollpe-logo"
              className="img-fluid d-lg-block d-none"
            />
            {/* <img
              src={PollPelogo}
              alt="pollpe-logo"
              className="img-fluid d-lg-none d-block"
            /> */}
          </NavLink>

          <div className="toggle-sidebar-btn" onClick={handleToggle}>
            <i className="bi bi-list"></i>
          </div>

          {/* <!-- Dot Icon --> */}

          {/* <div
          className="active-dot-btn d-flex justify-content-center align-items-center"
        >
          <div className="dot"></div>
        </div> */}
        </div>
        {/* <!-- End Logo --> */}

        <div
          className={`search-bar ${searchBar ? "search-bar-show" : ""
            } ms-lg-auto`}
        >
          <form
            className="search-form d-flex align-items-center"
            onClick={handleSubmit}
          >
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
            <input
              type="text"
              name="query"
              placeholder="Search Anything..."
              title="Enter search keyword"
            />
          </form>
        </div>
        {/* <!-- End Search Bar --> */}

        <nav className="header-nav ms-auto ms-lg-0">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <button
                className="nav-link nav-icon search-bar-toggle"
                onClick={handleSearchBar}
              >
                <i className="bi bi-search"></i>
              </button>
            </li>
            {/* <!-- End Search Icon--> */}

            <li className="nav-item small-icons">
              <a className="nav-link" href="/">
                <img src={themeMode} alt="theme mode toggle" />
              </a>
            </li>
            <li className="nav-item small-icons">
              <a className="nav-link" href="/">
                <img src={infoIcon} alt="info-icon" />
              </a>
            </li>
            <li className="nav-item dropdown small-icons ">
              <a
                className="nav-link nav-icon"
                href="/"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="rounded-circle badge-number">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="/">
                    <span className="badge bg-primary-purple rounded-pill p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="/">Show all notifications</a>
                </li>
              </ul>
              {/* <!-- End Notification Dropdown Items --> */}
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="/"
                data-bs-toggle="dropdown"
              >
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Anurag
                </span>{" "}
              </a>

              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Anurag Maurya</h6>
                  <span>React Developer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="fa-solid fa-gears"></i>
                    <span>Account Setting</span>
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>
    </div>
  );
};

export default Header;
