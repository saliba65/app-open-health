import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth/auth.ducks";
import enterprises from "./enterprises/enterprises.ducks";

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    enterprises
  });

const Reducers = history => appReducer(history);

export default Reducers;
