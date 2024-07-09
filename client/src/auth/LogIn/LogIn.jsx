import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import "./LogIn.css";

const URL = "http://localhost:8000/api/auth/login";

const LogIn = () => {
  const { storeTokenInLS, dispatch } = useAuthContext();

  const navigate = useNavigate();
  const [userLogIn, setUserLogIn] = useState({
    email: "",
    password: "",
    error: []
  });

  // ====handle user input====
  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUserLogIn({
      ...userLogIn,
      [name]: value,
    });
  };
  // console.log(userLogIn);

  // ====handle submit=====
  const handleLogInSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(userLogIn),
      });
      // console.log("log in form", res);
      const resData = await res.json();
      // console.log("resdata",resData);

      if (res.ok) {
        alert("Log in successfully");

        // ----set token ---
        storeTokenInLS(resData.token, resData.email);
        
        setUserLogIn({
          email: "",
          password: "",
          error: []
        });
        navigate("/")
      }else{
        setUserLogIn({
          ...userLogIn,
          error: resData.message
        });
      }
    }catch(err){
      alert("Invalid credentials");
      console.log(err);
    }
  }



  return (
    <div className="container log__in">
      <form className="login__form" onSubmit={handleLogInSubmit}>
        <NavLink to="/" className="form__icon">
          <MdOutlineClose />
        </NavLink>
        <h3 className="title">Log in</h3>
        <div className="input__field">
        {/* =========email===== */}
          <input className="user__input"
            type="text"
            placeholder="Email"
            name="email"
            value={userLogIn.email}
            onChange={handleInput} />

          {/* =========password======= */}
          <input className="user__input"
            type="password"
            placeholder="Password"
            name="password"
            value={userLogIn.password}
            onChange={handleInput} />
        </div>
        <p className="sub__title">Forget Password?</p>
        {/* ======error message===== */}
        <p>{userLogIn.error}</p>
        <button type="submit" className="btn">
          Log In
        </button>
        <p className="sub__title">
          Don't have an accout? {" "}
          <NavLink  to="/sign-up" className="log__in-link">
             Create One
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
