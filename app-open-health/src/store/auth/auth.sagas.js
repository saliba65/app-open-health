import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN } from "../../constants/endpoints";
import { POST } from "../../constants/verbs";
import { setAccessToken } from "../../context/auth";
import api from "../../services/api";
import urls from "../../constants/urls";
import { AuthActions, AuthTypes } from "./auth.ducks";
import { history } from "../../utils/routes";

export function* signIn({ payload, type }) {
  try {
    if (
      payload.email === "teste@openhealth.com.br" &&
      payload.password === "tiosukita"
    ) {
      yield call(setAccessToken, {
        accessToken: "nqp1B3tdgwwZHT2A7byf",
        client: "bumymcQ-nCboy6Wcbfbp",
        uid: payload.email
      });

      yield put(
        AuthActions.signInSuccess({
          user: payload.email,
          isAuthenticated: true
        })
      );
      window.location.assign(urls.ROUTES.MURAL);
    } else {
      console.log("Email ou senha inválidos");
    }
  } catch (error) {
    console.error(error);

    yield put(AuthActions.authRequestFailure(error, type));
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.SIGN_IN, signIn);
}
