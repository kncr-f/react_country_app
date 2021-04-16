const INITIAL_STATE={
    isLoading:false,
    countries:[],
    message:"",
    //searchText:""
    
};

export const reducer=(state=INITIAL_STATE, action)=>{
   switch(action.type){
       case "GET_COUNTRIES_START":
           return {
               ...state,isLoading:true,message:""
           };
       case "GET_COUNTRIES_SUCCESS":
           return{
               ...state,countries:action.payload,isLoading:false
            };
        case "GET_COUNTRIES_ERROR":
            return{
                ...state, message:action.payload, isLoading:false
            }
        case "SEARCH":
            return{
                ...state, countries:[...state.countries.filter(item=>
                    item.name.toLowerCase().includes(action.payload.toLowerCase()))], isLoading:false
            }
        // case "SEARCH_CHANGE":
        //     return{
        //         ...state, searchText:action.payload, isLoading:false
        //     }
        default: return state;
   }
}