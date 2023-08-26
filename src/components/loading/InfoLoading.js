import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from "react";

const InfoLoading = () => {
  return (
    <SkeletonTheme>
      <h1 className="text-3xl font-bold text-gray-900">
        <Skeleton width={550} height={36}></Skeleton>
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Skeleton width={115} height={32}></Skeleton>
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        {/* size */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>
          <div className="w-full sm:w-1/3 z-10">
            <Skeleton height={36}></Skeleton>
          </div>
        </div>

        {/* color */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>
          <div className="w-full sm:w-1/3 z-10">
            <Skeleton height={36}></Skeleton>
          </div>
        </div>

        {/* quantity */}
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>

          <Skeleton width={146} height={42}></Skeleton>

          <h3 className="font-extralight italic text-black">
            <Skeleton width={70} height={24}></Skeleton>
          </h3>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-3">
        <Skeleton width={168} height={48} borderRadius={9999}></Skeleton>
      </div>
    </SkeletonTheme>
  );
};

export default InfoLoading;
