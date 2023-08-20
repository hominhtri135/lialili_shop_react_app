import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import ProductItemLoading from "./ProductItemLoading";
import React from "react";

const ProductListLoading = () => {
  return (
    <SkeletonTheme>
      <div className="space-y-4">
        <h3 className="font-bold text-3xl">
          <Skeleton width={300} height={36}></Skeleton>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {new Array(8).fill(0).map((item, index) => (
            <ProductItemLoading key={index}></ProductItemLoading>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductListLoading;
