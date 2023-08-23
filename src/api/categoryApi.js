import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: (params) => {
    const url = `item/getAllCategories`;
    return axiosClient.get(url, { params });
  },
  getAllItemById: (idCategory, params) => {
    const url = `/item/filterItemsByCategory/${idCategory}`;
    return axiosClient.get(url, { params });
  },
};
export default categoryApi;
