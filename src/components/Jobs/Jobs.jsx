import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import SideBarJobs from "../SideBarJobs/SideBarJobs";
import RightSideJobs from "../RightSideJobs/RightSideJobs";
import "./Jobs.css";

const Jobs = ({ data }) => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [isMenuShowing2, setIsMenuShowing2] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const formRef = useRef();

  // --------pagenation in job-----------
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const getPrevPage = () => {
    if (currentPage !== firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getNextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const handleOutSideForm = (e) => {
      if (!formRef.current.contains(e.target)) {
        setIsMenuShowing(false);
        setIsMenuShowing2(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideForm);

    return () => {
      document.removeEventListener("mousedown", handleOutSideForm);
    };
  }, []);



  return (
    <section className="job__bg">

      {/* --------for small devices toggle menu----------- */}
      <div className="container">
        <div
          className="job__menu"
          onClick={() => setIsMenuShowing((prev) => !prev)}
        >
          {isMenuShowing ? <IoCloseSharp /> : <RiMenu3Fill />}
        </div>

        <div
          className="job__menu two"
          onClick={() => setIsMenuShowing2((prev) => !prev)}
        >
          {isMenuShowing2 ? <IoCloseSharp /> : <RiMenu3Fill />}
        </div>
      </div>


        {/* ------------job part start------------ */}
      <div className="container jobs__container">

        {/* --------------left size jobs--------- */}
        <div
          className={`left__job jobs__card ${isMenuShowing && "active"}`}
          ref={formRef}
        >
          <SideBarJobs />
        </div>


          {/* ----------middle size jobs----------- */}
        <div className="middle__job jobs__card">
          <h3 className="filter__title">{data.length} Jobs</h3>

          {records.length > 0 ? (
            records.map((curElem, i) => {
              return <Card cardData={curElem} key={i} />;
            })
          ) : (
            <p className="sub__title">No result found</p>
          )}

          <div className="pagination">
            <button onClick={getPrevPage}>Previous</button>
            <p className="sub__title">
              Page {currentPage} of {nPage}
            </p>
            <button onClick={getNextPage}>Next</button>
          </div>
        </div>


            {/* -----------right size jobs------------- */}
        <div
          className={`right__jobs jobs__card ${isMenuShowing2 && "active"}`}
          ref={formRef}
        >
          <RightSideJobs />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
