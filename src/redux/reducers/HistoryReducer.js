const initialData = {
    historyList : []
}

const HistoryReducer = (state = initialData, action) => {
    console.log('HistoryReducer', action.payload);
    switch (action.type) {
        case "ADD_HISTORY":
            return{
                    ...state,
                    historyList : [
                        ...state.historyList,{
                       historyList: action.payload
                        }
                    ]
                } ;
                
        case "DELETE_HISTORY" : 
                const newHistoryList = state.historyList.filter ( (curElement) => 
                curElement.historyList.id !== action.payload.data.historyList.id
                )
               console.log("newHistoryList",newHistoryList);
               return {
                ...state,
                historyList : newHistoryList
               };

        case "CLEAR_HISTORY" : 
               return {
                ...state,
                historyList : []
               };

    default:
            return state;
    }

};
export default HistoryReducer;