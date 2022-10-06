import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import data from "./ducks/patient";

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    data
  });

const Reducers = history => appReducer(history);

export default Reducers;
