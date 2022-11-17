export const ACCESS_TOKEN = "access-token";
export const CLIENT = "client";
export const UID = "uid";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    return null;
  }

  const client = localStorage.getItem(CLIENT);
  const uid = localStorage.getItem(UID);

  return { accessToken, client, uid };
};

export const setAccessToken = ({ accessToken, client, uid }) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(CLIENT, client);
  localStorage.setItem(UID, uid);
};

export const isAuthenticated = () => getAccessToken() !== null;
