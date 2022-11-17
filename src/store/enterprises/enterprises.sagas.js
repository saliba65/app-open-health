import { put, takeLatest } from "redux-saga/effects";
import { EnterprisesActions, EnterprisesTypes } from "./enterprises.ducks";
//import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { ENTERPRISES, ENTERPRISE_BY_ID } from "../../constants/endpoints";
import { GET } from "../../constants/verbs";

/*
 payload = { name: "carol "}
 ou
 payload = " carol"
*/
export function* search({ payload, type }) {
  try {
    //console.log(" b");
    if (payload !== "") {
      const { data: { enterprises } } = yield api({
        method: GET,
        url: ENTERPRISES(payload)
      });
      yield put(EnterprisesActions.searchSuccess(enterprises));
    } else {
      yield put(EnterprisesActions.searchSuccess([]));
    }
  } catch (error) {
    yield put(EnterprisesActions.enterprisesRequestFailure(error, type));
  }
}

export function* getEnterprise({ payload, type }) {
  try {
    console.log("getEnterprise");
    const { data: { enterprise } } = yield api({
      method: GET,
      url: ENTERPRISE_BY_ID(payload)
    });

    console.log(enterprise);

    yield put(EnterprisesActions.getEnterpriseSuccess(enterprise));
  } catch (error) {
    yield put(EnterprisesActions.enterprisesRequestFailure(error, type));
    yield takeLatest(EnterprisesTypes.SEARCH, search);
  }
}

export function* watchSagas() {
  yield takeLatest(EnterprisesTypes.SEARCH, search);
  yield takeLatest(EnterprisesTypes.GET_ENTERPRISE, getEnterprise);
}
