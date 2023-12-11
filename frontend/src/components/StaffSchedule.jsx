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

const StaffSchedule = () => {
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
        </div>
      </div>
    </>
  );
};

export default StaffSchedule;
