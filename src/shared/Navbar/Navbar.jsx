import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Links } from "../../data/Data";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark, CiLogin } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIshNavShowing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const formRef = useRef();


  useEffect(() => {
    const handleOutSideForm = (e) => {
      if (!formRef.current.contains(e.target)) {
        setIshNavShowing(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideForm);

    return () => {
      document.removeEventListener("mousedown", handleOutSideForm);
    };
  }, []);



  return (
    <nav>
      <div className="container navbar__container">
        <NavLink to="/" className="logo">
          Job Portal
        </NavLink>
        <ul
          className={`menu ${isNavShowing ? "active__nav" : ""}`}
          ref={formRef}
        >
          {Links &&
            Links?.map(({ id, title, path }) => {
              return (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
        </ul>

        <div className="right__nav">
          <div
            className="theme__mode"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? <CiDark /> : <MdOutlineLightMode />}
          </div>
          <NavLink to="log-in">
            <CiLogin />
          </NavLink>

          <div
            className="menu__icon"
            onClick={() => setIshNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <IoCloseSharp /> : <RiMenu3Fill />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
