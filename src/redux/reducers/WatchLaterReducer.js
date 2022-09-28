const initialData = {
    watchlaterList : []
}

const WatchLaterReducer = (state = initialData, action) => {
    console.log('WatchLaterReducer', action.payload);
    switch (action.type) {

        case "ADD_WATCHLATER":
            return{
                    ...state,
                    watchlaterList : [
                        ...state.watchlaterList,{
                       watchlaterList: action.payload
                         }
                    ]
                }

        case "DELETE_WATCHLATER" : 
             const newListWatchlater = state.watchlaterList.filter ( (element) =>
                element.watchlaterList.id !== action.payload.data.watchlaterList.id
                )
             return {
            ...state,
            watchlaterList : newListWatchlater
            }

         case "CLEAR_WATCHLATER" : 
            return {
                ...state,
                watchlaterList : []
            }; 
            
            
        default:
            return state;
    }

};
export default WatchLaterReducer;