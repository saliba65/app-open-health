export const base = process.env.REACT_APP_API_BASE_PATH;

const version = "v1";
const userPrefix = "users";
const enterprisePrefix = "enterprises";

export const baseURL = `${base}/${version}/`;

export const SIGN_IN = `${userPrefix}/auth/sign_in`;

export const ENTERPRISES = name => `${enterprisePrefix}?name=${name}`;
export const ENTERPRISE_BY_ID = id => `${enterprisePrefix}/${id}`;
