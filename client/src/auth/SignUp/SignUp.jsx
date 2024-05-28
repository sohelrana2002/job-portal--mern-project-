import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import "./SignUp.css";

const URL = "http://localhost:8000/api/auth/sign-up";

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    cPassword: "",
    wrongPass: false,
    error: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
  };
  console.log(userSignUp);

  // ======after submit=========
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userSignUp.password === userSignUp.cPassword) {
        const res = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userSignUp),
        });

        // console.log("res", res);
        const resData = await res.json();
        // console.log("resdata", resData);

        if (res.statusText === "Created") {
          alert("Sign Up Successfully");
          setUserSignUp({
            email: "",
            password: "",
            cPassword: "",
            wrongPass: false,
            error:"",
          });
          navigate("/log-in");
        } else {
          setUserSignUp({
            ...userSignUp,
            error: resData.message,
          });
        }
      }
      else {
        setUserSignUp({
          ...userSignUp,
          wrongPass: true,
          error: ""
        });
      }
    } catch (err) {
      console.log(err);
    }
  };


  // ===========for jsx===========
  return (
    <div className="container log__in">
      <form className="login__form" onSubmit={handleSubmit}>
        <NavLink to="/" className="form__icon">
          <MdOutlineClose />
        </NavLink>
        <h3 className="title">Sign Up</h3>
        <div className="input__field">
          <input
            className="user__input"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={userSignUp.email}
            onChange={handleInput}
          />
          <input
            className="user__input"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userSignUp.password}
            onChange={handleInput}
          />
          <input
            className="user__input"
            type="password"
            placeholder="Confirm password"
            name="cPassword"
            value={userSignUp.cPassword}
            onChange={handleInput}
          />
        </div>

        {/* =====wrong password message======= */}
        {userSignUp.wrongPass && (
          <div className="wrongPass">
            <p>Password is&apos;n same</p>
          </div>
        )}

        {/* ======error message===== */}
        <p>{userSignUp.error}</p>

        <button type="submit" className="btn">
          Sign Up
        </button>
        <p className="sub__title">
          have an accout?{" "}
          <NavLink to="/log-in" className="log__in-link">
            Log In
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
