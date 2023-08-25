import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from "react";
import { v4 as uuidv4 } from "uuid";
const GalleryLoading = () => {
  return (
    <SkeletonTheme>
      <div className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <div className="grid grid-cols-4 xl:grid-cols-5 gap-6">
            {new Array(4).fill(0).map((item) => (
              <div className="relative flex aspect-square" key={uuidv4()}>
                <span className="absolute h-full w-full aspect-square">
                  <Skeleton className="object-cover object-center w-full h-full"></Skeleton>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-square w-full">
          <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
            <Skeleton className="object-cover object-center w-full h-full"></Skeleton>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default GalleryLoading;
