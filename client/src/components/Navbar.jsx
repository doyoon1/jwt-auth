import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleHomeClick = () => {
    navigate("/");
  };

  if (user) {
    // Render MainNav when the user is logged in
    return (
      <nav>
        {/* Your MainNav content here */}
        {/* ... */}
        <button onClick={handleLogout}>Log Out</button>
      </nav>
    );
  }

  return (
    <nav>
      <span className="logo" onClick={handleHomeClick}>
        LOGO
      </span>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="rightSide">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
