import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
// import ChartComponent from "./components/Chart";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/chart" element={<ChartComponent />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
