import {
  BellAlertIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const UserCard = () => {
  return (
    <>
      <div className="flex w-[20rem] sm:w-[20rem]  justify-around">
        <div>
          <BellAlertIcon className="h-7 w-7 mt-1 " />
        </div>
        <div className="flex w-[14rem]  justify-between ">
          <div className="sm:flex flex-col hidden ">
            <h1 className="font-bold text-[#24496B]">Sameer Faridi</h1>
            <p className="ml-[3.2rem] text-gray-600">Owner</p>
          </div>
          <div className="">
          <img className="h-10 w-10 rounded-full mr-5" src="/jonySir.jpeg" />
          </div>
          <div>
            <ChevronDownIcon className="h-5 w-5 mt-3 hidden sm:flex" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
