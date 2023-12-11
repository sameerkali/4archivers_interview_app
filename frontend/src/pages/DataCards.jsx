/* eslint-disable react/prop-types */

const DataCards = ({ icons, title, number }) => {
  return (
    <>
      <div className=" p-3 flex bg-white w-56 rounded-2xl mr-6 mb-10">
        <img className="h-20 w-20 " src={icons} />
        <div className="ml-4 mt-2">
          <p className="text-gray-700">{title}</p>
          <strong className="text-blue-gray-800">{number}</strong>
        </div>
      </div>
    </>
  );
};

export default DataCards;
