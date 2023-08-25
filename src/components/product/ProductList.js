import NoResults from "components/layout/NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import { v4 as uuidv4 } from "uuid";
const ProductList = ({ items }) => {
  if (!items) return null;

  return (
    <>
      {items.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.length > 0 &&
          items.map((item) => (
            <ProductCard key={uuidv4()} data={item}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default ProductList;
