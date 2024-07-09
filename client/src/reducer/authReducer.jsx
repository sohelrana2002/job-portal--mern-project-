const authReducer = (state, action) =>{
    switch(action.type){
        case "REMOVE_TOKEN": {
            const removeToken = localStorage.removeItem("token");
            
            return{
                ...state,
                token: "",
                removeToken
            }
        };

        case "SET_TOKEN_IN_STATE": {
            return{
                ...state,
                token: action.payload
            }
        }

        default: 
            return state;
    }
};

export default authReducer;