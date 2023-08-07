import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function MainNav() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/dashboard");
  };

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
          Saved
        </NavLink>
        <NavLink to="/register" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Logout
        </NavLink>
      </div>
    </nav>
  );
}
