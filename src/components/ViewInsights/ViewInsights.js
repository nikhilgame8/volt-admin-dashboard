import React, { useEffect, useState } from "react";
import SingleWorldIcon from "../../assets/img/poll-selection-icons/single-word-icon.svg";
import TopAgeViewIns from "../Charts/TopAgeViewIns";
import IndiaMap from "../Charts/IndiaMap";
import AvgTimeSpent from "../Charts/AvgTimeSpent";
import LinePlot from "../Charts/LineDataPlot";
import { DemoGauge } from "../Charts/Meter";
import Cloudd from "../Charts/Cloudd.js";
import axios from "axios";
import Pie from "./components/Pie";

const ViewInsights = ({loader}) => {
  const [data, setData] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const questions = [
    "Lorem ipsum is typically a corrupted version",
    "by the Roman statesman and philosopher",
    "Versions of the Lorem ipsum text have been",
  ];

  const handleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  useEffect(() => {
    axios
      .get(`https://64be6fe15ee688b6250c67d9.mockapi.io/dataresponse`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <main id="main" className="main">
        <section className="section dashboard view-insight">
          <div className="view-insight-header d-flex justify-content-between align-items-center">
            <div className="questions d-flex justify-content-between align-items-center gap-4">
              <div className="question d-flex align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="type d-flex gap-3">
                      <img src={SingleWorldIcon} alt="" />
                      <span>1</span>
                    </div>
                    <div
                      className="d-flex align-items-center handle-question"
                      onClick={handleQuestions}
                    >
                      <h4 className="ms-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing?
                      </h4>

                      <div className={`dropdown-icon icon-font ${showQuestions? 'rotated' : 'rotate'}`}>
                          <i className="bi bi-chevron-down ms-auto "></i>
                        {/* <img src={UpArrow} alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className={`question-container `}>
                    {showQuestions && (
                      <div className={`set-question `}>
                        {questions.map((item, index) => {
                          return (
                            <div className="d-flex question-background align-items-center">
                              <div className="type d-flex gap-3">
                                <img src={SingleWorldIcon} alt="" />
                                <span>{index + 2}</span>
                              </div>
                              <h4
                                className="ms-3 "
                                style={{ top: `${index * 30}px` }}
                                key={index}
                              >
                                {item}
                              </h4>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="action-btns d-flex justify-content-evenly align-items-center gap-3">
              <div className="carousel-que d-flex align-items-center gap-2">
                <div className="icon">
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <span>1/3</span>
                <div className="icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <button className="action-btn pause">
                <i className="fa-regular fa-circle-pause"></i>
                <span>&nbsp; Pause</span>
              </button>
              <button className="action-btn edit">
                <i className="fa-solid fa-pen-to-square"></i>
                <span>&nbsp; Edit</span>
              </button>
              <button className="action-btn download">
                <i className="fa-solid fa-file-arrow-down"></i>
                <span> &nbsp; Export CSV</span>
              </button>
              <button className="action-btn back">
                <i className="fa-solid fa-chevron-left"></i>
                <span> &nbsp; Go Back</span>
              </button>
            </div>
          </div>

          <div className="insight-bottom-header d-flex justify-content-between align-items-center">
            <p>Date Created : 16-07-2023</p>
            <p>Date Ended : 16-07-2023</p>
            <p>
              Poll Status : <span className="live">◉ Live</span>
            </p>
            <p>
              Poll Status : <strong>Live</strong>
            </p>
            <p>Total Responses : 20000</p>
          </div>
          {/* <!-- Graph & Charts --> */}
          <div className="graph-charts mt-5">
            <h3 className="demographic-heading">Demographic</h3>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Top Age</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      {/* <img
                        src={DemoChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                      <TopAgeViewIns className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
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
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Votes By Area</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <IndiaMap />
                      {/* <img
                        src={DemoChart3}
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
                    <h2 className="card-title">Avg Time Spent</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <AvgTimeSpent className="img-fluid" />
                      {/* <img
                        src={DemoChart3}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End First Row --> */}

              <div className="col-lg-9 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Drop Off Points</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      {/* <img
                        src={DemoChart2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                      <LinePlot />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Completion Rate</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <DemoGauge />
                      {/* <img
                        src={DemoChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Second Row --> */}

              <Pie data={data} />
              <div className="col-12 mt-5">
                <div className="card trending-polls overflow-auto">
                  <div className="card-body">
                    <div className="card-title-header d-flex justify-content-between align-items-center">
                      <h2 className="card-title">Result</h2>
                      <button className="action-btn download">
                        <i className="fa-solid fa-file-arrow-down"></i>
                        <span>&nbsp; Export CSV</span>
                      </button>
                    </div>

                    <div className="result-tab-header mt-4">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            List
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Cloud
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content mt-0" id="pills-tabContent">
                        <div
                          className="tab-pane fade"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="items">
                            <p>Answer will come here</p>
                            <p>second text will come here</p>
                            <p>third text will come here</p>
                            <p>fourthe text will come herre</p>
                            <p>dfskjsdkfjdskfjsdlfjsdfkldsjfkdlfjdsklf</p>
                            <p>jksdfjsdklfjdsklfjslkf</p>
                            <p>dfkjsdklfjklsdfjkdsjf</p>
                            <p>sdkfjdslkfjdsklfjdkslfjdkslfjklsf</p>
                            <p>asdjksaldjsadljl</p>
                            <p>sdfjksldfjskldjksdfjksdlfjlksdfjsldkfj</p>
                            <p>sdkfjsdlfjdsklfjdslkfjdslk</p>
                            <p>Answer sdfkslfjjj come here</p>
                            <p>sadkjsaldjsalkdjsalkdj</p>
                            <p>jkasjdsladsalkdjsakldj</p>
                            <p>ksldjsakldjsklfjkslkljkljl</p>
                            <p>sdjklasjkdljsadlkj will come here</p>
                            <p>Answer sdfkslfjjj come here</p>
                          </div>
                          {/* <img src={DemoChart3} alt="" /> */}
                          {/* <Cloud/> */}
                        </div>

                        <div
                          className="tab-pane show active fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="row">
                            <div className="col-lg-8 col-md-6">
                              <div className="d-flex justify-content-center align-items-center charts">
                                <Cloudd />
                                {/* <img
                                  src="assets/img/poll-selection-icons/result-cloud-img.svg"
                                  alt=""
                                /> */}
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <table className="table datatable mt-4">
                                <thead>
                                  <tr>
                                    <th scope="col">Top Worlds</th>
                                    <th scope="col">Responses</th>
                                  </tr>
                                </thead>
                                <tbody className="border-top-0">
                                  {data.map((items) => {
                                    return (
                                      <tr key={items.id}>
                                        <td>{items.name}</td>
                                        <td>{items.Responses}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
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

      {/* <!-- End Footer --> */}

      {/* <!-- Create Poll PopUp --> */}
      <div
        className="modal modal-create-poll fade"
        id="createPoll"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="createPollLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content poll-naming">
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
                <label htmlFor="poll-name" className="htmlForm-label">
                  Give it a Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="htmlForm-control"
                    placeholder="My First Poll"
                    aria-label="Poll name"
                  />
                </div>
              </div>
              <div className="second-field">
                <label htmlFor="poll-category" className="htmlForm-label">
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
              >
                Continue
              </button>
            </div>
          </div>

          {/* <!-- Poll Type Selection on Continue --> */}
          <div className="modal-content poll-selection">
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
            <div className="modal-body">
              {/* <!-- Selection Polls --> */}
              <div className="poll-types seletion-poll-type">
                <p>Selection Poll</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/yes-no-icon.svg"
                      alt="yes-no-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Yes No</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/single-selection-icon.svg"
                      alt="single-selection-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Selection</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/multi-selection.svg"
                      alt="multi-selection"
                      className="img-fluid"
                    />
                  </div>
                  <span>Multi Selection</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/dropdown-icon.svg"
                      alt="dropdown-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Dropdown</span>
                </div>
              </div>

              {/* <!-- Text Polls --> */}
              <div className="poll-types text-poll-type">
                <p>Text Poll</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/single-word-icon.svg"
                      alt="single-word-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Word</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/single-line-icon.svg"
                      alt="single-line-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Single Line</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/multi-line-icon.svg"
                      alt="multi-line-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Multi Line</span>
                </div>
              </div>

              {/* <!-- Other Polls --> */}
              <div className="poll-types other-poll-type">
                <p>Other</p>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/date-icon.svg"
                      alt="date-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Date</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/time-icon.svg"
                      alt="time-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Time</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/date-time-icon.svg"
                      alt="date-time-icon"
                      className="img-fluid"
                    />
                  </div>
                  <span>Date & Time</span>
                </div>
                <div className="poll-type">
                  <div className="icon">
                    <img
                      src="assets/img/poll-selection-icons/rating-icon.svg"
                      alt="rating-icon "
                      className="img-fluid"
                    />
                  </div>
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loader && <div id="preloader"></div>}
    </div>
  );
};

export default ViewInsights;
