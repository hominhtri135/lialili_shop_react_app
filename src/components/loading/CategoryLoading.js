import ProductItemLoading from "./ProductItemLoading";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { v4 as uuidv4 } from "uuid";
const CategoryLoading = () => {
  return (
    <SkeletonTheme>
      <div className="mt-6 lg:col-span-4 lg:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {new Array(6).fill(0).map((item) => (
            <ProductItemLoading key={uuidv4()}></ProductItemLoading>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CategoryLoading;
