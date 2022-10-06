export const base = process.env.REACT_APP_API_BASE_PATH;

const version = "v1";
const userPrefix = "users";
const booksPrefix = "books";

export const baseURL = `${base}/${version}/`;

export const SIGN_IN = `${userPrefix}/auth/sign_in`;

export const BOOKS = name => `${booksPrefix}?name=${name}`;
export const BOOKS_BY_ID = id => `${booksPrefix}/${id}`;
