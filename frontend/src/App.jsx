import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<h1>HOME</h1>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
