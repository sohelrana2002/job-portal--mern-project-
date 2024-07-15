import "./myJobs.css";
import { useMyPostContext } from "../../context/MyJobContext";
import { useEffect } from "react";
import Loading from "../../shared/Loading/Loading";

const MyJobs = () => {
  const { getDataByEmail, jobs, isLoading } = useMyPostContext();

  const getEmail = localStorage.getItem("email");
  
  useEffect(()=> {
    getDataByEmail(`http://localhost:8000/api/jobs-by-email/${getEmail}`);
  }, []);
  console.log(jobs.length);

  if(isLoading){
    return (<Loading />)
  }

  return (
    <div className="container myJob__container">
      {
        jobs.length <= 0 ? (<h1 className="post_nothing">You can't post any job</h1>):(
          <div>something</div>
        )
      }
      
    </div>
  );
};

export default MyJobs;