import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import MainNav from "../src/components/MainNav";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../context/userContext";  

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Toaster
        position="bottom-center"
        containerClassName="err"
        toastOptions={{ duration: 3000 }}
      />
      {user ? <MainNav /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
