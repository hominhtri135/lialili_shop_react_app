import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  logout: () => {
    const url = "/auth/logout";
    return axiosClient.get(url);
  },
  register: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },
  emailVerification: (data) => {
    const url = "/account/emailVerification";
    return axiosClient.post(url, data);
  },
  resetPassword: (data) => {
    const url = "/account/resetPassword";
    return axiosClient.post(url, data);
  },
};
export default authApi;
