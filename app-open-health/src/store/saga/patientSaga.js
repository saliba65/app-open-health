import { put, takeLatest } from "redux-saga/effects";
import { GET } from "../../utils/constants/verbs";
import requestAPI from "../../helpers/requestHelpers";
import { GET_DATA } from "../../utils/constants/endpoints";
import { Types } from "../ducks/patient";

function* getData() {
  try {
    const data = yield requestAPI({
      verb: GET,
      endPoint: GET_DATA
    });
    console.log({ data });
    yield put({
      data,
      type: Types.GET_DATA_SUCCESS
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: Types.GET_DATA_FAIL,
      ...error.response
    });
  }
}

export function* watchSagas() {
  yield takeLatest(Types.GET_DATA, getData);
}
