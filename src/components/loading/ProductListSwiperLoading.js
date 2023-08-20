import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import ProductItemLoading from "./ProductItemLoading";
import React from "react";

const ProductListSwiperLoading = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">
        <Skeleton width={300} height={36}></Skeleton>
      </h3>
      <div className="product-list">
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          modules={[Navigation]}
          navigation={true}
          style={{
            "--swiper-pagination-color": "rgba(0, 0, 0)",
            "--swiper-navigation-color": "rgba(0, 0, 0, .3)",
          }}
        >
          <SkeletonTheme>
            {new Array(4).fill(0).map((item, index) => (
              <SwiperSlide key={index}>
                <ProductItemLoading></ProductItemLoading>
              </SwiperSlide>
            ))}
          </SkeletonTheme>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductListSwiperLoading;
