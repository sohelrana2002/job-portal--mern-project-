const myJobReducer = (state, action) =>{
    switch(action.type){
        case "LOADING_BY_EMAIL": {
            return{
                ...state,
                isLoading: true
            }
        };

        case "SET_JOB_BY_EMAIL": {
            return{
                ...state,
                jobs: action.payload,
                isLoading: false
            }
        };


        default:
            return state;
    }
}

export default myJobReducer;