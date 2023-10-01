import React, { useState } from "react";
import Questions from "./Questions";

const Targeting = ({ targettingQuestions }) => {

  const tagSuggestion = [
    'Lucknow', 'Pune', 'Haryana', 'Lucknow']

  const geologicalCriteria = [
    { name: "Country", selected: false },
    { name: "Region/State", selected: false },
    { name: "City", selected: true },
  ];

  const maritalStatus = [
    { name: "Gender", selected: false },
    { name: "Age", selected: false },
    { name: "Marital Status", selected: true },
    { name: "Education", selected: false },
    { name: "Employement", selected: false },
    { name: "Career", selected: false },
    { name: "Ethnicity", selected: false },
    { name: "Household Income", selected: false },
    { name: "Number of Employees", selected: false },
    { name: "Organisation Role", selected: false },
    { name: "Number of Employees", selected: false },
    { name: "Organisation Role", selected: false },
    { name: "Number of Employees", selected: false },
    { name: "Organisation Role", selected: false },
    { name: "Number of Employees", selected: false },
    { name: "Organisation Role", selected: false },
  ];

  const tagSuggestionOfDemographicCriteria = [
    { name: 'married' },
    { name: 'helloMarried' },
    { name: 'criteria' },
    { name: 'double-married' },
  ]

  // console.log(targettingQuestions)

  const TagifySuggestions = ["Banglore", "Pune", "Delhi"];
  const [selectedCriteria, setSelectedCriteria] = useState(geologicalCriteria);
  const [selectedTagify, setSelectedTagify] = useState([]);
  const [tags, setTags] = useState([])
  const [selectDemographicTags, setSelectDemographicTags] = useState([])
  const [geologicalCriteriatags, setGeologicalCriteriaTags] = useState([]);
  const [maritalStatusCriteria, setMaritalStatusCriteria] = useState(maritalStatus)

  // Handle Geological Criteria
  const handleGeologicalCriteria = (index) => {
    const updatedCriteria = [...selectedCriteria];
    updatedCriteria[index].selected = !updatedCriteria[index].selected;
    setSelectedCriteria(updatedCriteria);
  };

  //Handle Demographic Criteria
  const handleDemographicCriteria = (index) => {
    const updatedGeologicalCriteria = [...maritalStatusCriteria];
    updatedGeologicalCriteria[index].selected = !updatedGeologicalCriteria[index].selected;
    setMaritalStatusCriteria(updatedGeologicalCriteria);
  };

  const addTags = (e) => {
    if (e.target.value !== "" && e.target.value !== " ") {
      setTags([...tags, e.target.value])
      e.target.value = ""
    }
  }

  const handleRecommendedTagClick = (tag, index) => {
    const updatedCriteria = [...selectedCriteria];
    updatedCriteria[index].tags.push(tag);
    setTags(updatedCriteria);

  }

  const addDemographicTags = (e) => {
    if (e.target.value !== "" && e.target.value !== " ") {
      setSelectDemographicTags([...selectDemographicTags, e.target.value])
      e.target.value = ""
    }
  }

  const handleDemographicTagify = (indexTo) => {
    setSelectDemographicTags(selectDemographicTags.filter((_, index) =>
      index !== indexTo
    ))
  }
  const handleTagify = (indexTo) => {
    setTags(tags.filter((_, index) =>
      index !== indexTo
    ))
  }


  return (
    <div>
      <div className="question-area w-100 lg:flex space-y-8 lg:space-y-0 justify-between">
        <div className="left-side lg:!w-[25rem] !w-full">
          <div className="add-question flex justify-between align-items-center">
            <h4>Poll Questions</h4>
            {/* <div className="plus-btn">
                      <i className="fa-solid fa-plus"></i>
                    </div> */}
          </div>

          {/* <div className="question d-flex justify-content-between align-items-center">
            <div className="que-num">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.30357 4.71756C2.50781 5.81283 2.50781 7.37522 2.50781 10.5C2.50781 13.6248 2.50781 15.1872 3.30357 16.2824C3.56057 16.6362 3.87165 16.9472 4.22537 17.2042C5.32065 18 6.88304 18 10.0078 18C13.1326 18 14.695 18 15.7903 17.2042C16.144 16.9472 16.4551 16.6362 16.7121 16.2824C17.5078 15.1872 17.5078 13.6248 17.5078 10.5C17.5078 7.37522 17.5078 5.81283 16.7121 4.71756C16.4551 4.36383 16.144 4.05276 15.7903 3.79576C14.695 3 13.1326 3 10.0078 3C6.88304 3 5.32065 3 4.22537 3.79576C3.87165 4.05276 3.56057 4.36383 3.30357 4.71756ZM14.6401 8.41689C14.8704 8.15972 14.8485 7.7646 14.5914 7.53435C14.3342 7.30411 13.9391 7.32594 13.7088 7.58311L10.9012 10.7191C10.3323 11.3545 9.94914 11.7802 9.62158 12.0555C9.30953 12.3178 9.12625 12.375 8.96615 12.375C8.80604 12.375 8.62276 12.3178 8.31071 12.0555C7.98315 11.7802 7.60002 11.3545 7.0311 10.7191L6.30679 9.91008C6.07655 9.65291 5.68142 9.63108 5.42425 9.86132C5.16708 10.0916 5.14526 10.4867 5.3755 10.7439L6.13075 11.5874C6.66062 12.1793 7.1026 12.673 7.50644 13.0124C7.93364 13.3715 8.39442 13.625 8.96615 13.625C9.53787 13.625 9.99865 13.3715 10.4259 13.0124C10.8297 12.673 11.2717 12.1793 11.8015 11.5874L14.6401 8.41689Z"
                  fill="white"
                />
              </svg>
              <span>1</span>
            </div>
            <div className="que-w">


            </div>
            <div className="more-options">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div> */}
          <Questions />
        </div>

        <div className="target-criteria-container w-full lg:ml-8 lg:w-[25rem]">
          <div className="criteria-content">
            <div className="criteria d-flex flex-column gap-3">
              <h4>Geolocation criteria</h4>

              {selectedCriteria.map((criteria, index) => (
                <div className="option" key={index}>
                  <input
                    type="checkbox"
                    checked={criteria.selected}
                    onChange={() => handleGeologicalCriteria(index)}
                  />
                  <label htmlFor="checkbox">{criteria.name}</label>
                </div>
              ))}
            </div>

            <div className="criteria d-flex flex-column gap-3 mt-5">
              <h4>Demographic criteria</h4>
              {maritalStatusCriteria.map((item, index) => {
                return (
                  <div className="option" key={index}>
                    <input type="checkbox" checked={item.selected} onChange={() => handleDemographicCriteria(index)} />
                    <label htmlFor="checkbox">{item.name}</label>
                  </div>
                )
              })}
              {/* <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Age</label>
              </div>
              <div className="option">
                <input type="checkbox" defaultChecked />
                <label htmlFor="checkbox">Marital Status</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Education</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Employment</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Career</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Ethnicity</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Household Income</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Number of Employees</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Organisation Role</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Number of Employees</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Organisation Role</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Number of Employees</label>
              </div>
              <div className="option">
                <input type="checkbox" />
                <label htmlFor="checkbox">Organisation Role</label>
              </div> */}
            </div>
          </div>
        </div>

        <div className="targeting-content ">
          <div className="toggle-target-box  ps-8 pe-8 w-100 sm:flex justify-between">
            <div className="toggle-container flex flex-col">
              <div className="toggle-box">
                <span>Advance Poll</span>
                <div className="toggle">
                  <input type="checkbox" id="toggle-btn-advance-poll" />
                  <label htmlFor="toggle-btn-advance-poll"></label>
                </div>
              </div>
              <div className="toggle-box">
                <span>Advance Selection</span>
                <div className="toggle">
                  <input type="checkbox" id="toggle-btn-advance-selection" />
                  <label htmlFor="toggle-btn-advance-selection"></label>
                </div>
              </div>
            </div>
            <div className="toggle-container flex flex-col">
              <div className="toggle-box d-flex align-items-center">
                <span>Number of responses : </span>
                <span className="nor-type ms-2">
                  <strong> Unlimited</strong>
                </span>
              </div>
              <div className="toggle-box">
                <span>Screening Question</span>
                <div className="toggle">
                  <input type="checkbox" id="toggle-btn-screening" />
                  <label htmlFor="toggle-btn-screening"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-container w-100 d-flex  lg:ps-8 lg:pe-8 flex-column gap-4">
            {/* <!-- <div className="row">
                      <div className="col">
                        <div className="card">
                          <div className="demo-heading">
                            <h4>Age Group</h4>
                            <img
                              src="assets/img/poll-selection-icons/up-arrow.svg"
                              alt=""
                            />
                          </div>
                          <div className="demo-options mt-4">
                            <div className="option">
                              <input type="checkbox" name="" id="option-1" />
                              <label for="option-1">13-17</label>
                            </div>
                            <div className="option">
                              <input type="checkbox" name="" id="option-2" />
                              <label for="option-2">18-24</label>
                            </div>
                            <div className="option">
                              <input type="checkbox" name="" id="option-3" />
                              <label for="option-3">24-34</label>
                            </div>
                            <div className="option">
                              <input type="checkbox" name="" id="option-4" />
                              <label for="option-4">Custom Slider</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <div className="demo-heading">
                            <h4>State</h4>
                            <img
                              src="assets/img/poll-selection-icons/up-arrow.svg"
                              alt=""
                            />
                          </div>
                          <div className="demo-options mt-4">
                            <div className="radio-option mb-4 d-flex">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label ps-2"
                                  for="flexRadioDefault1"
                                >
                                  Include
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  className="form-check-label ps-2"
                                  for="flexRadioDefault2"
                                >
                                  Exclude
                                </label>
                              </div>
                            </div>

                            <div
                              className="category-box d-flex align-items-center flex-wrap mb-3"
                            >
                              <div className="category-name">
                                <span>Punjab</span>
                                <div
                                  className="cross-icon d-flex align-items-center justify-content-center"
                                >
                                  <i className="fa-solid fa-xmark"></i>
                                </div>
                              </div>
                              <div className="category-name">
                                <span>Rajasthan</span>
                                <div
                                  className="cross-icon d-flex align-items-center justify-content-center"
                                >
                                  <i className="fa-solid fa-xmark"></i>
                                </div>
                              </div>

                              <div
                                className="add-more-btn d-flex align-items-center gap-2"
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>Add More</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> --> */}

            {/* <!-- <div className="row">
                      <div className="col">
                        <div className="card">
                          <div className="demo-heading">
                            <h4>Gender</h4>
                            <img
                              src="assets/img/poll-selection-icons/up-arrow.svg"
                              alt=""
                            />
                          </div>
                          <div className="demo-options mt-4">
                            <div className="option">
                              <input type="checkbox" name="" id="option1" />
                              <label for="option1">Male</label>
                            </div>
                            <div className="option">
                              <input type="checkbox" name="" id="option2" />
                              <label for="option2">Female</label>
                            </div>
                            <div className="option">
                              <input type="checkbox" name="" id="option3" />
                              <label for="option3">Others</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <div className="demo-heading">
                            <h4>location</h4>
                            <img
                              src="assets/img/poll-selection-icons/up-arrow.svg"
                              alt=""
                            />
                          </div>
                          <div className="demo-options mt-4">
                            <div className="radio-option mb-4 d-flex">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="radio1"
                                />
                                <label
                                  className="form-check-label ps-2"
                                  for="radio1"
                                >
                                  Include
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="radio2"
                                  checked
                                />
                                <label
                                  className="form-check-label ps-2"
                                  for="radio2"
                                >
                                  Exclude
                                </label>
                              </div>
                            </div>

                            <div
                              className="category-box d-flex align-items-center flex-wrap mb-3"
                            >
                              <div className="category-name">
                                <span>Lucknow</span>
                                <div
                                  className="cross-icon d-flex align-items-center justify-content-center"
                                >
                                  <i className="fa-solid fa-xmark"></i>
                                </div>
                              </div>
                              <div className="category-name">
                                <span>Pune</span>
                                <div
                                  className="cross-icon d-flex align-items-center justify-content-center"
                                >
                                  <i className="fa-solid fa-xmark"></i>
                                </div>
                              </div>

                              <div
                                className="add-more-btn d-flex align-items-center gap-2"
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>Add More</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> --> */}

            {selectedCriteria.map((criteria, index) => {
              if (criteria.selected) {
                return (
                  <div className="card" key={index}>
                    <div className="heading d-flex justify-content-between align-items-center">
                      {/* <h4>{selectedCriteria.find((geological)=>geological.selected)?.name}</h4> */}
                      <h4>{criteria.name}</h4>
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => handleGeologicalCriteria(index)}
                      ></i>
                    </div>
                    {/* {selectedTagify.map((option, index) => ( */}


                    <div
                      className="selected-options-container d-flex align-items-center flex-wrap gap-3 mt-4"
                      key={index}
                    >
                      {tags.map((tag, index) => (
                        <div className="selected-option" key={index}>
                          <p>{tag}</p>
                          <i className="fa-solid fa-xmark" onClick={() => handleTagify(index)}></i>
                        </div>
                      ))}
                    </div>
                    {/* ))} */}

                    <div className="search-input mt-4">
                      <input type="text" list="tagSuggestions" placeholder="Search for City" onKeyUp={e => (e.key === 'Enter' ? addTags(e) : null)} />
                      <datalist id="tagSuggestions">
                        {tagSuggestion.map((tag, index) => (
                          <option key={index} value={tag} onClick={() => handleRecommendedTagClick(tag, index)} ></option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                );
              }
            })}

            {maritalStatusCriteria.map((items, index) => {
              if (items.selected) {
                return (
                  <div className="card" key={index}>
                    <div className="heading d-flex justify-content-between align-items-center">
                      <h4>{items.name}</h4>
                      <i className="fa-solid fa-xmark" onClick={() => handleDemographicCriteria(index)}></i>
                    </div>
                    <div className="selected-options-container d-flex align-items-center flex-wrap gap-3 mt-4">
                      {selectDemographicTags.map((item, index) => {
                        return (
                          <div className="selected-option">
                            <p>{item}</p>
                            <i className="fa-solid fa-xmark" onClick={() => handleDemographicTagify(index)}></i>
                          </div>
                        )
                      })}
                    </div>

                    <div className="search-input mt-4">
                      <input type="text" list="tagSuggestions " placeholder="Search for Marital Status" onKeyUp={e => (e.key === 'Enter' ? addDemographicTags(e) : null)} />
                      <datalist id='tagSuggestions'>
                        {
                          tagSuggestionOfDemographicCriteria.map((tag, index) => (
                            <option key={index} onKeyUp={e => e.key === 'Enter' ? addDemographicTags(e) : null} value={tag}></option>
                          ))
                        }
                      </datalist>
                    </div>
                  </div>
                )
              }
            })}
            {/* <div className="card">
              <div className="heading d-flex justify-content-between align-items-center">
                <h4>Marital Status</h4>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="selected-options-container d-flex align-items-center flex-wrap gap-3 mt-4">
                <div className="selected-option">
                  <p>Married</p>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="selected-option">
                  <p>Divorced</p>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="selected-option">
                  <p>Widowed</p>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="selected-option">
                  <p>Single</p>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>

              <div className="search-input mt-4">
                <input type="text" placeholder="Search for Marital Status" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeting;
