// import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import ChartComponent from "./Chart";
import DataCards from "../pages/DataCards";
import StaffSchedule from "./StaffSchedule";
import Popup from "./Popup";

const Home = () => {
  return (
    <>
      <Popup />
      <div className="flex">
        <div className="sm:flex hidden">
          <Sidebar />
        </div>
        <div>
          <Welcome />
          {/* 2 */}
          <div className="flex sm:flex-row flex-col   justify-between pl-10 pr-10 bg-gray-100 pb-5">
            {/* ss */}
            <div className=" pr-6 sm:pr-0">
              <div className="flex flex-col sm:flex-row">
                <DataCards
                  icons={`/icon01.png`}
                  title={`Total Arrival`}
                  number={`231`}
                />
                <DataCards
                  icons={`/icon02.png`}
                  title={`Total Booked`}
                  number={`891`}
                />
                <DataCards
                  icons={`/icon03.png`}
                  title={`Total Check In`}
                  number={`129`}
                />
              </div>
              <ChartComponent />
            </div>
            <StaffSchedule />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


