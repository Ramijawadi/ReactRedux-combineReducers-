import counterReducer from "./reducer";
import LoggingReducer from "./reducer2";

import { combineReducers } from "redux";


const reducers = combineReducers({


    counter : counterReducer , 
  logging :LoggingReducer,
})

export default reducers ;