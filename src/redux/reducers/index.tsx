import { combineReducers } from "redux";
import tickerReducer from "./tickerReducer";

const rootReducer = combineReducers({
  tickerReducer,
});

export default rootReducer;
