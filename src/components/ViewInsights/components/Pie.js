import React, { useState } from "react";
import PieView from "../../Charts/PieView_Insigh";
import TopAgeViewIns from "../../Charts/TopAgeViewIns";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "UID",
    selector: (row) => row.uid,
    sortable: true,
  },
  {
    name: "Answer",
    selector: (row) => row.answer,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
];

const dataTable = [
  {
    id: 1,
    uid: 1231854654654,
    answer: "Answer will come here",
    age: 3,
    city: "Ludhiana",
    state: "Uttar Pradesh",
  },
  {
    id: 2,
    uid: 445456464568,
    answer: "other answer will come here",
    age: 8,
    city: "Lucknow",
    state: "Delhi",
  },
  {
    id: 3,
    uid: 1231854654654,
    answer: "Answer will come here",
    age: 74,
    city: "Jalandhar",
    state: "Punjab",
  },
  {
    id: 4,
    uid: 546546546465,
    answer: "dfsdfsdfsdfsdfsdfsd",
    age: 85465,
    city: "Haryana",
    state: "Haryana",
  },
  {
    id: 5,
    uid: 454654546544,
    answer: "Hellosdjkxkn",
    age: 456,
    city: "Ludhiana",
    state: "Hyderabad",
  },
  {
    id: 5,
    uid: 456454654564,
    answer: "Hicdxkjjsal",
    age: 456,
    city: "Amritsar",
    state: "Mumbai",
  },
  {
    id: 4,
    uid: 546546546465,
    answer: "dfsdfsdfsdfsdfsdfsd",
    age: 85465,
    city: "Haryana",
    state: "Haryana",
  },
  {
    id: 5,
    uid: 454654546544,
    answer: "Hellosdjkxkn",
    age: 456,
    city: "Ludhiana",
    state: "Hyderabad",
  },
  {
    id: 5,
    uid: 456454654564,
    answer: "Hicdxkjjsal",
    age: 456,
    city: "Amritsar",
    state: "Mumbai",
  },
  {
    id: 4,
    uid: 546546546465,
    answer: "dfsdfsdfsdfsdfsdfsd",
    age: 85465,
    city: "Haryana",
    state: "Haryana",
  },
  {
    id: 5,
    uid: 454654546544,
    answer: "Hellosdjkxkn",
    age: 456,
    city: "Ludhiana",
    state: "Hyderabad",
  },
  {
    id: 5,
    uid: 456454654564,
    answer: "Hicdxkjjsal",
    age: 456,
    city: "Amritsar",
    state: "Mumbai",
  },
];

const Pie = ({ data }) => {
  const [recordData, setRecordData] = useState(dataTable);

  const handleFilter = (e) => {
    const newData = dataTable.filter((row) => {
      return row.answer.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecordData(newData);
  };

  return (
    <div className="col-12 mt-5" id="pie">
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
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pie-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-pietab"
                  type="button"
                  role="tab"
                  aria-controls="pills-pietab"
                  aria-selected="true"
                >
                  Pie
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="bar-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-bar-tab"
                  type="button"
                  role="tab"
                  aria-controls="pills-bar-tab"
                  aria-selected="false"
                >
                  Bar
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Table
                </button>
              </li>
            </ul>
            <div className="tab-content mt-0" id="pills-tabContent">
              <div
                className="tab-pane fade"
                id="pills-pietab"
                role="tabpanel"
                aria-labelledby="pie-tab"
              >
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="d-flex justify-content-center align-items-center charts">
                      <PieView />
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

              <div
                className="tab-pane show active fade"
                id="pills-bar-tab"
                role="tabpanel"
                aria-labelledby="bar-profile-tab"
              >
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="d-flex justify-content-center align-items-center charts">
                      <TopAgeViewIns className="img-fluid" />
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
                {/* <img src={DemoChart3} alt="" /> */}
                {/* <Cloud/> */}
              </div>

              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                {/* <ReactTable 
                    columns={columns} 
                    data={dataTable} 
                    defaultPageSize={10}
                    page={page}
                    onPageChange = {newPage => setPage(newPage)}
                    /> */}
                <div className="search-end">
                  <input
                    className="text-start"
                    type="text"
                    placeholder="Search"
                    onChange={handleFilter}
                  />
                </div>
                {/* <DataTable
                  className="charts"
                    columns={columns}
                    data={recordData}
                    selectableRows
                    fixedHeader
                    pagination
                  ></DataTable> */}

                {/* <table className="table datatable mt-4">
                  <thead className="">
                    <tr>
                      <th>UID</th>
                      <th scope="col">Answer</th>
                      <th scope="col">Age</th>
                      <th scope="col">City</th>
                      <th scope="col">State</th>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    <tr>
                      <td>1231854654654</td>
                      <td>Answer will come here</td>
                      <td>3</td>
                      <td>Ludhiana</td>
                      <td>Uttar Pradesh</td>
                    </tr>

                    <tr>
                      <td>445456464568</td>
                      <td>other answer will come here</td>
                      <td>8</td>
                      <td>Lucknow</td>
                      <td>Delhi</td>
                    </tr>

                    <tr>
                      <td>456456464654</td>
                      <td>thierd poll titeel will come here</td>
                      <td>74</td>
                      <td>Jalandhar</td>
                      <td>Punjab</td>
                    </tr>

                    <tr>
                      <td>546546546465</td>
                      <td>dfsdfsdfsdfsdfsdfsd</td>
                      <td>85465</td>
                      <td>Haryana</td>
                      <td>Haryana</td>
                    </tr>

                    <tr>
                      <td>454654546544</td>
                      <td>Hellosdjkxkn</td>
                      <td>456</td>
                      <td>Ludhiana</td>
                      <td>Hyderabad</td>
                    </tr>

                    <tr>
                      <td>456454654564</td>
                      <td>Hicdxkjjsal</td>
                      <td>456</td>
                      <td>Amritsar</td>
                      <td>Mumbai</td>
                    </tr>
                  </tbody>
                </table> */}
                {/* <img src={DemoChart2} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pie;
