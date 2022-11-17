import { all } from "redux-saga/effects";
import * as authSagas from "./auth/auth.sagas";
import * as enterprisesSagas from "./enterprises/enterprises.sagas";

function* Sagas() {
  yield all([authSagas.watchSagas(), enterprisesSagas.watchSagas()]);
}

export default Sagas;
