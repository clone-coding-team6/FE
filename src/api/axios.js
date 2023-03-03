import api from "./instance";

const makeHeaders = (accessToken) => {
  return { Authorization: `Bearer  ${accessToken}` };
};

export const signup = async (newUser) => {
  try {
    const res = await api.post(
      `${process.env.REACT_APP_SERVER_URL}/api/users/signup`,
      newUser
    );
    return res;
  } catch (err) {
    if (api.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const login = async (user) => {
  try {
    const res = await api.post(
      `${process.env.REACT_APP_SERVER_URL}/api/users/login`,
      user
    );
    return res;
  } catch (err) {
    if (api.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};