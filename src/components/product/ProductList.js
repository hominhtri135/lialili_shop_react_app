import { API, fetcher } from "apiConfig/apiConfig";

import NoResults from "components/layout/NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import useSWR from "swr";

const ProductList = ({ title, items }) => {
  if (!items) return null;
  console.log("ProductList ~ products:", items);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.length > 0 &&
          items.map((item) => (
            <ProductCard key={item.id} data={item}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
