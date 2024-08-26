import "./myJobs.css";
import { useMyPostContext } from "../../context/MyJobContext";
import { useEffect, useState } from "react";
import Loading from "../../shared/Loading/Loading";

const MyJobs = () => {
  const {
    getDataByEmail,
    jobs,
    isLoading,
    dispatch,
    searchQuery,
    handleSearchQuery,
    searchJobData,
  } = useMyPostContext();

  const getEmail = localStorage.getItem("email");
  
  useEffect(()=> {
    getDataByEmail(`http://localhost:8000/api/jobs-by-email/${getEmail}`);
  }, []);

  const resSearchData = searchJobData(jobs, searchQuery);
  // console.log(resSearchData);
  

  if(isLoading){
    return (<Loading />)
  }

  return (
    <div className="container myJob__container">
      {jobs?.length <= 0 ? (
        <h1 className="post_nothing">You can't post any job</h1>
      ) : (
        <div className="myJon__container-box">
          <h1 className="job__title">All My Jobs</h1>

          <form className="search__box">
            <input
              type="text"
              onChange={handleSearchQuery}
              placeholder="Search job...."
              value={searchQuery}
            />
          </form>
        </div>
      )}
      <div>
        {resSearchData?.map((curElem, i) => {
          return <h1 key={i}>{curElem.jobTitle}</h1>;
        })}
      </div>
    </div>
  );
};

export default MyJobs;