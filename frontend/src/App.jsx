import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./pages/Error";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
