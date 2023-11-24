import { createContext, useContext, useEffect, useReducer } from "react";
import jobDataReducer from "../reducer/JobDataReducer";
const JobDataContext = createContext();
const initialState = {
    selectedCategory: null,
    jobs: []
}

const JobDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(jobDataReducer, initialState);

  const fetchData = async () => {
    try {
      const res = await fetch("jobs.json");
      const data = await res.json();
      dispatch({
          type: "GET_JOB_DATA",
          payload: data,
        })
    } catch (err) {
        console.log(err);
    }
};

useEffect(() => {
    fetchData();
  }, []);

  const value = {
    ...state,
    dispatch,
  };
  return (
    <JobDataContext.Provider value={value}>{children}</JobDataContext.Provider>
  );
};

const useJobDataContext = () => {
  return useContext(JobDataContext);
};

export { JobDataContextProvider, useJobDataContext };
