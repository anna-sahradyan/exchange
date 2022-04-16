import {combineReducers} from "redux";
import rate from '../store/rateSlice'
const rootReducer = combineReducers({
    rate,
    devTools: true,
})
export default rootReducer;