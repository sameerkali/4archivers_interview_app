import { useState, useEffect, useRef } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [popupRef]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div ref={popupRef} className=" fixed top-16 left-1 w-[24rem]  sm:top-1/4 sm:left-1/4 z-50 sm:w-1/2 h-80rem bg-[rgba(184, 215, 241, 0.621)] p-6 border rounded-md shadow-md backdrop-blur-md">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-gray-800 cursor-pointer sm:text-xl text-4xl"
            >
              &#10006;
            </button>
          </div>
          <div className="">
            <h1 className="text-4xl text-gray-800 font-bold">Assignment Summary</h1>
            <p  className="mt-4 text-gray-800 font-bold">Technologies: MERN <a className="text-green-600"  href="https://github.com/sameerkali/4archivers_interview_app">GitHub repo</a> </p>
            <p className="mt-4 text-gray-800 font-bold">I used API calls in this project: StaffSchedule/Cards</p>
            <p className="mt-4 text-gray-800 font-bold">Working Chart, feel free to play around</p>
            <p className="mt-4 text-gray-800 font-bold">For the backend, I used Node.js, Express, and MongoDB</p>
            <p className="mt-4 text-gray-800 font-bold">It is responsive with login/signup functionality</p>
            <p className="mt-4 text-gray-800 font-bold">Error handling and dynamic data are implemented</p>
            <p className="mt-4 text-gray-800 font-bold">I did my best to make this app as good as possible within a tight timeline   </p>
            <p className="mt-4 text-2xl text-red-200 font-bold">Thanks & regards Sameer Faridi   </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
