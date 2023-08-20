import ProductItemLoading from "./ProductItemLoading";
import React from "react";

const ProductListLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {new Array(8).fill(0).map((item, index) => (
        <ProductItemLoading key={index}></ProductItemLoading>
      ))}
    </div>
  );
};

export default ProductListLoading;
