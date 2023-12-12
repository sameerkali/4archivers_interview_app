import { useEffect, useState } from "react";
import Date from "../pages/Date";
import StaffCard from "../pages/StaffCard";

const StaffSchedule = () => {
  const [cardData, setCardData] = useState([]);
  console.log(cardData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend69.onrender.com/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className=" w-[25rem] p-3 bg-white rounded-2xl">
        {/* 1 */}
        <div className="flex p-2 justify-between mt-6">
          <h1 className="text-[#24496B] text-2xl">
            Staff <span className="font-bold">Schedule</span>{" "}
          </h1>
          <p>See all</p>
        </div>
        {/* 2 */}
        <div className="flex justify-between  mt-6">
          <div className="flex justify-between">
            <strong className="mr-5">Today,</strong>
            <p>4 october</p>
          </div>
          <div className="flex"></div>
        </div>
        {/* 3 */}
        <Date />
        {/* 4 */}
        <div className="flex p-2  mt-6 justify-between pl-5 pr-5">
          <button className="text-xs bg-blue-600 p-[7px] rounded-2xl text-white">
            Front office
          </button>
          <p>Today, 11:32 am</p>
        </div>
        {/* 4 */}
        <div className="max-h-[20rem] overflow-y-auto bg-gray-50 p-4 rounded-2xl">
          {cardData.map((data ,i) => (
            <StaffCard
            key={i}
              taskId={data.taskId}
              status={data.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffSchedule;
