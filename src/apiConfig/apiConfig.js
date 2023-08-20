export const fetcher = (url, method = "GET", token = "") => {
  const options = {
    method: method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: data ? JSON.stringify(data) : {},
  };

  return fetch(url, options).then((res) => res.json());
};

const API_URL = process.env.REACT_APP_API_URL;

export const API = {
  getAllItems: (page = 1) => `${API_URL}/item/getAllItems?page=${page}`,
  getItems: (idProduct) => `${API_URL}/item/getItem/${idProduct}`,
  getProductAttribute: (idProduct) =>
    `${API_URL}/item/getProductAttribute/${idProduct}`,
  getProductImage: (idProduct) =>
    `${API_URL}/item/getProductImage/${idProduct}`,
  getAllCategories: () => `${API_URL}/item/getAllCategories`,
  getFilterByCategory: (idCategory, page = 1, size = "", color = "") => {
    let url = `${API_URL}/item/filterItemsByCategory/${idCategory}?page=${page}`;
    if (size && size !== "" && size !== "null") url = url + `&size=${size}`;
    if (color && size !== "" && color !== "null") url = url + `&color=${color}`;
    return url;
  },
  getSearchItems: (filter, page = 1) =>
    `${API_URL}/item/getSearchItems/${filter}?page=${page}`,
};
