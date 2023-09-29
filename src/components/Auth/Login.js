import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import quoteIcon from "../../assets/img/quote-icon.svg";
// import Profile1 from "../assets/img/profile-1.jpg"
import UserBrand from "../../assets/img/user-brand.svg";
import fullLogo from "../../assets/img/full-logo.svg";
import googleIcon from "../../assets/img/google-icon.svg";
import ProfileImg from "../../assets/img/profile-img.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInWithPassword } from "../../actions/auth";

const Login = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // const PRODURL = https://dailypoll-api.pollpe.com/v3/

  const handleInput = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    return ()=>
    setDetails({
      username:"",
      password:""
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    dispatch(signInWithPassword(details, (data)=>{
      if(data.error){
        // console.log(data.response.data.error.message)
        alert(data?.response?.data?.error?.message || "error occured in Login")
      }
      else{
        console.log("Successfully SignedIn")
        navigate('/')
      }
    }));
  };

  const showLoginForm = () =>{
    
  }

  return (
    <div>
      <main>
        <section className="register d-flex justify-content-center align-items-center">
          <div className="width-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 px-0">
                  <div className="feedback-box d-lg-flex d-none justify-content-between flex-column">
                    <div className="logo">
                      <img src={logo} alt="logo" className="img-fluid" />
                    </div>
                    <div className="content">
                      <h1>
                        Let us help you to get
                        <span>Insight for your Business</span>
                      </h1>
                      <p>
                        Our Poll Research work is very easy and its the lorem
                        ipsum text for the dashboard.
                      </p>
                    </div>

                    {/* <!-- For Desktop Only --> */}
                    <div
                      id="feedbackCarousel"
                      className="carousel slide d-lg-block d-none"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#feedbackCarousel"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#feedbackCarousel"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#feedbackCarousel"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="icon d-inline-flex align-items-center justify-content-center">
                            <img
                              src={quoteIcon}
                              alt="quote-icon"
                              className="img-fluid"
                            />
                          </div>
                          <h2 className="mt-4">
                            I am Social Media Manager and PollPe help us to get
                            the precise data of the audience using polls.
                          </h2>
                          <div className="user-profile d-flex align-items-center pt-4">
                            <div className="user-details d-flex align-items-center gap-3">
                              <img
                                src={ProfileImg}
                                alt="profile-icon"
                                className="img-fluid"
                              />

                              <div className="profile-name">
                                <h4>Sarah Ali</h4>
                                <p>Social Media Manager</p>
                              </div>
                            </div>

                            <div className="user-brand">
                              <img
                                src={UserBrand}
                                alt="brand-logo"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="icon d-inline-flex align-items-center justify-content-center">
                            <img
                              src={quoteIcon}
                              alt="quote-icon"
                              className="img-fluid"
                            />
                          </div>
                          <h2 className="mt-4">
                            I am Social Media Manager and PollPe help us to get
                            the precise data of the audience using polls.
                          </h2>
                          <div className="user-profile d-flex align-items-center pt-4">
                            <div className="user-details d-flex align-items-center gap-3">
                              <img
                                src={ProfileImg}
                                alt="profile-icon"
                                className="img-fluid"
                              />

                              <div className="profile-name">
                                <h4>Sarah Ali</h4>
                                <p>Social Media Manager</p>
                              </div>
                            </div>

                            <div className="user-brand">
                              <img
                                src={UserBrand}
                                alt="brand-logo"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="icon d-inline-flex align-items-center justify-content-center">
                            <img
                              src={quoteIcon}
                              alt="quote-icon"
                              className="img-fluid"
                            />
                          </div>
                          <h2 className="mt-4">
                            I am Social Media Manager and PollPe help us to get
                            the precise data of the audience using polls.
                          </h2>
                          <div className="user-profile d-flex align-items-center pt-4">
                            <div className="user-details d-flex align-items-center gap-3">
                              <img
                                src={ProfileImg}
                                alt="profile-icon"
                                className="img-fluid"
                              />

                              <div className="profile-name">
                                <h4>Sarah Ali</h4>
                                <p>Social Media Manager</p>
                              </div>
                            </div>

                            <div className="user-brand">
                              <img
                                src={UserBrand}
                                alt="brand-logo"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- For Mobile & Tab Only --> */}
                <div className="feedback-box d-flex d-lg-none">
                  {/* <!-- FeedbackBox Only Mobile / Tab View --> */}
                  <div className="feedback-mobile-box" id="feedback-box-mobile">
                    <div className="logo d-flex flex-column align-items-start">
                      <img
                        src={fullLogo}
                        alt="logo"
                        className="img-fluid w-auto"
                      />
                      <span className="tagline mt-3 ps-2">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                    <div className="content">
                      <h1>
                        Let us help you to get
                        <span>Insight for your Business</span>
                      </h1>
                      <p>
                        Our Poll Research work is very easy and its the lorem
                        ipsum text for the dashboard.
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="mt-5">
                        <button
                          className="btn con-google w-100 d-flex align-items-center justify-content-center gap-4"
                          type="submit"
                        >
                          <img src={googleIcon} alt="google-logo" />
                          <span>Login with Google</span>
                        </button>
                      </div>

                      <div className="mt-5">
                        <button
                          className="btn w-100 cont-btn"
                          type="submit"
                          onClick="showLoginForm()"
                        >
                          Sign in with Email
                        </button>
                      </div>

                      <div className="register-now-btn text-center mt-3">
                        {/* <span>
                          Not a member? <a href="/">Register Now</a>
                        </span> */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- 2nd Login Page Only Mobile / Tab View --> */}
                  <div className="login-mobile-view" id="mobile-login-page">
                    <div className="logo d-flex flex-column align-items-start">
                      <img
                        src={fullLogo}
                        alt="logo"
                        className="img-fluid w-auto"
                      />
                      <span className="tagline mt-3 ps-2">
                        Lorem ipsum dolor sit amet.
                      </span>

                      <button
                        className="back-btn d-lg-none d-flex align-items-center gap-2 mt-5"
                        onClick="showFeedbackPage()"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                        <p className="mb-0">Back</p>
                      </button>
                    </div>

                    <div className="login-body px-0">
                      <div className="pt-4 pb-2">
                        <h3 className="card-title text-center pb-0">
                          Hello <span>Again</span>!
                        </h3>
                        <p className="text-center">
                          Welcome Back You’ve been missed..
                        </p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <div className="has-validation">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="yourEmail"
                              placeholder="Enter Email"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12 mt-4">
                          <div className="input-group">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              placeholder="Password"
                              required
                            />

                            <span className="input-group-text show-pass-btn">
                              <i className="fa-solid fa-eye-slash"></i>
                            </span>
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-between align-items-center">
                          <div className="form-check d-flex align-items-center gap-3">
                            <input
                              className="form-check-input"
                              name="terms"
                              type="checkbox"
                              value=""
                              id="rememberMe"
                              required
                            />
                            <label
                              className="form-check-label"
                              for="rememberMe"
                            >
                              Remember Me
                            </label>
                          </div>

                          <a href="#" className="forget-pass">
                            Recover Password
                          </a>
                        </div>
                        <div className="col-12 mt-5">
                          <button className="btn w-100 cont-btn" type="submit">
                            Continue
                          </button>
                        </div>
                      </form>
                    </div>

                    <span className="pp-tos text-center">
                      By signing you agree to our
                      <a href="#" className="tos">
                        Terms of Services
                      </a>{" "}
                      & <br />
                      <a href="#" className="pp">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </div>

                {/* <!-- Login Form --> */}
                <div className="col-lg-6 d-none d-lg-block px-0">
                  <div className="login-form d-flex justify-content-between align-items-center flex-column">
                    <div className="register-now-btn align-self-end">
                      {/* <span>
                        Not a member? <NavLink to="/signup">Register Now</NavLink>
                      </span>
                      <span>
                        Already a member? <NavLink to="/signup">Login</NavLink>
                      </span> */}
                    </div>

                    <div className="login-body">
                      <div className="pt-4 pb-2">
                        <h3 className="card-title text-center pb-0">
                          Hello <span>Again</span>!
                        </h3>
                        <p className="text-center">
                          Welcome Back You’ve been missed..
                        </p>
                      </div>

                      <form
                        className="row g-3 needs-validation"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <div className="col-12">
                          <div className="has-validation">
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourEmail"
                              value={details.username}
                              placeholder="Enter username or email"
                              onChange={handleInput}
                              required
                            />
                            {/* <input
                              type="name"
                              name="email"
                              className="form-control"
                              id="yourEmail"
                              value={details.email}
                              placeholder="Enter username or email"
                              onChange={handleInput}
                              required
                            /> */}
                          </div>
                        </div>

                        <div className="col-12 mt-4">
                          <div className="input-group">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              value={details.password}
                              placeholder="Password"
                              onChange={handleInput}
                              required
                            />

                            <span className="input-group-text show-pass-btn">
                              <i className="fa-solid fa-eye-slash"></i>
                            </span>
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-between align-items-center">
                          <div className="form-check d-flex align-items-center gap-3">
                            <input
                              className="form-check-input"
                              name="terms"
                              type="checkbox"
                              value=""
                              id="rememberMe"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember Me
                            </label>
                          </div>

                          <a href="#" className="forget-pass">
                            Recover Password
                          </a>
                        </div>
                        <div className="col-12 mt-5">
                          <button className="btn w-100 cont-btn" type="submit">
                            Continue
                          </button>
                        </div>

                        <div className="alternate-options d-flex align-items-center justify-content-between mt-5 gap-2">
                          <div className="line"></div>
                          <p>Or Signup with</p>
                          <div className="line"></div>
                        </div>
                        <div className="col-12 mt-5">
                          <button
                            className="btn con-google w-100 d-flex align-items-center justify-content-center gap-4"
                            type="submit"
                          >
                            <img src={googleIcon} alt="google-logo" />
                            <span>Signup with Google</span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <span className="pp-tos">
                      By signing you agree to our
                      <a href="#" className="tos">
                        Terms of Services
                      </a>{" "}
                      &
                      <a href="#" className="pp">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
