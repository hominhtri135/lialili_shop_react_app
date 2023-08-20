import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from "react";

const ProductItemLoading = () => {
  return (
    <SkeletonTheme>
      <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Skeleton className="aspect-square object-cover w-full rounded-md"></Skeleton>
        </div>

        <div>
          <p className="font-semibold text-lg inline-block overflow-hidden text-ellipsis whitespace-nowrap w-full">
            <Skeleton height={28}></Skeleton>
          </p>
          <p className="text-sm text-gray-500">
            <Skeleton width={50} height={20}></Skeleton>
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <Skeleton width={77} height={24}></Skeleton>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductItemLoading;
