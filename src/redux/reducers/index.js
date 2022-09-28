import { combineReducers } from "redux";
import HistoryReducer from "./HistoryReducer";
import LikevideoReducer from  "./LikeVideoReducer";
import WatchLaterReducer from "./WatchLaterReducer";

const rootReducer = combineReducers ( {
    W_reducer : WatchLaterReducer,
    H_reducer : HistoryReducer,
    L_reducer : LikevideoReducer,
})
 export default rootReducer ;