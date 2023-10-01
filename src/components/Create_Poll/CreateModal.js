import React, { useCallback, useEffect, useState } from "react";
import YesNo from "../../assets/img/poll-selection-icons/yes-no-icon.svg";
import SingleSelection from "../../assets/img/poll-selection-icons/single-selection-icon.svg";
import MultiSelection from "../../assets/img/poll-selection-icons/multi-selection.svg";
import DropdownIcon from "../../assets/img/poll-selection-icons/dropdown-icon.svg";
import SingleWord from "../../assets/img/poll-selection-icons/single-word-icon.svg";
import SingleLine from "../../assets/img/poll-selection-icons/single-line-icon.svg";
import DateIcon from "../../assets/img/poll-selection-icons/date-icon.svg";
import TimeIcon from "../../assets/img/poll-selection-icons/time-icon.svg";
import DateTimeIcon from "../../assets/img/poll-selection-icons/date-time-icon.svg";
import RatingIcon from "../../assets/img/poll-selection-icons/rating-icon.svg";
import MultiLine from "../../assets/img/poll-selection-icons/multi-line-icon.svg";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { RiCloseCircleFill } from "react-icons/ri";
// import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
// import Tagify from "@yaireo/tagify";


const CreateModal = ({
  isOpen,
  onClose,
  handleAddYesNo,
  setShowCreateModal,
  handlePollTitle,
  selected,
  handleAddSingleSelection,
  handleAddMultipleSelection,
  handleAddDropdownSelection
}) => {
  const tagSuggestions = [
    "poll Questions", "Simple", "Multiple", "Dropdown", "Yes/No"
    // Add more items as needed
  ];


  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showPollNaming, setShowPollNaming] = useState(true);
  const [pollName, setPollName] = useState("");
  const [tags, setTags] = useState([]);

  console.log(true);
  const handleDialogBox = () => {
    setShowDialogBox(true);
    console.log("click");
    setShowPollNaming(false);
    setPollName(pollName);
  };

  const handleClickToAddYesNo = () => {
    handleAddYesNo();
    setShowCreateModal(false);
    setShowDialogBox(true);
    setShowPollNaming(false);
  };
  const handleClickToAddMultipleQuestion = () => {
    handleAddMultipleSelection();
    setShowCreateModal(false);
    setShowDialogBox(true);
    setShowPollNaming(false);
  };

  const handleClickToAddSingleSelecion = () => {
    handleAddSingleSelection();
    setShowCreateModal(false);
    setShowDialogBox(true);
    setShowPollNaming(false);
  };
  const handleClickToAddDropdownSelection = () => {
    handleAddDropdownSelection();
    setShowCreateModal(false);
    setShowDialogBox(true);
    setShowPollNaming(false);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    // setShowDialogBox(!showDialogBox);
    // setShowPollNaming(false);
  };

  const handlePollName = (e) => {
    setPollName(e.target.value);
    handlePollTitle(e.target.value);
  };

  //Add Tags
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selected([...tags, event.target.value])
      event.target.value = "";
    }
  };

  // useEffect(()=>{
  //   selected(tags);
  // },[tags, selected])
  // console.log(tags);

  //Remove Tags
  const removeTags = (indexTo) => {
    setTags(tags.filter((_, index) => index !== indexTo));
    selected(tags.filter((_, index) => index !== indexTo))
    // onRemoveTag(indexTo)
  };

  return (
    <div id="create-poll-modal">
      <div
        className={`modal modal-create-poll ${isOpen ? "show" : ""} fade`}
        id="createPoll"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="createPollLabel"
      // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {showPollNaming && (
            <div
              className={`modal-content ${showPollNaming ? "poll-naming" : "customHidden"
                }`}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="createPollLabel">
                  Bring Your New <span>Poll to Life</span>
                </h5>
                <button
                  type="button"
                  // className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                  aria-label="Close"
                > <RiCloseCircleFill className="w-10 h-10" /> </button>
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
                      value={pollName}
                      onChange={handlePollName}
                      aria-label="Poll name"
                    />
                  </div>
                </div>
                <div className="second-field">
                  <label htmlFor="poll-category" className="form-label">
                    Select the Category of the poll
                  </label>

                  {/* <Tags
      tagifyRef={tagifyRef} // optional Ref object for the Tagify instance itself, to get access to  inner-methods
      settings={settings}  // tagify settings object
      defaultValue="a,b,c"
      {...tagifyProps}   // dynamic props such as "loading", "showDropdown:'abc'", "value"
      onChange={onChange}
    /> */}
                  <div className="category-box d-flex align-items-center mb-3">
                    {tags.map((tag, index) => {
                      return (
                        <div key={index} className="category-name">
                          <span>{tag}</span>
                          <div
                            className="cross-icon d-flex align-items-center justify-content-center"
                            onClick={() => removeTags(index)}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                        </div>
                      );
                    })}
                    {/* <div className="category-name">
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
                    </div> */}

                    <div className="add-more-btn d-flex align-items-center gap-2">
                      <input
                        type="text"
                        list="tagSuggestions"
                        placeholder="Press Enter"
                        onKeyUp={(e) => (e.key === `Enter` ? addTags(e) : null)}
                      />
                      <datalist id="tagSuggestions">
                        {tagSuggestions.map((tag, index) => (
                          <option key={index} onKeyUp={(e) => (e.key === `Enter` ? addTags(e) : null)} value={tag} />
                        ))}
                      </datalist>
                      {/* <i className="fa-solid fa-plus"></i>
                      <span>Add More</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="create-poll-btn bg-[#110736]"
                  id="poll-naming-continue"
                  onClick={handleDialogBox}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* <!-- Poll Type Selection on Continue --> */}
          {showDialogBox && (
            <div
              className={`modal-content ${showDialogBox ? "poll-selection" : "customHidden"
                }`}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="createPollLabel">
                  Select the <span>Poll Type</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                  aria-label="Close"
                > </button>
              </div>
              <div className="modal-body">
                {/* <!-- Selection Polls --> */}
                <div className="poll-types seletion-poll-type">
                  <p>Selection Poll</p>
                  <div className="poll-type" onClick={handleClickToAddYesNo}>
                    <div className="icon">
                      <img
                        src={YesNo}
                        alt="yes-no-icon"
                        className="img-fluid"
                      />
                    </div>
                    <span>Yes No</span>
                  </div>
                  <div
                    className="poll-type"
                    onClick={handleClickToAddSingleSelecion}
                  >
                    <div className="icon">
                      <img
                        src={SingleSelection}
                        alt="single-selection-icon"
                        className="img-fluid"
                      />
                    </div>
                    <span>Single Selection</span>
                  </div>
                  <div className="poll-type" onClick={handleClickToAddMultipleQuestion}>
                    <div className="icon">
                      <img
                        src={MultiSelection}
                        alt="multi-selection"
                        className="img-fluid"
                      />
                    </div>
                    <span>Multi Selection</span>
                  </div>
                  <div className="poll-type" onClick={handleClickToAddDropdownSelection}>
                    <div className="icon">
                      <img
                        src={DropdownIcon}
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
                </div>

                {/* <!-- Other Polls --> */}
                <div className="poll-types other-poll-type">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
