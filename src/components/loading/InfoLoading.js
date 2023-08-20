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
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>
          <div className="flex justify-start gap-2">
            <Skeleton width={25} height={24}></Skeleton>
            <Skeleton width={25} height={24}></Skeleton>
            <Skeleton width={25} height={24}></Skeleton>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>
          <div className="flex justify-start gap-2">
            <Skeleton width={25} height={24}></Skeleton>
            <Skeleton width={25} height={24}></Skeleton>
            <Skeleton width={25} height={24}></Skeleton>
          </div>
        </div>
        <div className="flex items-start gap-x-4 ">
          <h3 className="font-semibold text-black">
            <Skeleton width={45} height={24}></Skeleton>
          </h3>
          <p className="w-full">
            <Skeleton height={24} count={8}></Skeleton>
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-3">
        <Skeleton width={168} height={48} borderRadius={9999}></Skeleton>
      </div>
    </SkeletonTheme>
  );
};

export default InfoLoading;
