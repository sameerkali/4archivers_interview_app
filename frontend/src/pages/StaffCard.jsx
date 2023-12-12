import PropTypes from "prop-types";

const StaffCard = ({ taskId, status, imgURL }) => {
  return (
    <div className="flex mt-6">
      <img className="h-7 w-7 rounded-full mr-5" src={imgURL} alt="Profile" />
      <div>
        <h1>
          Aris nurman <span className="text-gray-500">completes all tasks</span>{" "}
          <span className="text-gray-900 font-bold">#{taskId}</span>
          <div className="border border-gray-300 p-3 rounded-3xl bg-white">
            <div className="flex">
              <h1 className="mr-4 font-bold">Machine repair</h1>
              <p>#{taskId}</p>
            </div>
            <button className="text-xs bg-blue-600 p-1 rounded-2xl text-white">
              {status}
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

StaffCard.propTypes = {
  taskId: PropTypes.number,
  status: PropTypes.string,
  imgURL: PropTypes.string
};
export default StaffCard;
