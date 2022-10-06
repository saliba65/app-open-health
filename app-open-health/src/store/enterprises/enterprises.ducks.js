import { createActions, createReducer } from "reduxsauce";
import {
  REQUEST_NOT_STARTED,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_RESOLVED,
} from "../../constants/request";
//Criando actions types & creators

export const {
  Types: EnterprisesTypes,
  Creators: EnterprisesActions,
} = createActions({
  search: ["payload"],
  searchSuccess: ["payload"],
  getEnterprise: ["payload"],
  getEnterpriseSuccess: ["payload"],
  enterprisesRequestSuccess: ["originalType"],
  enterprisesRequestFailure: ["error", "originalType"],
});

//console.log(Types)
//console.log(Creators)

//Criando os Reducer Handlers

const INITIAL_STATE = {
  enterprises: [],
  enterprise: null,
  error: null,
  enterprisesRequests: {
    [EnterprisesTypes.SEARCH]: REQUEST_NOT_STARTED,
    [EnterprisesTypes.GET_ENTERPRISE]: REQUEST_NOT_STARTED,
  },
};

const search = (state) => {
  console.log(" search function");
  return {
    ...state,
    enterprisesRequests: {
      ...state.enterprisesRequests,
      [EnterprisesTypes.SEARCH]: REQUEST_PENDING,
    },
  };
};

const searchSuccess = (state, { payload }) => ({
  ...state,
  enterprises: payload,
  enterprisesRequests: {
    ...state.enterprisesRequests,
    [EnterprisesTypes.SEARCH]: REQUEST_RESOLVED,
  },
});

const getEnterprise = (state) => {
  console.log("getEnterpriseById");
  return {
    ...state,
    enterprisesRequests: {
      ...state.enterprisesRequests,
      [EnterprisesTypes.GET_ENTERPRISE]: REQUEST_PENDING,
    },
  };
};

const getEnterpriseSucess = (state, { payload }) => {
  console.log("getSucess");
  return {
    ...state,
    enterprise: payload,
    enterprisesRequests: {
      ...state.enterprisesRequests,
      [EnterprisesTypes.GET_ENTERPRISE]: REQUEST_RESOLVED,
    },
  };
};

const enterprisesRequestSuccess = (state, { originalType }) => ({
  ...state,
  enterprisesRequests: {
    ...state.enterprisesRequests,
    [originalType]: REQUEST_RESOLVED,
  },
});

const enterprisesRequestFailure = (
  state,
  { error: { response }, originalType }
) => ({
  ...state,
  error: response,
  enterprisesRequests: {
    ...state.enterprisesRequests,
    [originalType]: REQUEST_REJECTED,
  },
});

//Criando Reducer

export default createReducer(INITIAL_STATE, {
  [EnterprisesTypes.SEARCH]: search,
  [EnterprisesTypes.SEARCH_SUCCESS]: searchSuccess,
  [EnterprisesTypes.ENTERPRISES_REQUEST_SUCCESS]: enterprisesRequestSuccess,
  [EnterprisesTypes.ENTERPRISES_REQUEST_FAILURE]: enterprisesRequestFailure,
  [EnterprisesTypes.GET_ENTERPRISE]: getEnterprise,
  [EnterprisesTypes.GET_ENTERPRISE_SUCCESS]: getEnterpriseSucess,
});
