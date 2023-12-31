import axiosClient from "./axiosClient";

const shopApi = {
  addCart: (data) => {
    const url = `/shop/addItemsToCart`;
    return axiosClient.post(url, data);
  },
  updateCart: (data) => {
    const url = `/shop/updateCartItemQuantity`;
    return axiosClient.put(url, data);
  },
  checkout: (data) => {
    const url = `/shop/orderCheckout`;
    return axiosClient.post(url, data);
  },
  deleteCartItem: (id) => {
    const url = `/shop/deleteCartItem/${id}`;
    return axiosClient.delete(url);
  },
  getAllCart: () => {
    const url = `/shop/getAllCartItems`;
    return axiosClient.get(url);
  },
  getAllOrders: () => {
    const url = `/shop/getAllOrders`;
    return axiosClient.get(url);
  },
  getOrderDetail: (orderCode) => {
    const url = `/shop/getOrderDetail/${orderCode}`;
    return axiosClient.get(url);
  },
};
export default shopApi;
