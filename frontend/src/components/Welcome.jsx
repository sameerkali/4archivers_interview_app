import UserCard from "../pages/UserCard";

const Welcome = () => {
  return (
    <>
      <div className="flex justify-between w-[93vw] bg-gray-100 pr-10 pl-10 pt-16 pb-7 h-[8rem]">
        <div className="">
          <h1 className="text-[#24496B] text-2xl">
            Welcome, <span className="font-bold">Ariana !</span>{" "}
          </h1>
          <p className="text-gray-500">Dont forget to check activity</p>
        </div>
        <div>
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default Welcome;
