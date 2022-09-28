const initialData = {
    likeVideoList : []
}

const LikeVideoReducer = (state = initialData, action) => {
    console.log('LikeVideoReducer', action.payload);
    switch (action.type) {
        case "ADD_LIKE_VIDEO":
            return{
                    ...state,
                    likeVideoList : [
                        ...state.likeVideoList,{
                       likeVideoList: action.payload
                        }
                    ]
                } ;
                
        case "DELETE_LIKE_VIDEO" : 
                const newLikeVideoList = state.likeVideoList.filter ( (curElement) => 
                {
                    console.log("curElement",curElement);
                    return curElement.likeVideoList.id !== action.payload.data.likeVideoList.id
                })
               console.log("newLikeVideoList",newLikeVideoList);
               return {
                ...state,
                likeVideoList : newLikeVideoList
               };

        case "CLEAR_LIKE_VIDEO" : 
               return {
                ...state,
                likeVideoList : []
               };

    default:
            return state;
    }

};
export default LikeVideoReducer;