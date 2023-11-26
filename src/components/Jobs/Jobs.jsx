import { useState } from "react";
import Card from "../Card/Card";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import SideBarJobs from "../SideBarJobs/SideBarJobs";
import "./Jobs.css";

const Jobs = ({ data }) => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [isMenuShowing2, setIsMenuShowing2] = useState(false);

  return (
    <section className="job__bg">
      <div className="container">
        <div
          className="job__menu"
          onClick={() => setIsMenuShowing((prev) => !prev)}
        >
          {isMenuShowing ? <IoCloseSharp /> : <RiMenu3Fill />}
        </div>

        <div
          className="job__menu"
          onClick={() => setIsMenuShowing2((prev) => !prev)}
        >
          {isMenuShowing2 ? <IoCloseSharp /> : <RiMenu3Fill />}
        </div>
      </div>

      <div className="container jobs__container">
        <div className={`left__job jobs__card ${isMenuShowing && "active"}`}>
          <SideBarJobs />
        </div>

        <div className="middle__job jobs__card">
          {data.map((curElem, i) => {
            return <Card cardData={curElem} key={i} />;
          })}
        </div>

        <div className={`right__jobs jobs__card ${isMenuShowing2 && "active"}`}>
          right
        </div>
      </div>
    </section>
  );
};

export default Jobs;
