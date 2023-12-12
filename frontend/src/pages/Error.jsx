import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="font-bold text-gray-800 text-center p-3 mt-10">Oops!!!</h1>
      <h2 className="font-bold text-gray-800 text-center p-3"> Something went wrong!!</h2>
      <Link to="/home">
        <h3 className="p-4 bg-red-300 text-center text-white font-bold mt-10">back to Home</h3>
      </Link>
    </div>
  );
};

export default Error;
