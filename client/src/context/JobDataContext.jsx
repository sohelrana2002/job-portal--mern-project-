import { createContext, useContext, useEffect, useReducer } from "react";
import jobDataReducer from "../reducer/JobDataReducer";
import axios from "axios";



const JobDataContext = createContext();

const initialState = {
    selectedCategory: "all",
    isLoading: false,
    jobs: [],
    query: "",
    locationQuery: "",
    jobDetails: {}
}

const JobDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobDataReducer, initialState);


  const getData = async () => {
    dispatch({
      type: "LOADING_JOB_DATA",
    });
    try {
      const res = await axios.get("http://localhost:8000/api/all-jobs");
      // console.log(res, "res");
      const allJobs = await res.data.allJobs;
      // console.log(allJobs, "allJobs");
      dispatch({
        type: "GET_JOB_DATA",
        payload: allJobs,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

    // =========get single job details========
  const getJobDetailsData = async (url) => {
    dispatch({
      type: "LOADING_JOB_DETAILS_DATA",
    });
    try {
      const res = await axios.get(url);
      const data = await res.data;
      // console.log(data);
      dispatch({
        type: "GET_JOB_DETAILS_DATA",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // ------------handleQuery----------
  const handleQuery = (e) => {
    let value = e.target.value;
    dispatch({
      type: "SET_QUERY",
      payload: value,
    });
  };

  // ----Handle location query--- 
  const handleLoactionQuery = (e) =>{
    let value = e.target.value;
    dispatch({
      type: "SET_LOCATION_QUERY",
      payload: value,
    })
  }

  // ------handle ratio input-----------
  const handleRatioInput = (e) => {
    let value = e.target.value;
    dispatch({
      type: "SEND_VALUE_SELECTEDCATEGORY",
      payload: value,
    });
  };

  // ---------button base filtering-------------
  const handleButtonInput = (e) => {
    let value = e.target.value;
    dispatch({
      type: "SEND_VALUE_SELECTEDCATEGORY_FROM_BUTTON",
      payload: value,
    });
  };

  // ---------main filter data funtion------------
  const filteredJobsData = (jobs, selectedCategory, query, locationQuery) => {
    // ----filter job though searching----------
    const filterJobsQuery = jobs?.filter((curElem) => {
      return (curElem?.jobTitle?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1);
      // return curElem?.jobTitle?.toLowerCase()?.includes(query);
    });
    let filteringJobs = jobs;
    // -----------for query----------
    if (query) {
      filteringJobs = filterJobsQuery;
      return filteringJobs;
    }

    const locationQueryJobs = jobs.filter((curElem) =>{
      return curElem?.jobLocation?.toLowerCase()?.includes(locationQuery); 
    });

    // -----for location query ---- 
    if(locationQuery){
      filteringJobs = locationQueryJobs;
      return filteringJobs;
    }

    // -----for selected category------------
    if (selectedCategory != "all") {
      filteringJobs = filteringJobs.filter((props) => {
        const { 
          postingDate,
          jobLocation,
          salaryType,
          maxPrice,
          experienceLevel,
          employmentType
        } = props;

        // if(jobLocation.toLowerCase() === selectedCategory?.toLowerCase()){
        //   return filteringJobs;
        // }else{
        //   jobs;
        //   return;
        // }
         if (
           jobLocation?.toLowerCase() === selectedCategory?.toLowerCase() ||
           Number(maxPrice) <= Number(selectedCategory) ||
           postingDate >= selectedCategory ||
           salaryType?.toLowerCase() === selectedCategory?.toLowerCase() ||
           employmentType?.toLowerCase() === selectedCategory?.toLowerCase() ||
           experienceLevel?.toLowerCase() === selectedCategory?.toLowerCase()
         ) {
           return filteringJobs;
         }
      });
    }

    return filteringJobs;
  };






  // -----------value send in provider------------
  const value = {
    ...state,
    dispatch,
    handleQuery,
    handleRatioInput,
    handleButtonInput,
    filteredJobsData,
    handleLoactionQuery,
    getJobDetailsData
  };

  return (
    <JobDataContext.Provider value={value}>
      {children}
    </JobDataContext.Provider>
  );
};

const useJobDataContext = () => {
  return useContext(JobDataContext);
};

export { JobDataContextProvider, useJobDataContext };
