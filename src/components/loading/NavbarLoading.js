import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from "react";
import { v4 as uuidv4 } from "uuid";
const NavbarLoading = () => {
  return (
    <SkeletonTheme>
      <div className="text-base transition-colors hover:text-black text-neutral-500 flex gap-6">
        {new Array(3).fill(0).map((item) => (
          <Skeleton width={63} height={24} key={uuidv4()}></Skeleton>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default NavbarLoading;
