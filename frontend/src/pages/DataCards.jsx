
import PropTypes from "prop-types";

const DataCards = ({ icons, title, number }) => {
  return (
    <>
      <div className="p-3 flex bg-white w-56 rounded-2xl mr-6 mb-10">
        <img className="h-20 w-20" src={icons} alt={title} />
        <div className="ml-4 mt-2">
          <p className="text-gray-700">{title}</p>
          <strong className="text-blue-gray-800">{number}</strong>
        </div>
      </div>
    </>
  );
};

// Define prop types
DataCards.propTypes = {
  icons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DataCards;
