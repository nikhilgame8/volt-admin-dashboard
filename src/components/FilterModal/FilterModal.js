import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

const FilterModal = ({ data, allData, setData, isOpen, onClose }) => {
  // const [mydata, setMyData] = useState(data)
  const modalRef = useRef();
  const [selectedTasks, setSelectedTasks] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); //Show Date Picker
  const [showPlay, setShowPlay] = useState(false); //Show Play button

  //Selected Tasks

  const handleSelectedtasks = (task) => {
    // console.log(task);
    setSelectedTasks(task);
  };

  // console.log(allData);

  // console.log(data)

  //OnClose Event
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClick();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        handleClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  //Range of Date

  const handleSelect = (ranges) => {
    let filteredData = allData.filter((data) => {
      let dateCreatedAt = new Date(data["createdAt"]);
      return (
        dateCreatedAt >= ranges.selection.startDate &&
        dateCreatedAt <= ranges.selection.endDate
      );
    });
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setData(filteredData);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // Handle Date Range Picker
  const handleButtonClick = () => {
    setShowDatePicker(true);
  };

  const handleCloseDateRange = () => {
    setShowDatePicker(false);
  };

  //Filter Status

  const handleStatus = (filter) => {
    let filtered = allData.filter((data) => data.play === filter);

    // let status = data["play"]

    //   if(status===filter){
    //     return{...data, play:!filter}
    //   }
    // return data

    setData(filtered);
  };

  return (
    <div id="filter" className={`modal${isOpen ? "show" : ""}`}>
      <div className="dialog top-[25%] md:top-[10%] lg:top-0 right-0 md:right-[10%] modal-dialog" ref={modalRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal Title</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>x</span>
            </button>
          </div>
          <div className="modal-body modal-header">
            {showDatePicker && (
              <div
                className="flex"
                //  onClick={handleCloseDateRange}
              >
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  showMonthArrow={true}
                />
                <button className="bottom-auto" onClick={handleCloseDateRange}>
                  x
                </button>
              </div>
            )}
            <h5 onClick={handleButtonClick}>Date Range</h5>
              <h5
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                onClick={() => handleSelectedtasks("status")}
              >
                status
              </h5>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleStatus(false)}
                  >
                    Play
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleStatus(true)}
                  >
                    Pause
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleStatus(true)}
                  >
                    Both
                  </button>
                </li>
              </ul>
            {/* <h5 onClick={() => handleSelectedtasks("Data Range")}>
              Date Range
            </h5> */}
            <h5 onClick={() => handleSelectedtasks("Category")}>Category</h5>
            {/* Add your modal content here */}
          </div>
          <div className="modal-header">
            <h5 className="modal-title">Filter Selected</h5>
          </div>
          <div className="modal-body modal-header">
            <h5>{selectedTasks}</h5>
            {/* Add your modal content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
