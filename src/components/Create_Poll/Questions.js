import React, { useEffect, useRef, useState } from "react";

const Questions = ({ index, questionText, onDelete, onDuplicate, }) => {
  // const handleMoreOptions = () => {
  //   setShowMoreOptions(!showMoreOptions);
  // };

  const modalref = useRef()
  const [showMoreOptions, setShowMoreOptions] = useState(false);  // Show More Options

  // console.log(modalref.current.contains)


  console.log(showMoreOptions)

  useEffect(() => {
    if (showMoreOptions) {
      document.addEventListener('click', handleClickOut)
    }
    return () => {
      document.removeEventListener('click', handleClickOut)
    }
  }, [showMoreOptions])

  const handleClickOut = (e) => {
    if (!modalref.current.contains(e.target)) {
      setShowMoreOptions(false)
      // console.log(modalref.current)
    }
  }


  const handleDelete = () => {
    onDelete(index)
  }

  const handleDuplicate = () => {
    onDuplicate(index)
  }

  // const handleOptions = (id) =>{
  //   console.log(id)
  //   handleOpenMoreOptions(id)
  // }

  const handleOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };



  return (
    <div id="question-createpoll">
      <div className="relative question d-flex justify-content-between align-items-center">
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
          <span>{index + 1}</span>
        </div>
        <div className="que-w">
          <p>{questionText}</p>
        </div>
        <div className="more-options" ref={modalref} onClick={handleOptions}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="more-createpoll absolute top-4 right-10">
          {showMoreOptions && (
            <div className="more-for-createpoll">
              <p onClick={handleDelete}>Delete</p>
              <p onClick={handleDuplicate}>Duplicate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
