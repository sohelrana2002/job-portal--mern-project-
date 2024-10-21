import { createContext, useContext, useReducer } from "react";
import myJobReducer from "../reducer/myJobReducer";
import axios from "axios";

const MyJobContext = createContext();

const initialState = {
  jobs: [],
  isLoading: false,
  searchQuery: "",
};

const MyJobContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myJobReducer, initialState);

  const getDataByEmail = async (url) => {
    dispatch({
      type: "LOADING_BY_EMAIL",
    });

    try {
      const res = await axios.get(url);

      const dataByEmail = await res.data.jobsByEmail;
      // console.log(dataByEmail, "dataByEmail");

      dispatch({
        type: "SET_JOB_BY_EMAIL",
        payload: dataByEmail,
      });
    } catch (error) {
      console.log(error, "get data my email error");
    }
  };

  // -----------handle search query-----------
  const handleSearchQuery = (e) => {
    let value = e.target.value;

    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: value,
    });
  };

  // -----------search job data function-----------
  const searchJobData = (jobs, searchQuery) => {
    const filterJobsQuery = jobs?.filter((curElem) => {
      return (
        curElem?.jobTitle
          ?.toLowerCase()
          ?.indexOf(searchQuery?.toLowerCase()) !== -1
      );
    });

    let filteringJobs = jobs;
    // -----------for search query----------
    if (searchQuery) {
      filteringJobs = filterJobsQuery;
      return filteringJobs;
    }

    return filteringJobs;
  };

  // --------delete job by id---------
  const handleDeleteJob = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/delete-job/${id}`, {
        method: "DELETE",
      });

      // console.log(res);
      if (res.statusText === "OK") {
        alert("Job deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    ...state,
    dispatch,
    getDataByEmail,
    handleSearchQuery,
    searchJobData,
    handleDeleteJob,
  };
  return (
    <MyJobContext.Provider value={value}>{children}</MyJobContext.Provider>
  );
};

const useMyPostContext = () => {
  return useContext(MyJobContext);
};

export { MyJobContextProvider, useMyPostContext };
