import axiosClient from "./axiosClient";

const userApi = {
  getProfileData: () => {
    const url = "/user/getProfileData";
    return axiosClient.get(url);
  },
  updateProfile: (data) => {
    const url = "/user/updateProfile";
    return axiosClient.post(url, data);
  },
};
export default userApi;
