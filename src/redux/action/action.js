// action for watchlater (add to watchlater)
export const addVideo = (data) => {
    console.log("watchlater add action",data);  
    return (dispatch) => {
        if(data){

            dispatch({
                type : "ADD_WATCHLATER",
                payload : data
                })
            }
        }
}

// action for watchlater (remove from watchlater )
export const deleteWatchLater = (data) => {
    console.log("watchlater delete action", data);
    return ( dispatch ) => {
        dispatch({
            type : "DELETE_WATCHLATER",
            payload : {
                data : data,
            }
        })   
    }
}

// action for watchlater (remove from watchlater )
export const clearWatchLater = (data) => {
    console.log("watchlater delete action", data);
    return ( dispatch ) => {
        dispatch({
            type : "CLEAR_WATCHLATER",
            payload : {
                data : data,
            }
        })   
    }
}

//action for history (add to history)
export const addHistory = (data) => {
    console.log("history add action", data);
    return ( dispatch ) => {
        if(data){

            dispatch({
                type : "ADD_HISTORY",
                payload : data
            })
        }
    }
}

// action for history (remove from history )
export const deleteHistory = (data) => {
    console.log("history delete action", data);
    return ( dispatch ) => {
        dispatch({
            type : "DELETE_HISTORY",
            payload : {
                data : data,
             }

        })
    }
}

// action for history (clear from history )
export const clearHistory = (data) => {
    console.log("history clear action", data);
    return ( dispatch ) => {
        dispatch({
            type : "CLEAR_HISTORY",
            payload : data
        })
    }
}


//action for likevideo (add to likevideo)
export const addLikeVideo = (data) => {
    console.log("likevideo add action", data);
    return ( dispatch ) => {
        if(data){

            dispatch({
                type : "ADD_LIKE_VIDEO",
                payload : data
            })
        }
    }
}

//action for likevideo (delete from likevideo)
export const deleteLikeVideo = (data) => {
    console.log("likevideo delete action", data);
    return ( dispatch ) => {
        dispatch({
            type : "DELETE_LIKE_VIDEO",
            payload : {
                data : data,
             }

        })
    }
}


// action for likevideo (clear from likevideo )
export const clearLikeVideo = (data) => {
    console.log("likevideo clear action", data);
    return ( dispatch ) => {
        dispatch({
            type : "CLEAR_LIKE_VIDEO",
            payload : data
        })
    }
}