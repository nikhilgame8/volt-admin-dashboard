import React, { Fragment, useEffect, useRef, useState } from "react";
import { LuFilter } from "react-icons/lu";
import Select, { useStateManager } from "react-select";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import FilterModal from "../FilterModal/FilterModal";
import { BiSolidDownload } from "react-icons/bi";
import { RiExpandUpDownFill } from "react-icons/ri";
import pauseButton from "../../assets/img/Pause Circle.svg";
import playButton from "../../assets/img/Play Circle.svg";
import axios from "axios";

// import '../../css/scss/table.scss'

const AllPolls = ({ loader }) => {
  // const item = [
  //   {
  //     index: 0,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 1,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 2000,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 2,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 3,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 4,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 5,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  //   {
  //     index: 6,
  //     title: "Poll Title will come here",
  //     categories: "Sports",
  //     Questions: 3,
  //     Responses: 200,
  //     CR: "50%",
  //     Created: "12-Jun-2023",
  //     ending: "12-Jun-2023",
  //   },
  // ];

  const [data, setData] = useState([]); // Dummy data for the table
  const [allData, setAllData] = useState([]); // Dummy data for the date range
  const [searchQuery, setSearchQuery] = useState(""); // Search lls
  const [selectedOption, setSelectedOption] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedValues, setSelectedValues] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  // const [play, setPlay] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false); // Show More Options
  const [currentOpenMoreOptions, setCurrentOpenMoreOptions] = useState(false)

  //sort Usestate
  const [sortBy, setSortBy] = useState({ column: '', order: '' });


  const fetchData = () => {
    axios
      .get(`https://64b52f36f3dbab5a95c6e198.mockapi.io/filterData`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setAllData(res.data);
      });
  }
  useEffect(() => {
    fetchData()
  }, []);

  const options = [
    { value: "download", label: "Download" },
    { value: "pause", label: "Pause" },
    { value: "share", label: "Share" },
    { value: "edit", label: "Edit" },
    { value: "duplicate", label: "Duplicate" },
  ];

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedValues((prevValu) => prevValu + 1);
    } else {
      setSelectedValues((prevValu) => prevValu - 1);
    }
  };

  //CheckBox Handle
  const handleCheckbox = () => {
    setSelectAll(!selectAll);
    if (selectAll) {
      // console.log(true);
      setSelectedValues(0);
      setShowCheckbox(false);
    } else {
      setPrevValue(selectedValues);
      // console.log(false);
      setSelectedValues(0);
      setShowCheckbox(true);
    }
  };

  const handleHover = () => {
    if (!selectAll) {
      setShowCheckbox(true);
    }
  };

  const handleLeave = (e) => {
    if (!selectAll && selectedValues === 0) {
      setShowCheckbox(false);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //Targeting Pagination

  // GO to next Page by clicking on next
  const handleNextPage = () => {
    setCurrentPage(nextPage => nextPage + 1)
  }
  // GO to previous Page by clicking on previous
  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
  }

  //select
  const handleSelect = (event) => {
    console.log(event.key)
  }

  const handlePageChange = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageNumber = [];
  const totalPosts = filteredData.length;
  // console.log(totalPosts);

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstPage, indexOfLastPage);

  // console.log(Math.ceil(totalPosts / itemsPerPage));
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  // console.log(pageNumber)

  const paginate = (number) => {
    setCurrentPage(number);
  };

  // Filter Section

  const handleFilter = () => {
    setShowFilterModal(true);
  };

  const handleCloseModal = () => {
    setShowFilterModal(false);
  };

  // Search something

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Show more Options

  const handleMoreOptions = (id) => {
    handleReset()
    console.log(currentOpenMoreOptions)
    console.log(moreOptions)

    if (currentOpenMoreOptions) {
      // handleReset()
      setCurrentOpenMoreOptions(false)

      if (moreOptions[id]) {
        handleReset()
      }
      else {
        setMoreOptions((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
        setCurrentOpenMoreOptions(true)
      }

    }
    else {
      setMoreOptions((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
      setCurrentOpenMoreOptions(true)
    }
  };

  const handleReset = () => {
    setMoreOptions(false)

  }

  //Sorting in Table
  // const sortInAscrendingOrder = currentItems.sort()
  const sortItems = () => {
    fetchData()
  }

  return (
    <div id="polls">
      <div className="col-12 mt-5">
        <div className="card trending-poll border-4 border-white">
          <div className="card-body">
            <div className="card-title-header flex justify-between gap-6 md:gap-0 items-center flex-wrap">
              <h2 className="card-title all-polls-text-style">All Polls</h2>
              <div className="flex gap-4 justify-center flex-wrap items-center">
                {/* <select
                  className="select-option my-2"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="" disabled hidden>
                    Bulk Actions{" "}
                    {selectedValues > 0 ? `(${selectedValues})` : ""}
                  </option>{" "}
                  <option value="Option1 my-2">Download</option>
                  <option value="Option2 my-2">Pause</option>
                  <option value="Option3 my-2">Share</option>
                  <option value="Option3 my-2">Edit</option>
                  <option value="Option3 my-2">Duplicate</option>
                </select> */}
                {/* <Select className="select-option" options={options}/> */}

                <form
                  className="search-form ml-12 flex items-center"
                  onClick={handleSubmit}
                >
                  <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                  </button>
                  <input
                    type="text"
                    name="query"
                    placeholder="Search Polls"
                    title="Enter search keyword"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>

                <div className="flex items-center gap-4">
                  <button
                    className="border d-flex select-option gap-3 px-3"
                    onClick={handleFilter}
                  >
                    <span className="">
                      <LuFilter />
                    </span>
                    Filters
                  </button>
                  <button className="border-color text-white d-flex select-option px-3">
                    + Add Polls
                  </button>
                </div>
              </div>
            </div>

            <FilterModal
              data={data}
              allData={allData}
              setData={setData}
              isOpen={showFilterModal}
              onClose={handleCloseModal}
            />
            <div className="overflow-auto">
              <table className="table custom-thead datatable mt-4 w-100">
                <thead className="text-center">
                  <tr className="poll-section">
                    <th style={{ backgroundColor: "none" }}>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleCheckbox}
                      />
                    </th>
                    <th scope="col"></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Poll Title <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Categories <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Questions <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Responses <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> CR <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Created <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> Ending <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                    <th scope="col" ><div className="flex items-center justify-center gap-2 whitespace-nowrap"> More Actions <RiExpandUpDownFill onClick={sortItems} className="cursor-pointer" /></div></th>
                  </tr>
                </thead>
                <tbody className="border-top-0 text-center">
                  {currentItems
                    .filter((data) =>
                      data.title.toLowerCase().includes(searchQuery)
                    )
                    .map((items, index) => {
                      let createddate = new Date(items.createdAt);
                      let endingDate = new Date(items.endingDate);
                      return (
                        <Fragment key={index}>
                          <tr className="gap-row"></tr>

                          <tr
                            className={`align-middle `}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            <th scope="row">
                              <input
                                type="checkbox"
                                onChange={handleCheckboxChange}
                              />
                            </th>
                            <td>
                              {items.play ? (
                                <img src={pauseButton} alt="" />
                              ) : (
                                <img src={playButton} alt="" />
                              )}
                            </td>
                            <td>{items.title}</td>
                            <td>
                              <span className="category-color whitespace-nowrap">
                                {items.categories}
                              </span>
                            </td>
                            <td>{items.questions}</td>
                            <td>{items.response}</td>
                            <td>{items.cr}</td>
                            <td>{createddate.toLocaleDateString()}</td>
                            <td>{endingDate.toLocaleDateString()}</td>
                            <td>
                              <div className="more-options">
                                <button
                                  className="border-0 bg-transparent dots "
                                  onClick={() => {
                                    handleMoreOptions(items.id);
                                  }}
                                >
                                  {/* <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span> */}
                                  . . .
                                </button>
                                {moreOptions[items.id] && (
                                  <div className="options-container">
                                    <ul className="options-list">
                                      <li>Download</li>
                                      <li>Rename</li>
                                      <li>Pause</li>
                                      <li>Share</li>
                                      <li>Analytics</li>
                                      <li>Edit</li>
                                      <li>Duplicate</li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* </div> */}
            {/* Pagination */}
            <div className="pagination">
              <h4>Rows per page :</h4>
              <select
                className="h5"
                value={itemsPerPage}
                name=""
                id=""
                onChange={handlePageChange}
              >
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              {/* {pageNumber.map((number) => (
                <li
                key={number}
                  className="flex p-2 pr-3 pl-3 text-white hover:bg-blue-500 rounded-full"
                  >
                  <button onClick={() => paginate(number)}>{number}</button>
                </li>
              ))} */}

              <h4>{currentPage} - {Math.ceil(totalPosts / itemsPerPage)} of {itemsPerPage}</h4>
              <button className="border-0" onClick={handlePreviousPage} disabled={currentPage === 1}>&lt;</button>
              <button className="border-0" onClick={handleNextPage} disabled={indexOfLastPage >= data.length}>&gt;</button>

            </div>
          </div>
        </div>
      </div>
      <div className="center-container">
        {selectedValues > 1 && (
          <div className="modal-container">
            <p>{selectedValues} tasks selected</p>
            <p>
              <BiSolidDownload />
            </p>
            <p>
              <BsFillPlayFill />
            </p>
            <p>
              <BsFillPauseFill />
            </p>
          </div>
        )}
      </div>
      {loader && <div id="preloader"></div>}
    </div>
  );
};

export default AllPolls;
