import React, { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import Questions from "./Questions";
import Loader from "../UI/Loader";
import IphoneFrame from "../../assets/img/Iphoneframe.png";
import fullLogo from "../../assets/img/full-logo.svg";
import Targeting from "./Targeting";

const CreatePoll = ({ loader, handlePollTitle }) => {
  const option = [
    {
      value: "",
      text: "--Choose an option--",
    },
    {
      value: "apple",
      text: "Apple",
    },
    {
      value: "banana",
      text: "Banana",
    },
    {
      value: "kiwi",
      text: "Kiwi",
    },
  ];

  const [dailyPollStartDate, setDailyPollStartDate] =
    useState("2023-07-11T10:30");
  // const [openModalByDefault, setOpenModalByDefault] = useState(false)
  const [dailyPollEndDate, setDailyPollEndDate] = useState("2023-07-15T18:30");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  //YES,NO
  const [showYesNo, setShowYesNo] = useState(false);
  const [choiceA, setChoiceA] = useState("Yes");
  const [choiceB, setChoiceB] = useState("No");
  //SingleSelection
  const [singleSelection, setSingleSelection] = useState(false);
  const [singleSelectionChoice, setSingleSelectionChoice] = useState([
    { id: "A", value: "" },
    { id: "B", value: "" },
  ]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  //Multi Selection
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiSelectionChoice, setMultiSelectionChoice] = useState([
    { id: "A", value: "" },
    { id: "B", value: "" },
  ]);

  // Dropdown
  const [dropdownSelection, setDropdownSelection] = useState(false);
  const [selectOption, setSelectOption] = useState(option[0].text);

  const [other, setOther] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleDailyStartDate = (e) => {
    setDailyPollStartDate(e.target.value);
  };
  const handleDailyEndDate = (e) => {
    setDailyPollEndDate(e.target.value);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleQuestion = (questionText) => {
    setQuestions((prevquestion) => [...prevquestion, questionText]);
  };

  //Yes No Add the question
  useEffect(()=>{
    setShowCreateModal(true)
  },[])

  const handleAddYesNo = () => {
    const newQuestionText = "Your Question will show here";
    handleQuestion(newQuestionText);
    setShowYesNo(true);
    setMultiSelection(false);
    setSingleSelection(false);
    setOther(false);
  };

  // Single Selection

  const handleAddSingleSelection = () => {
    const newQuestionText = "Your Question will show here";
    handleQuestion(newQuestionText);
    setSingleSelection(true);
    setMultiSelection(false);
    setOther(false);
    setShowYesNo(false);
  };

  //MultiSelection
  const handleAddMultipleSelection = () => {
    const newQuestionText = "Your Question will show here";
    handleQuestion(newQuestionText);
    setMultiSelection(true);
    setSingleSelection(false);
    setOther(false);
    setShowYesNo(false);
  };

  //Dropdown Selection

  const handleAddDropdownSelection = () => {
    const newQuestionText = "Your Question will show here";
    handleQuestion(newQuestionText);
    setDropdownSelection(true);
    setMultiSelection(false);
    setSingleSelection(false);
    setOther(false);
    setShowYesNo(false);
  };

  //Delete the question
  const handleDeleteQuestions = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  // Duplicate the question
  const handleDuplicateQuestions = (index) => {
    const duplicateQuestion = questions[index];
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index + 1, 0, duplicateQuestion);
    setQuestions(updatedQuestions);
  };

  // const handleMoreOptions = (id) => {
  //   handleReset()
  //   console.log(currentOpenMoreOptions)
  //   // console.log(moreOptions)

  //   if(currentOpenMoreOptions){
  //     // handleReset()
  //   setCurrentOpenMoreOptions(false)

  //   if(showMoreOptions[id]){
  //     handleReset()
  //     }
  //     else{
  //       setShowMoreOptions((prevState) => ({
  //         ...prevState,
  //         [id]: !prevState[id],
  //       }));
  //       setCurrentOpenMoreOptions(true)
  //     }

  //   }
  //   else{
  //   setShowMoreOptions((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  //   setCurrentOpenMoreOptions(true)
  // }
  // };

  // const handleReset = () =>{
  //   setShowMoreOptions(false)

  // }

  //Add Tags in Category

  const selected = (tags) => {
    setSelectedTags(tags);
    console.log(tags);
  };

  // const onRemoveTag = (tags) =>{
  //   setSelectedTags(tags)
  // }

  const removeTags = (indexTo) => {
    setSelectedTags(selectedTags.filter((_, index) => index !== indexTo));
  };

  //SingleSelectionChoiceChange

  const handleSingleChoiceSelection = (id, value) => {
    const updateChoice = singleSelectionChoice.map((choice) => {
      return choice.id === id ? { ...choice, value } : choice;
    });
    setSingleSelectionChoice(updateChoice);
  };

  const addSingleChoice = () => {
    setSingleSelectionChoice([
      ...singleSelectionChoice,
      { id: String.fromCharCode(singleSelectionChoice.length + 65), value: "" },
    ]);
  };

  const showRemove = (choice) => {
    if (singleSelectionChoice.length === 1) {
      return;
    }
    setShowRemoveButton(choice);
  };
  const handleRemove = (indexTo) => {
    if (singleSelectionChoice.length === 1) {
      return;
    }
    const filteredChoice = singleSelectionChoice.filter(
      (choice) => choice.id !== indexTo
    );

    const updatedChoices = filteredChoice.map((choice, index) => ({
      ...choice,
      id: String.fromCharCode(65 + index),
    }));

    setSingleSelectionChoice(updatedChoices);
    // else{
    // }
  };

  //MultiSelection
  const handleMultiChoiceSelection = (id, value) => {
    const updateChoice = multiSelectionChoice.map((choice) => {
      return choice.id === id ? { ...choice, value } : choice;
    });
    setMultiSelectionChoice(updateChoice);
  };

  const showMultiRemove = (choice) => {
    if (multiSelectionChoice.length === 1) {
      return;
    }
    setShowRemoveButton(choice);
  };
  const handleMultiRemove = (indexTo) => {
    if (multiSelectionChoice.length === 1) {
      return;
    }
    // setMultiSelectionChoice(multiSelectionChoice.filter((choice) => choice.id !== indexTo));
    const filteredChoice = multiSelectionChoice.filter(
      (choice) => choice.id !== indexTo
    );

    const updatedChoices = filteredChoice.map((choice, index) => ({
      ...choice,
      id: String.fromCharCode(65 + index),
    }));

    setMultiSelectionChoice(updatedChoices);
    // else{
    // }
  };

  const addMultiChoice = () => {
    setMultiSelectionChoice([
      ...multiSelectionChoice,
      { id: String.fromCharCode(multiSelectionChoice.length + 65), value: "" },
    ]);
  };

  //Selected
  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setSelectOption(e.target.value);
  };

  return (
    <div>
      <Loader />
      {showCreateModal && <CreateModal />}
      <main id="main" className="main">
        <section className="section dashboard create-poll-page">
          <div className="tabs">
            <ul className="nav nav-tabs justify-content-center align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  <h4>Create</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>Targeting</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>Schedule</h4>
                </a>
              </li>
            </ul>

            <hr className="border my-2" />

            {/* <!-- Tab Content --> */}
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                {/* <!-- Question Section --> */}

                <div className="question-area h-full lg:h-[70vh] w-100 lg:flex gap-8 flex-row space-y-8 lg:space-y-0 items-start justify-between">
                  <div className="left-side lg:!w-[25rem] !w-full">
                    <div className="add-question d-flex justify-content-between align-items-center">
                      <h4>Poll Questions</h4>
                      <button
                        className="plus-btn"
                        onClick={handleOpenCreateModal}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="top-question">
                      {questions.map((questionText, index) => {
                        return (
                          <Questions
                            key={index}
                            index={index}
                            questionText={questionText}
                            onDelete={() => handleDeleteQuestions(index)}
                            onDuplicate={() => handleDuplicateQuestions(index)}
                            // pollName={pollName}
                            // setPollName={setPollName}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* <!-- Create Poll Section --> */}

                  <div className="create-poll-mid-container mt-8 mx-0 mb-0 lg:m-8">
                    <div className="create-poll-container h-full lg:h-[70vh]">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="create-poll-question d-flex justify-content-center flex-column">
                            {/* other */}
                            {other && (
                              <div className="create-question">
                                <div className="type-que">
                                  <input
                                    type="text"
                                    placeholder="1 &#10144; Type Your Question Here"
                                    className="form-control question"
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Write the Descrition Here (Optional)"
                                  className="form-control description"
                                />

                                <div className="choice-box mt-5">
                                  <div className="input-group">
                                    <span className="input-group-text">A</span>
                                    <input
                                      type="text"
                                      placeholder="Choice 1"
                                      className="form-control choice"
                                    />
                                  </div>
                                  <div className="input-group mt-3">
                                    <span className="input-group-text">B</span>
                                    <input
                                      type="text"
                                      placeholder="Choice 2"
                                      className="form-control choice"
                                    />
                                  </div>
                                </div>

                                <div className="add-choice-btn">
                                  <button type="button">Add Choice</button>
                                </div>
                              </div>
                            )}

                            {/* Yes/No */}
                            {showYesNo && (
                              <div className="create-question">
                                <div className="type-que">
                                  <input
                                    type="text"
                                    placeholder="1 &#10144; Type Your Question Here"
                                    className="form-control question"
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Write the Descrition Here (Optional)"
                                  className="form-control description"
                                />

                                <div className="choice-box mt-5">
                                  <div className="input-group">
                                    {/* <span className="input-group-text">A</span> */}
                                    <input
                                      type="radio"
                                      // placeholder="Choice 1"
                                      className="input-group-text"
                                      name="choice"
                                      value={choiceA}
                                      onChange={(e) =>
                                        setChoiceA(e.target.value)
                                      }
                                      // onInput={e=>console.log(e.target.innerText)}
                                    />
                                    <div
                                      contentEditable
                                      className="form-control choice"
                                      // onInput={e=>setChoiceA(e.target.innerText)}
                                    >
                                      {choiceA}
                                    </div>
                                  </div>
                                  <div className="input-group mt-3">
                                    {/* <span className="input-group-text">B</span> */}
                                    <input
                                      type="radio"
                                      // placeholder="Choice 2"
                                      className="input-group-text"
                                      name="choice"
                                      value={choiceB}
                                      onChange={(e) =>
                                        setChoiceB(e.target.value)
                                      }
                                    />
                                    <div
                                      contentEditable
                                      className="form-control choice"
                                      // onInput={(e)=>setChoiceB(e.target.innerText)}
                                    >
                                      {choiceB}
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="add-choice-btn">
                                <button type="button">Add Choice</button>
                              </div> */}
                              </div>
                            )}

                            {/* Single Selection */}
                            {singleSelection && (
                              <div className="create-question">
                                <div className="type-que">
                                  <input
                                    type="text"
                                    placeholder="1 &#10144; Type Your Question Here"
                                    className="form-control question"
                                    // value={singleSelection}
                                    // onChange={e => setSingleSelection(e.target.value)}
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Write the Descrition Here (Optional)"
                                  className="form-control description"
                                />

                                <div className="choice-box mt-5">
                                  {singleSelectionChoice.map((choice) => {
                                    return (
                                      <div
                                        className="input-group mt-4"
                                        key={choice.id}
                                        onMouseEnter={() =>
                                          showRemove(choice.id)
                                        }
                                        onMouseLeave={() =>
                                          setShowRemoveButton(null)
                                        }
                                      >
                                        <span className="input-group-text">
                                          {choice.id}
                                        </span>
                                        <input
                                          type="text"
                                          placeholder={`Choice ${choice.id}`}
                                          name="single"
                                          value={choice.value}
                                          onChange={(e) =>
                                            handleSingleChoiceSelection(
                                              choice.id,
                                              e.target.value
                                            )
                                          }
                                          className="form-control choice"
                                        />
                                        {showRemoveButton === choice.id && (
                                          <div
                                            className="input-remove"
                                            onClick={() =>
                                              handleRemove(choice.id)
                                            }
                                          >
                                            x
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="add-choice-btn">
                                  <button
                                    type="button"
                                    onClick={addSingleChoice}
                                  >
                                    Add Choice
                                  </button>
                                </div>
                              </div>
                            )}
                            {/* MultiSelection */}
                            {multiSelection && (
                              <div className="create-question">
                                <div className="type-que">
                                  <input
                                    type="text"
                                    placeholder="1 &#10144; Type Your Question Here"
                                    className="form-control question"
                                    // value={singleSelection}
                                    // onChange={e => setSingleSelection(e.target.value)}
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Write the Descrition Here (Optional)"
                                  className="form-control description"
                                />

                                <div className="choice-box mt-5">
                                  {multiSelectionChoice.map((choice) => {
                                    return (
                                      <div
                                        className="input-group mt-4"
                                        key={choice.id}
                                        onMouseEnter={() =>
                                          showMultiRemove(choice.id)
                                        }
                                        onMouseLeave={() =>
                                          setShowRemoveButton(null)
                                        }
                                      >
                                        <span className="input-group-text">
                                          {choice.id}
                                        </span>
                                        <input
                                          type="text"
                                          placeholder={`Choice ${choice.id}`}
                                          name="single"
                                          value={choice.value}
                                          onChange={(e) =>
                                            handleMultiChoiceSelection(
                                              choice.id,
                                              e.target.value
                                            )
                                          }
                                          className="form-control choice"
                                        />
                                        {showRemoveButton === choice.id && (
                                          <div
                                            className="input-remove"
                                            onClick={() =>
                                              handleMultiRemove(choice.id)
                                            }
                                          >
                                            x
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="add-choice-btn">
                                  <button
                                    type="button"
                                    onClick={addMultiChoice}
                                  >
                                    Add Choice
                                  </button>
                                </div>
                              </div>
                            )}
                            {/* Dropdown */}
                            {dropdownSelection && (
                              <div className="create-question">
                                <div className="type-que">
                                  <input
                                    type="text"
                                    placeholder="1 &#10144; Type Your Question Here"
                                    className="form-control question"
                                    // value={singleSelection}
                                    // onChange={e => setSingleSelection(e.target.value)}
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Write the Descrition Here (Optional)"
                                  className="form-control description"
                                />

                                <div className="choice-select-box mt-5">
                                  <div className="input-group mt-4 ">
                                    <select
                                      className=" form-control select-choice"
                                      value={selectOption}
                                      id=""
                                      onChange={handleOptionChange}
                                    >
                                      {option.map((text) => {
                                        return (
                                          <option
                                            className=""
                                            key={text.value}
                                            value={text.value}
                                          >
                                            {text.text}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <div>
                                      <div className="input-down-chevron">
                                        <i className="bi bi-chevron-down"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="add-choice-btn">
                                  <button
                                    type="button"
                                    onClick={addMultiChoice}
                                  >
                                    Add Choice
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="image-banner">
                            {/* <div className="iphone-image"></div> */}
                            <img
                              className="iphone-image"
                              src={IphoneFrame}
                              alt=""
                            />
                            <div className="content-inside-img">
                              <div className="context">
                                <img
                                  className="full-logo"
                                  src={fullLogo}
                                  alt=""
                                />
                                <div className="daily-poll">
                                  <p>daily Poll</p>
                                  <p>20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Setting --> */}
                  <div>
                    <div className="card settings-card !w-full lg:!w-[25rem]">
                      <div className="card-header text-center">
                        <h4>Settings</h4>
                      </div>
                      <div className="card-body">
                        <div className="content-box settings mt-3">
                          <div className="required d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <span className="settings-option">Required</span>
                              <div className="toggle">
                                <input
                                  type="checkbox"
                                  id="toggle-btn-required"
                                />
                                <label htmlFor="toggle-btn-required"></label>
                              </div>
                            </div>
                          </div>

                          <div className="polls-type d-flex align-items-center justify-content-between mt-3">
                            <h4>Polls Type</h4>
                            <div className="selction d-flex align-items-center gap-2">
                              <div className="icon">
                                <i className="fa-regular fa-square-check"></i>
                              </div>
                              <span>Multi Selection</span>
                            </div>
                            <div className="arrow-icon">
                              <i className="fa-solid fa-angle-down"></i>
                            </div>
                          </div>

                          <div className="option-type mt-3">
                            <div className="option-type-header d-flex align-items-center justify-content-between">
                              <h4>Options Type</h4>

                              <div className="arrow-icon">
                                <i className="fa-solid fa-angle-up"></i>
                              </div>
                            </div>

                            <div className="selection-container d-flex align-items-center flex-wrap gap-2 mt-3">
                              <div className="selction d-flex align-items-center gap-2">
                                <div className="icon">
                                  <i className="fa-regular fa-square-check"></i>
                                </div>
                                <span>Only Text</span>
                              </div>
                              <div className="selction d-flex align-items-center gap-2">
                                <div className="icon">
                                  <i className="fa-regular fa-square-check"></i>
                                </div>
                                <span>Only Image</span>
                              </div>
                              <div className="selction d-flex align-items-center gap-2">
                                <div className="icon">
                                  <i className="fa-regular fa-square-check"></i>
                                </div>
                                <span>Icon with Text</span>
                              </div>
                              <div className="selction d-flex align-items-center gap-2">
                                <div className="icon">
                                  <i className="fa-regular fa-square-check"></i>
                                </div>
                                <span>Image with Text</span>
                              </div>
                            </div>
                          </div>

                          <div className="required d-flex flex-column mt-4">
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <span className="settings-option">
                                Randomized
                              </span>
                              <div className="toggle">
                                <input
                                  type="checkbox"
                                  id="toggle-btn-required"
                                />
                                <label htmlFor="toggle-btn-required"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="card settings-card !w-full lg:!w-[25rem] mt-4">
                      <div className="card-header text-center">
                        <h4>Category</h4>
                      </div>
                      <div className="card-body">
                        <div className="content-box settings mt-3">
                          <div className="option-type mt-3">
                            <div className="option-type-header category-section-wrap ml-2 d-flex align-items-center">
                              {selectedTags.map((selected, index) => {
                                return (
                                  <div key={index} className="category-section">
                                    <div>{selected}</div>
                                    <div
                                      className="cross-icon d-flex align-items-center justify-content-center"
                                      onClick={() => removeTags(index)}
                                    >
                                      <i className="fa-solid fa-xmark"></i>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End 1st Tab--> */}
              {/* <div className="tab-pane active show" id="tab-2"> */}
              <div className="tab-pane show" id="tab-2">

              <Targeting targettingQuestions={questions}/>
              </div>
              {/* <!-- End 2nd Tab --> */}

              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="question-area">
                      <div className="add-question d-flex justify-content-between align-items-center">
                        <h4>Poll Questions</h4>
                        <div className="plus-btn">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>

                      <div className="question d-flex justify-content-between align-items-center">
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
                        <p>Your Question will show</p>
                        <div className="more-options">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="schedule-container">
                      <div className="toggle-box d-flex justify-content-between w-50 py-3">
                        <span>Its Daily Poll</span>
                        <div className="toggle">
                          <input
                            type="checkbox"
                            id="toggle-btn-schedule-daily-poll"
                          />
                          <label htmlFor="toggle-btn-schedule-daily-poll"></label>
                        </div>
                      </div>
                      <div className="date-time-picker d-flex mt-5 gap-5">
                        <div className="date-time d-flex flex-column">
                          <label htmlFor="start-date-time">
                            Start Date and Time
                          </label>
                          <input
                            type="datetime-local"
                            id="start-date-time"
                            value={dailyPollStartDate}
                            className="format-date"
                            onChange={handleDailyStartDate}
                          />
                        </div>
                        <div className="date-time d-flex flex-column">
                          <label htmlFor="end-date-time">
                            End Date and Time
                          </label>
                          <input
                            type="datetime-local"
                            id="end-date-time"
                            value={dailyPollEndDate}
                            className="format-date"
                            onChange={handleDailyEndDate}
                          />
                        </div>
                      </div>

                      <div className="dynamic-rewards">
                        <h3>Dynamic Reward in Coins</h3>
                        <div className="min-max-value d-flex mt-5">
                          <div className="value d-flex align-items-center gap-4">
                            <label htmlFor="min-value">Min</label>
                            <input
                              type="number"
                              id="min-value"
                              name="min-value"
                              min="10"
                              placeholder="10"
                            />
                          </div>
                          <div className="value d-flex align-items-center gap-4">
                            <label htmlFor="min-value">Max</label>
                            <input
                              type="number"
                              id="max-value"
                              name="max-value"
                              max="100"
                              placeholder="100"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-area">
                        <label htmlFor="message">Custom Message</label>
                        <textarea
                          id="message"
                          name="message"
                          className="mt-4"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="create-poll-btn">
                        Publish
                      </button>
                    </div>
                    <div className="polls-preview">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CreateModal
              isOpen={showCreateModal}
              onClose={handleCloseCreateModal}
              handleAddYesNo={handleAddYesNo}
              handleAddSingleSelection={handleAddSingleSelection}
              setShowCreateModal={setShowCreateModal}
              selected={selected}
              handlePollTitle={handlePollTitle}
              handleAddMultipleSelection={handleAddMultipleSelection}
              handleAddDropdownSelection={handleAddDropdownSelection}
              // onRemoveTag={(e)=>onRemoveTag(e)}
            />
          </div>
        </section>

        {/* <!-- End Page Title --> */}
      </main>

      {loader && <div id="preloader"></div>}

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
    </div>
  );
};

export default CreatePoll;
