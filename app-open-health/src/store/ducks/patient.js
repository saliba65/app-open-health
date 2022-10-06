import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  getData: [],
  getDataSuccess: ["payload", "isLoading"],
  getDataFail: ["isLoading", "error"]
});

const INITIAL_STATE = {
  data: {}
};

const getData = state => ({ ...state });

const getDataSuccess = (state, payload) => ({
  ...state,
  ...payload,
  isLoading: false
});

const getDataFail = (state, error) => ({
  ...state,
  isLoading: false,
  ...error
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_DATA]: getData,
  [Types.GET_DATA_SUCCESS]: getDataSuccess,
  [Types.GET_DATA_FAIL]: getDataFail
});
