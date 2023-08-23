import axiosClient from "./axiosClient";

const productsApi = {
  get: (id) => {
    const url = `/item/getItem/${id}`;
    return axiosClient.get(url);
  },
  getAll: (params) => {
    const url = "/item/getAllItems";
    return axiosClient.get(url, { params });
  },
  getSearch: (filter, params) => {
    const url = `/item/getSearchItems/${filter}`;
    return axiosClient.get(url, { params });
  },
};
export default productsApi;
