import ProductItemLoading from "./ProductItemLoading";
import React from "react";
import { v4 as uuidv4 } from "uuid";
const ProductListLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {new Array(8).fill(0).map((item) => (
        <ProductItemLoading key={uuidv4()}></ProductItemLoading>
      ))}
    </div>
  );
};

export default ProductListLoading;
