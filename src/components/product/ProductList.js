import { API, fetcher } from "apiConfig/apiConfig";

import NoResults from "components/layout/NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import useSWR from "swr";

const ProductList = ({ title }) => {
  const { data } = useSWR(API.getAllItems, fetcher);
  if (!data) return null;
  const { data: products } = data.items;
  console.log("ProductList ~ products:", products);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 &&
          products.map((item) => (
            <ProductCard key={item.id} data={item}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
