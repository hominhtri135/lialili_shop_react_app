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
  getAllItems: () => `${API_URL}/item/getAllItems`,
  getItems: (idProduct) => `${API_URL}/item/getItem/${idProduct}`,
  getAllCategories: () => `${API_URL}/item/getAllCategories`,
  getFilterByCategory: (idCategory) =>
    `${API_URL}/item/filterItemsByCategory/${idCategory}`,
};
