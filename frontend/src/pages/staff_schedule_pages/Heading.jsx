import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import StaffCard from "./StaffCard";

const Heading = () => {
  return (
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
        <div className="flex">
          <strong>Today,</strong>
          <p>4 october</p>
        </div>
        <div className="flex">
          <ChevronLeftIcon className="h-7 w-7 " />
          <ChevronRightIcon className="h-7 w-7 ml-2 " />
        </div>
      </div>
      {/* 3 */}
      <div className="flex justify-between  mt-6">
        <div className="">
          <p>Sun</p>
          <p className="text-center">1</p>
        </div>
        <div>
          <p>Mon</p>
          <p className="text-center">2</p>
        </div>
        <div>
          <p>Tues</p>
          <p className="text-center">3</p>
        </div>
        <div>
          <p>Wed</p>
          <p className="text-center">4</p>
        </div>
        <div>
          <p>Thurs</p>
          <p className="text-center">5</p>
        </div>
        <div>
          <p>Fri</p>
          <p className="text-center">6</p>
        </div>
        <div>
          <p>Sat</p>
          <p className="text-center">7</p>
        </div>
      </div>
      {/* 4 */}
      <div className="flex p-2  mt-6 justify-between pl-5 pr-5">
        <button className="text-xs bg-blue-600 p-[7px] rounded-2xl text-white">
          Front office
        </button>
        <p>Today, 11:32 am</p>
      </div>
      {/* 4 */}
      <div className="max-h-[20rem] overflow-y-auto bg-gray-50 p-4 rounded-2xl">
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        
      </div>
    </div>
  );
};

export default Heading;
