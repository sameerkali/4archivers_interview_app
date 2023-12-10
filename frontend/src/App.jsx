import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
