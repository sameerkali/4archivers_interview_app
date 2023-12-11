import PropTypes from "prop-types";
const StaffCard = () => {
  return (
    <>
      <div className="flex mt-5">
        <img className="h-7 w-7 rounded-full mr-5" src="/jonySir.jpeg" />
        <div className="">
          <h1>
            Aris nurman{" "}
            <span className="text-gray-500"> compleate all task</span>{" "}
            <span className="text-gray-900 font-bold">#213</span>
            <div className="border border-gray-300 p-3 rounded-3xl bg-white">
              <div className="flex ">
                <h1 className="mr-4 font-bold">Machine repair</h1>
                <p>#212</p>
              </div>
              <button className="text-xs bg-blue-600 p-1 rounded-2xl text-white">
                compleate
              </button>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

// Add prop validation for the task prop
StaffCard.propTypes = {
  task: PropTypes.string.isRequired
};

export default StaffCard;
