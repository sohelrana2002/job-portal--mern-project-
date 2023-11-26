const jobDataReducer = (state, action) => {
 switch (action.type) {
   case "LOADING_JOB_DATA": {
     return {
       ...state,
       isLoading: true,
     };
   }

   case "GET_JOB_DATA": {
     return {
       ...state,
       jobs: action.payload,
       isLoading: false,
     };
   }

   case "SET_QUERY": {
     return {
       ...state,
       query: action.payload,
     };
   }

   case "SEND_VALUE_SELECTEDCATEGORY": {
     return {
       ...state,
       selectedCategory: action.payload,
     };
   }

   case "SEND_VALUE_SELECTEDCATEGORY_FROM_BUTTON": {
     return {
       ...state,
       selectedCategory: action.payload,
     };
   };

   



   default: {
     return state;
   }
 }
}

export default jobDataReducer