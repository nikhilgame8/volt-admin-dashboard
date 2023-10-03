import React, { useState } from "react";
import UserIcon from "../assets/img/user-icon.svg";
import PurplePollIcon from "../assets/img/purple-poll-icon.svg";
import OrangePollIcon from "../assets/img/orange-poll-icon.svg";
import BluePollIcon from "../assets/img/blue-poll-icon.svg";
import PieChart from "./Charts/PieChart";
import { DemoGauge } from "./Charts/Meter";
import ColumnPlot from "./Charts/ColumnPlot";
import LinePlot from "./Charts/LineDataPlot";
import Map from "./Charts/IndiaMap";
import PerformanceChart from "./Charts/Perfomance";
// import YesNo from "../assets/img/poll-selection-icons/yes-no-icon.svg";
// import SingleSelection from "../assets/img/poll-selection-icons/single-selection-icon.svg";
// import MultiSelection from "../assets/img/poll-selection-icons/multi-selection.svg";
// import DropdownIcon from "../assets/img/poll-selection-icons/dropdown-icon.svg";
// import SingleWord from "../assets/img/poll-selection-icons/single-word-icon.svg";
// import SingleLine from "../assets/img/poll-selection-icons/single-line-icon.svg";
// import DateIcon from "../assets/img/poll-selection-icons/date-icon.svg";
// import TimeIcon from "../assets/img/poll-selection-icons/time-icon.svg";
// import DateTimeIcon from "../assets/img/poll-selection-icons/date-time-icon.svg";
// import RatingIcon from "../assets/img/poll-selection-icons/rating-icon.svg";
// import MultiLine from "../assets/img/poll-selection-icons/multi-line-icon.svg";
import { NavLink } from "react-router-dom";
import CreateModal from "./Create_Poll/CreateModal";

const Home = ({ loader }) => {
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showPollNaming, setShowPollNaming] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false)
  const currentDate = new Date();
  // Days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Months
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Get the day, month, and time components
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // Pad minutes with leading zero if needed
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Create the formatted date string
  const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} - ${formattedHours}:${formattedMinutes} ${ampm}`;

  // const pollNaming = document.querySelector('.modal-content.poll-naming');
  // const pollSelection = document.querySelector('.modal-content.poll-selection');
  // const pollContinueBtn = document.querySelector(
  //   '.modal-content #poll-naming-continue'
  // );

  // pollContinueBtn.addEventListener('click', function () {
  //   pollNaming.style.display = 'none';
  //   pollSelection.style.display = 'block';
  //   pollNaming.classList.add('hidden');
  //   pollSelection.classList.remove('hidden');
  // });
  // const [toggleBar, setToggleBar] = useState(false);
  // const [searchBar, setSearchBar] = useState(false);

  // const handleToggle = () => {
  //   // const sidebar = document.getElementById("sidebar");
  //   setToggleBar(!toggleBar);
  //   // sidebar.classNameList.add("handleSidebar");
  //   document.body.classNameList.toggle("toggle-sidebar");
  //   console.log("clicked");
  // };

  // const handleSearchBar = (e) => {
  //   setSearchBar(!searchBar);
  //   e.preventDefault();
  // };
  // // Handle Submit the form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true)
  }

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <div>
      {/* // <div className={`${toggleBar ? '' : 'toggle-sidebar'}`}> */}
      {
        // <header
        //   id="header"
        // className="header fixed-top d-flex align-items-center"
        // >
        //   <div className="d-flex align-items-center justify-content-between">
        // {/* <NavLink to="/" className="logo d-flex align-items-center">
        //       <img
        //         src={logo}
        //         alt="pollpe-logo"
        //         className="img-fluid d-lg-block d-none"
        //       />
        //       <img
        //         src={PollPelogo}
        //         alt="pollpe-logo"
        //         className="img-fluid d-lg-none d-block"
        //       />
        //     </NavLink>
        //     <div className="toggle-sidebar-btn"  onClick={handleToggle}>
        //       <i className="bi bi-list"></i>
        //     </div> */}
        //     {/* <!-- Dot Icon --> */}
        //     {/* <div
        //     className="active-dot-btn d-flex justify-content-center align-items-center"
        //   >
        //     <div className="dot"></div>
        //   </div> */}
        //   </div>
        //   {/* <!-- End Logo --> */}
        //   <div
        //     className={`search-bar ${
        //       searchBar ? "search-bar-show" : ""
        //     } ms-lg-auto`}
        //   >
        //     <form
        //       className="search-form d-flex align-items-center"
        //       onClick={handleSubmit}
        //     >
        //       <button type="submit" title="Search">
        //         <i className="bi bi-search"></i>
        //       </button>
        //       <input
        //         type="text"
        //         name="query"
        //         placeholder="Search Anything..."
        //         title="Enter search keyword"
        //       />
        //     </form>
        //   </div>
        //   {/* <!-- End Search Bar --> */}
        //   <nav className="header-nav ms-auto ms-lg-0">
        //     <ul className="d-flex align-items-center">
        //       <li className="nav-item d-block d-lg-none">
        //         <button
        //           className="nav-link nav-icon search-bar-toggle"
        //           onClick={handleSearchBar}
        //         >
        //           <i className="bi bi-search"></i>
        //         </button>
        //       </li>
        //       {/* <!-- End Search Icon--> */}
        //       <li className="nav-item small-icons">
        //         <a className="nav-link" href="/">
        //           <img src={themeMode} alt="theme mode toggle" />
        //         </a>
        //       </li>
        //       <li className="nav-item small-icons">
        //         <a className="nav-link" href="/">
        //           <img src={infoIcon} alt="info-icon" />
        //         </a>
        //       </li>
        //       <li className="nav-item dropdown small-icons ">
        //         <a
        //           className="nav-link nav-icon"
        //           href="/"
        //           data-bs-toggle="dropdown"
        //         >
        //           <i className="bi bi-bell"></i>
        //           <span className="rounded-circle badge-number">
        //             <span className="visually-hidden">New alerts</span>
        //           </span>
        //         </a>
        //         <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        //           <li className="dropdown-header">
        //             You have 4 new notifications
        //             <a href="/">
        //               <span className="badge bg-primary-purple rounded-pill p-2 ms-2">
        //                 View all
        //               </span>
        //             </a>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li className="notification-item">
        //             <i className="bi bi-exclamation-circle text-warning"></i>
        //             <div>
        //               <h4>Lorem Ipsum</h4>
        //               <p>Quae dolorem earum veritatis oditseno</p>
        //               <p>30 min. ago</p>
        //             </div>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li className="notification-item">
        //             <i className="bi bi-x-circle text-danger"></i>
        //             <div>
        //               <h4>Atque rerum nesciunt</h4>
        //               <p>Quae dolorem earum veritatis oditseno</p>
        //               <p>1 hr. ago</p>
        //             </div>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li className="notification-item">
        //             <i className="bi bi-check-circle text-success"></i>
        //             <div>
        //               <h4>Sit rerum fuga</h4>
        //               <p>Quae dolorem earum veritatis oditseno</p>
        //               <p>2 hrs. ago</p>
        //             </div>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li className="notification-item">
        //             <i className="bi bi-info-circle text-primary"></i>
        //             <div>
        //               <h4>Dicta reprehenderit</h4>
        //               <p>Quae dolorem earum veritatis oditseno</p>
        //               <p>4 hrs. ago</p>
        //             </div>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li className="dropdown-footer">
        //             <a href="/">Show all notifications</a>
        //           </li>
        //         </ul>
        //         {/* <!-- End Notification Dropdown Items --> */}
        //       </li>
        //       <li className="nav-item dropdown pe-3">
        //         <a
        //           className="nav-link nav-profile d-flex align-items-center pe-0"
        //           href="/"
        //           data-bs-toggle="dropdown"
        //         >
        //           <img
        //             src={ProfileImg}
        //             alt="Profile"
        //             className="rounded-circle"
        //           />
        //           <span className="d-none d-md-block dropdown-toggle ps-2">
        //             Anurag
        //           </span>{" "}
        //         </a>
        //         {/* <!-- End Profile Iamge Icon --> */}
        //         <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        //           <li className="dropdown-header">
        //             <h6>Anurag Maurya</h6>
        //             <span>React Developer</span>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li>
        //             <a
        //               className="dropdown-item d-flex align-items-center"
        //               href="/"
        //             >
        //               <i className="fa-solid fa-user"></i>
        //               <span>My Profile</span>
        //             </a>
        //           </li>
        //           <li>
        //             <a
        //               className="dropdown-item d-flex align-items-center"
        //               href="/"
        //             >
        //               <i className="fa-solid fa-gears"></i>
        //               <span>Account Setting</span>
        //             </a>
        //           </li>
        //           <li>
        //             <hr className="dropdown-divider" />
        //           </li>
        //           <li>
        //             <a
        //               className="dropdown-item d-flex align-items-center"
        //               href="/"
        //             >
        //               <i className="bi bi-box-arrow-right"></i>
        //               <span>Sign Out</span>
        //             </a>
        //           </li>
        //         </ul>
        //         {/* <!-- End Profile Dropdown Items --> */}
        //       </li>
        //       {/* <!-- End Profile Nav --> */}
        //     </ul>
        //   </nav>
        //   {/* <!-- End Icons Navigation --> */}
        // </header>
      }
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      {/* {toggleBar && ( */}

      {/* <SideNav/> */}
      {
        // <aside
        //   id="sidebar"
        //   className={`sidebar ${toggleBar ? "collapsed" : ""}`}
        // >
        //   <div className="top d-flex align-items-center justify-content-between">
        //     <NavLink to="/" className="logo d-flex align-items-center">
        //       <img
        //         src={logo}
        //         alt="pollpe-logo"
        //         className="img-fluid d-lg-block d-none"
        //       />
        //     </NavLink>
        //     <div className="toggle-sidebar-btn" onClick={handleToggle}>
        //       {/* {toggleBar ? <img src={removeDotButton} alt="" /> : <img src = {dotButton} alt="dot-button"/>} */}
        //       <div className="active-dot-btn d-flex justify-content-center align-items-center">
        //         <div className={`${!toggleBar ? "dot" : ""}`}></div>
        //       </div>
        //     </div>
        //     {/* <!-- Dot Icon --> */}
        //   </div>
        //   {/* end */}
        //   <ul className="sidebar-nav" id="sidebar-nav">
        //     <li className="nav-item">
        //       <a className="nav-link active" href="/">
        //         <i className="bi bi-grid"></i>
        //         <span>Overview</span>
        //       </a>
        //     </li>
        //     {/* <!-- End Dashboard Nav --> */}
        //     <li className="nav-item">
        //       <a
        //         className="nav-link collapsed"
        //         data-bs-target="#componentsA-nav"
        //         data-bs-toggle="collapse"
        //         href="/"
        //       >
        //         {/* <FontAwesomeIcon icon={faChartSimple}/> */}
        //         <i className="fa-solid fa-chart-simple"></i>
        //         <span>Polls</span>
        //         <i className="bi bi-chevron-down ms-auto"></i>
        //       </a>
        //       <ul
        //         id="componentsA-nav"
        //         className="nav-content collapse show"
        //         data-bs-parent="#sidebar-nav"
        //       >
        //         <li>
        //           <a href="/">
        //             <i className="fa-regular fa-square-plus"></i>
        //             <span>Create</span>
        //           </a>
        //         </li>
        //         <li>
        //           <NavLink to="/polls">
        //             <i className="fa-regular fa-compass"></i>
        //             <span>All Polls</span>
        //           </NavLink>
        //         </li>
        //         <li>
        //           <a href="/">
        //             <i className="fa-regular fa-calendar-check"></i>
        //             <span>Scheduled</span>
        //           </a>
        //         </li>
        //         <li>
        //           <a href="/">
        //             <i className="bi bi-arrow-down-up"></i>
        //             <span>Ongoing</span>
        //           </a>
        //         </li>
        //       </ul>
        //     </li>
        //     {/* <!-- End Polls Nav --> */}
        //     <li className="nav-item">
        //       <a className="nav-link" href="/">
        //         <i className="fa-solid fa-chart-pie"></i>
        //         <span>Analytics</span>
        //       </a>
        //     </li>
        //     {/* <!-- End Analytics Nav --> */}
        //     <li className="nav-item">
        //       <a
        //         className="nav-link collapsed"
        //         data-bs-target="#ComponentsB-nav"
        //         data-bs-toggle="collapse"
        //         href="/"
        //       >
        //         <i className="fa-solid fa-gear"></i>
        //         <span>Setting</span>
        //         <i className="bi bi-chevron-down ms-auto"></i>
        //       </a>
        //       <ul
        //         id="ComponentsB-nav"
        //         className="nav-content collapse show"
        //         data-bs-parent="#sidebar-nav"
        //       >
        //         <li>
        //           <a href="/">
        //             <i className="fa-solid fa-layer-group"></i>
        //             <span>Template</span>
        //           </a>
        //         </li>
        //         <li>
        //           <a href="/">
        //             <i className="fa-solid fa-unlock"></i>
        //             <span>Access</span>
        //           </a>
        //         </li>
        //         <li>
        //           <a href="/">
        //             <i className="fa-solid fa-bars-progress"></i>
        //             <span>Category</span>
        //           </a>
        //         </li>
        //         <li>
        //           <a href="/">
        //             <i className="fa-solid fa-gears"></i>
        //             <span>Setting</span>
        //           </a>
        //         </li>
        //       </ul>
        //     </li>
        //     {/* <!-- End Setting Nav --> */}
        //     <li className="nav-item">
        //       <a className="nav-link" href="/">
        //         <i className="fa-solid fa-bell"></i>
        //         <span>Notifications</span>
        //       </a>
        //     </li>
        //     {/* <!-- End Notification Nav --> */}
        //   </ul>
        // </aside>
      }
      {/* )} */}
      {/* <!-- End Sidebar--> */}

      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-transparent">
                <div className="card-body">
                  <h4 className="card-title">Hello Anurag</h4>
                  <p className="card-desc">
                    Track polls progress, You almost reach a goal!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card create-new-poll">
                <div className="card-body">
                  <div className="card-content">
                    <div className="heading">
                      <h4>It’s time to Create New Poll</h4>
                      <div className="date-time d-flex align-items-center gap-2">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span className="card-desc">
                          {formattedDate}
                          {/* Wednesday 28 June - 4:01 PM */}
                        </span>
                      </div>
                    </div>

                    <NavLink to="/create-poll">
                      <button
                        className="create-poll-btn"
                      // onClick={handleOpenCreateModal}
                      // data-bs-toggle="modal"
                      // data-bs-target="#createPoll"
                      >
                        <i className="fa-solid fa-plus"></i>
                        <span>Create Poll</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border" />

          <div className="tabs bg-greyish-white">
            <ul className="nav nav-tabs align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  <h4>Main Stats</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>Overall Users Statistics</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>Today’s Poll Statistics</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <h4>Overall Poll Statistics</h4>
                </a>
              </li>
            </ul>

            <hr className="border my-2" />

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-pink-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">23</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                    <div className="card bg-purple-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Users</p>
                          <span className="count-number">1.50L</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={PurplePollIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <span className="badge card-badge d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-orangish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Active Users</p>
                          <span className="count-number">23</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={OrangePollIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-bluish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">23</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={BluePollIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tab 1 --> */}

              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-purple-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">27</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                    <div className="card bg-pink-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Users</p>
                          <span className="count-number">1.60L</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-orangish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Active Users</p>
                          <span className="count-number">37</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-bluish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">29</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tab 2 --> */}

              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-orangish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">18</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                    <div className="card bg-pink-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Users</p>
                          <span className="count-number">1.70L</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-purple-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Active Users</p>
                          <span className="count-number">56</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-bluish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">32</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tab 3 --> */}

              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-bluish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">24</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                    <div className="card bg-pink-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Users</p>
                          <span className="count-number">1.20L</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-orangish-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">Total Active Users</p>
                          <span className="count-number">40</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="card bg-purple-gradient">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="count">
                          <p className="card-desc">New Users</p>
                          <span className="count-number">52</span>
                        </div>
                        <div className="img-icon">
                          <img
                            src={UserIcon}
                            alt="user-icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Graph & Charts --> */}
          <div className="graph-charts mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Todays polls live stats</h2>
                    <hr className="border" />
                    <div className="chart-img text-center img-fluid charts">
                      <div className="w-100 text-start">
                        <h4 className="">
                          What is you favourite Icecream flavour ?
                        </h4>
                      </div>
                      <PieChart className=" img-fluid" />
                      {/* <img
                        src={PieChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Todays Completion Rate</h2>
                    <hr className="border" />
                    {/* <h4 className="">Completion Rate:</h4> */}
                    <div className="chart-img text-center charts">
                      <DemoGauge className=" img-fluid" />

                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Top Age</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <ColumnPlot />
                      {/* <img
                        src={DemoChartImg3}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End First Row --> */}

              <div className="col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Todays Votes Over Time</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <LinePlot />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Votes by Location</h2>
                    <hr className="border" />
                    {/* <div className="chart-img text-center"> */}
                    <div className="chart-img text-start votebylocation scroll">
                      <p>Total Location of votes</p>
                      <h2>26</h2>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Ludhiana <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Pune <span>(Maharashtra)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      {/* <img
                        src={DemoChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Votes by Area</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <Map />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End Second Row --> */}

              <div className="col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Performance Over Days</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <PerformanceChart />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <div className="card trending-polls overflow-auto">
                  {/* <!-- <div className="filter">
                    <a className="icon" href='/' data-bs-toggle="dropdown"
                      ><i className="bi bi-three-dots"></i
                    ></a>
                    <ul
                      className="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    >
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href='/'>Today</a></li>
                      <li><a className="dropdown-item" href='/'>This Month</a></li>
                      <li><a className="dropdown-item" href='/'>This Year</a></li>
                    </ul>
                  </div> --> */}

                  <div className="card-body">
                    <div className="card-title-header d-flex justify-content-between align-items-center">
                      <h2 className="card-title">Trending Polls</h2>
                      <a href="/" className="">
                        View All
                      </a>
                    </div>

                    <table className="table datatable mt-4">
                      <thead>
                        <tr>
                          <th scope="col">Poll Name</th>
                          <th scope="col">
                            Votes <i className="fa-solid fa-caret-up"></i>
                          </th>
                          <th scope="col">
                            Reaches <i className="fa-solid fa-caret-up"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr>
                          <td>First Poll Name</td>
                          <td>4563</td>
                          <td>9834</td>
                        </tr>

                        <tr>
                          <td>Second Poll Name</td>
                          <td>8763</td>
                          <td>28656</td>
                        </tr>

                        <tr>
                          <td>Third Poll Name</td>
                          <td>35829</td>
                          <td>52036</td>
                        </tr>

                        <tr>
                          <td>Forth Poll Name</td>
                          <td>8923</td>
                          <td>17830</td>
                        </tr>

                        <tr>
                          <td>Fifth Poll Name</td>
                          <td>62891</td>
                          <td>97269</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- End Third Row --> */}

              <div className="col-12 mt-5">
                <div className="card trending-polls">
                  <div className="card-body">
                    <div className="card-title-header flex justify-between items-center">
                      <h2 className="card-title">Recent Activity</h2>
                      <a href="/" className="">
                        View All
                      </a>
                    </div>

                    <div className="overflow-auto">
                      <table className="table datatable mt-4">
                        <thead className="">
                          <tr>
                            <th><div className="flex items-center justify-center"> Date/ Time</div></th>
                            <th scope="col"><div className="flex items-center justify-center"> Admin/ User ID</div></th>
                            <th scope="col"><div className="flex items-center justify-center"> Activity Type</div></th>
                            <th scope="col"><div className="flex items-center justify-center"> Activity Description</div></th>
                            <th scope="col"><div className="flex items-center justify-center"> Poll/ User Associated</div></th>
                          </tr>
                        </thead>
                        <tbody className="border-top-0">
                          <tr>
                            <td className="whitespace-nowrap">12-June-2023 at 4:30 PM</td>
                            <td>Anurag</td>
                            <td>Poll Creation</td>
                            <td>"Ab kya krana chahiye Poll created"</td>
                            <td>Poll :- 4353453</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">13-June-2023 at 2:21 PM</td>
                            <td>Amar</td>
                            <td>Poll Modification</td>
                            <td>"Ab kya karna to ab kre modified"</td>
                            <td>User :- 763732</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">13-June-2023 at 8:34 AM</td>
                            <td>Anurag</td>
                            <td>User Modification</td>
                            <td>Id 35653 user name modified</td>
                            <td>Poll :- 672275</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">14-June-2023 at 2:03 PM</td>
                            <td>Rakesh</td>
                            <td>Poll Creation</td>
                            <td>Poll Modification</td>
                            <td>User :- 9836302</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">15-June-2023 at 11:20 AM</td>
                            <td>Anurag</td>
                            <td>Poll Modification</td>
                            <td>Poll Creation</td>
                            <td>Poll :- 3673822</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">15-June-2023 at 2:20 PM</td>
                            <td>Anurag</td>
                            <td>Poll Modification</td>
                            <td>Poll Creation</td>
                            <td>Poll :- 9920839</td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap">15-June-2023 at 6:49 PM</td>
                            <td>Anurag</td>
                            <td>Poll Modification</td>
                            <td>Poll Creation</td>
                            <td>User :- 6892001</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Page Title --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>PollPe</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <!-- Create Poll PopUp --> */}

      <CreateModal isOpen={showCreateModal} onClose={handleCloseCreateModal} />
      {loader && <div id="preloader"></div>}
      {/* <div
        className="modal modal-create-poll fade"
        id="createPoll"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="createPollLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {showPollNaming && <div className={`modal-content ${showPollNaming ? 'poll-naming' : 'hidden'}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="createPollLabel">
                Bring Your New <span>Poll to Life</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="first-field mb-4">
                <label htmlFor="poll-name" className="form-label">
                  Give it a Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="My First Poll"
                    aria-label="Poll name"
                  />
                </div>
              </div>
              <div className="second-field">
                <label htmlFor="poll-category" className="form-label">
                  Select the Category of the poll
                </label>
                <div className="category-box d-flex align-items-center mb-3">
                  <div className="category-name">
                    <span>Cricket</span>
                    <div className="cross-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="category-name">
                    <span>Football</span>
                    <div className="cross-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>

                  <div className="add-more-btn d-flex align-items-center gap-2">
                    <i className="fa-solid fa-plus"></i>
                    <span>Add More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="create-poll-btn"
                id="poll-naming-continue"
                onClick={handleDialogBox}
              >
                Continue
              </button>
            </div>
          </div>} */}

      {/* <!-- Poll Type Selection on Continue --> */}
      {/* {showDialogBox && <div className={`modal-content ${showDialogBox ? 'poll-selection' : 'hidden'}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="createPollLabel">
                Select the <span>Poll Type</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"> */}
      {/* <!-- Selection Polls --> */}
      {/* <div className="poll-types seletion-poll-type">
                <p>Selection Poll</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={YesNo}
                      alt="yes-no-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Yes No</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={SingleSelection}
                      alt="single-selection-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Selection</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={MultiSelection}
                      alt="multi-selection"
                      className="img-fluid"
                    />
                  </div>
                  <span>Multi Selection</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={DropdownIcon}
                      alt="dropdown-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Dropdown</span>
                </div>
              </div> */}

      {/* <!-- Text Polls --> */}
      {/* <div className="poll-types text-poll-type">
                <p>Text Poll</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={SingleWord}
                      alt="single-word-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Word</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={SingleLine}
                      alt="single-line-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Line</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={MultiLine}
                      alt="multi-line-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Multi Line</span>
                </div>
              </div> */}

      {/* <!-- Other Polls --> */}
      {/* <div className="poll-types other-poll-type">
                <p>Other</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={DateIcon}
                      alt="date-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Date</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={TimeIcon}
                      alt="time-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Time</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={DateTimeIcon}
                      alt="date-time-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Date & Time</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src={RatingIcon}
                      alt="rating-icon "
                      className="img-fluid"
                    />
                  </div>
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
