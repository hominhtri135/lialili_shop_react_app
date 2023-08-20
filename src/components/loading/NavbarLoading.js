import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from "react";

const NavbarLoading = () => {
  return (
    <SkeletonTheme>
      <div className="text-base transition-colors hover:text-black text-neutral-500 flex gap-6">
        {new Array(3).fill(0).map((item, index) => (
          <Skeleton width={63} height={24} key={index}></Skeleton>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default NavbarLoading;
