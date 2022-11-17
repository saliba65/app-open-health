import { call, put, takeLatest } from "redux-saga/effects";
import { setAccessToken } from "../../context/auth";
import urls from "../../constants/urls";
import { AuthActions, AuthTypes } from "./auth.ducks";

export function* signIn({ payload, type }) {
  try {
    if (
      payload.email === "teste@openhealth.com.br" &&
      payload.password === "pucminas"
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
      window.location.reload(urls.ROUTES.LOGIN);
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
