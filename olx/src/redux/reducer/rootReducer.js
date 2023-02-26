import { combineReducers } from "redux";
import creatReducer from '../reducer/creat-reducer';
import likeReducer from '../reducer/like-reducer';




const rootReducer = combineReducers(
    {
        creatReducer,
        likeReducer
    }
)

export default rootReducer;