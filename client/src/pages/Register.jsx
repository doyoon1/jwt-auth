import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../styles/Register.css";

export default function Register() {
  const [passwordEye, setPasswordEye] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginClick = () => {
    navigate("/login");
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("You have created an account successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nameEmpty = data.name === "";
  const emailEmpty = data.email === "";
  const passwordEmpty = data.password === "";

  // password eye
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  return (
    <div className="container">
      <section>
        <h1>Create an account</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label className={`name ${nameEmpty ? "name" : "name-label"}`}>
            Name
          </label>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label
            className={`email ${
              emailEmpty ? "email" : "email-lbl"
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
            className={`password ${
              passwordEmpty ? "password" : "password-lbl"
            }`}
          >
            Password
          </label>
          <div>
            {data.password !== "" && (
              <div className="reg-password-eye">
                {passwordEye ? (
                  <AiFillEye onClick={handlePasswordClick} />
                ) : (
                  <AiFillEyeInvisible onClick={handlePasswordClick} />
                )}
              </div>
            )}
          </div>
          <button type="submit">Sign up</button>
        </form>
        <span className="line">
          <NavLink exact to="/login" onClick={handleLoginClick}>
            Already have an account?
          </NavLink>
        </span>
      </section>
    </div>
  );
}
