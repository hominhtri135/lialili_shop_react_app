import ProductItemLoading from "./ProductItemLoading";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const CategoryLoading = () => {
  return (
    <SkeletonTheme>
      <div className="mt-6 lg:col-span-4 lg:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {new Array(6).fill(0).map((item, index) => (
            <ProductItemLoading key={index}></ProductItemLoading>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CategoryLoading;
