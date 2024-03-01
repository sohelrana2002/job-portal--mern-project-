import { NavLink } from 'react-router-dom'
import { MdOutlineClose } from "react-icons/md";

import './SignUp.css'

const SignUp = () => {
  return (
    <div className="container log__in">
      <form className="login__form">
        <NavLink to="/" className="form__icon">
          <MdOutlineClose />
        </NavLink>
        <h3 className="title">Sign Up</h3>
        <div className="input__field">
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Enter Confirm Password" />
        </div>
        <button type="button" className="btn">
            Sign Up
        </button>
        <p className="sub__title">
          have an accout? {" "}
          <NavLink  to="/log-in" className="log__in-link">
             Log In
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default SignUp