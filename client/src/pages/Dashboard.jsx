import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";

export default function Dashboard() {
  const { user, logoutUser, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (!user && storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [user, setUserData]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h2>Hi {user.name}!</h2>}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
