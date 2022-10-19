import { createActions, createReducer } from "reduxsauce";
import {
  REQUEST_NOT_STARTED,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_RESOLVED
} from "../../constants/request";

export const { Types: AuthTypes, Creators: AuthActions } = createActions({
  signIn: ["payload"],
  signInSuccess: ["payload"],
  authRequestSuccess: ["originalType"],
  authRequestFailure: ["error", "originalType"]
});

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
  error: null,
  authRequests: {
    [AuthTypes.SIGN_IN]: REQUEST_NOT_STARTED
  }
};

const signIn = () => ({
  ...INITIAL_STATE,
  authRequests: {
    ...INITIAL_STATE.authRequests,
    [AuthTypes.SIGN_IN]: REQUEST_PENDING
  }
});

const signInSuccess = (state, { payload }) => ({
  ...state,
  user: payload,
  isAuthenticated: !!payload,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.SIGN_IN]: REQUEST_RESOLVED
  }
});

const authRequestSuccess = (state, { originalType }) => ({
  ...state,
  authRequests: {
    ...state.authRequests,
    [originalType]: REQUEST_RESOLVED
  }
});

const authRequestFailure = (state, { error: { response }, originalType }) => ({
  ...state,
  error: response,
  authRequests: {
    ...state.authRequests,
    [originalType]: REQUEST_REJECTED
  }
});

export default createReducer(INITIAL_STATE, {
  [AuthTypes.SIGN_IN]: signIn,
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [AuthTypes.AUTH_REQUEST_SUCCESS]: authRequestSuccess,
  [AuthTypes.AUTH_REQUEST_FAILURE]: authRequestFailure
});
