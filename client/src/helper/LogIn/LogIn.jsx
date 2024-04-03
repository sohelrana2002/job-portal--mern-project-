import { NavLink } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="container log__in">
      <form className="login__form">
        <NavLink to="/" className="form__icon">
          <MdOutlineClose />
        </NavLink>
        <h3 className="title">Log in</h3>
        <div className="input__field">
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <p className="sub__title">Forget Password?</p>
        <button type="button" className="btn">
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
