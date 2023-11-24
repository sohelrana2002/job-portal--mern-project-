const jobDataReducer = (state, action) => {
 switch(action.type){
    case "GET_JOB_DATA": {
        return{
            ...state,
            jobs: action.payload
        }
    }

    default: {
        return state;
    }
 }
}

export default jobDataReducer