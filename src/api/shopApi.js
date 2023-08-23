import axiosClient from "./axiosClient";

const shopApi = {
  addCart: (data) => {
    const url = `/shop/addItemsToCart`;
    return axiosClient.post(url, data);
  },
  deleteCartItem: (id) => {
    const url = `/shop/deleteCartItem/${id}`;
    return axiosClient.delete(url);
  },
};
export default shopApi;
