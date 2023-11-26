import { createContext, useContext, useEffect, useReducer } from "react";
import jobDataReducer from "../reducer/JobDataReducer";
import axios from "axios";



const JobDataContext = createContext();

const initialState = {
    selectedCategory: null,
    isLoading: false,
    jobs: [],
    query: ""
}

const JobDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobDataReducer, initialState);

  const getData = async () => {
    dispatch({
      type: "LOADING_JOB_DATA",
    });
    try {
      const res = await axios.get("jobs.json");
      const data = await res.data;
      // console.log(data);
      dispatch({
        type: "GET_JOB_DATA",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // ------------handleQuery----------
  const handleQuery = (e) => {
    let value = e.target.value;
    dispatch({
      type: "SET_QUERY",
      payload: value,
    });
  };

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
  const filteredJobsData = (jobs, selectedCategory, query) => {
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

    // -----for selected category------------
    if (selectedCategory) {
      filteringJobs = filteringJobs.filter((props) => {
        const {
          jobLocation,
          salaryType,
          maxPrice,
          experienceLevel,
          employmentType,
          postingDate,
        } = props;

         if (
           jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
           parseInt(maxPrice) <= parseInt(selectedCategory) ||
           salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
           employmentType.toLowerCase() === selectedCategory.toLowerCase()
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
  };

  return (
    <JobDataContext.Provider value={value}>{children}</JobDataContext.Provider>
  );
};

const useJobDataContext = () => {
  return useContext(JobDataContext);
};

export { JobDataContextProvider, useJobDataContext };
