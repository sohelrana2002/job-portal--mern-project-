import "./myJobs.css";
import { useMyPostContext } from "../../context/MyJobContext";
import { useEffect } from "react";

const MyJobs = () => {
  const { getDataByEmail, jobs } = useMyPostContext();

  const getEmail = localStorage.getItem("email");
  
  useEffect(()=> {
    getDataByEmail(`http://localhost:8000/api/jobs-by-email/${getEmail}`);
  }, []);
  console.log(jobs.length);

  return <div>MyJobs</div>;
};

export default MyJobs;