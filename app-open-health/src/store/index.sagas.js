import { all } from "redux-saga/effects";
import * as numberSagas from "./saga/patientSaga";

function* Sagas() {
  yield all([numberSagas.watchSagas()]);
}

export default Sagas;
