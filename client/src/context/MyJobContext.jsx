import { createContext, useContext, useReducer } from "react";
import myJobReducer from "../reducer/myJobReducer";
import axios from "axios";

const MyJobContext = createContext();

const initialState = {
    jobs:[],
    isLoading: false
}


const MyJobContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(myJobReducer, initialState);

        const getDataByEmail = async(url) =>{
            dispatch({
                type: "LOADING_BY_EMAIL"
            });

            try {
                const res = await axios.get(url);
    
                const dataByEmail = await res.data.jobsByEmail;
                console.log(dataByEmail, "dataByEmail");

                dispatch({
                    type: "SET_JOB_BY_EMAIL",
                    payload: dataByEmail
                });
            } catch (error) {
                console.log(error, "get data my email error");
            }
        };



    const value ={
        ...state,
        dispatch,
        getDataByEmail
    }
    return(
        <MyJobContext.Provider value={value}>
            { children }
        </MyJobContext.Provider>
    );
};

const useMyPostContext = () =>{
    return useContext(MyJobContext);
};

export { MyJobContextProvider, useMyPostContext }