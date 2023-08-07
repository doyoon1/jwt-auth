import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../styles/Login.css";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const [passwordEye, setPasswordEye] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const { setUserData } = useContext(UserContext);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        setUserData({ name: data.name }); // Set the user's name
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isEmailEmpty = data.email === "";
  const isPasswordEmpty = data.password === "";

  // password eye
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  return (
    <div className="container">
      <section className="form">
        <h1>Login to your account</h1>
        <form onSubmit={loginUser}>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label
            className={`email-placeholder ${
              isEmailEmpty ? "email-placeholder" : "email-label"
            }`}
          >
            Email
          </label>
          <input
            type={passwordEye === false ? "password" : "text"}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label
            className={`password-placeholder ${
              isPasswordEmpty ? "password-placeholder" : "password-label"
            }`}
          >
            Password
          </label>
          <div>
            {data.password !== "" && (
              <div className="password-eye">
                {passwordEye ? (
                  <AiFillEye onClick={handlePasswordClick} />
                ) : (
                  <AiFillEyeInvisible onClick={handlePasswordClick} />
                )}
              </div>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
        <span className="line">
          <NavLink exact to="/register" onClick={handleRegisterClick}>
            Don't have an account?
          </NavLink>
        </span>
      </section>
    </div>
  );
}
