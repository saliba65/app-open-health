import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN } from "../../constants/endpoints";
import { POST } from "../../constants/verbs";
import { setAccessToken } from "../../context/auth";
import api from "../../services/api";
//import { search } from "../enterprises/enterprises.sagas";
import { AuthActions, AuthTypes } from "./auth.ducks";
//import { useHistory } from "react-router-dom";

export function* signIn({ payload, type }) {
  try {
    const response = yield api({
      method: POST,
      url: SIGN_IN,
      data: payload
    });

    console.log(response.headers);

    yield call(setAccessToken, {
      accessToken: response.headers["access-token"],
      client: response.headers.client,
      uid: response.headers.uid
    });

    yield put(AuthActions.signInSuccess(response.data.investor));
  } catch (error) {
    console.error(error);

    yield put(AuthActions.authRequestFailure(error, type));
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.SIGN_IN, signIn);
}
