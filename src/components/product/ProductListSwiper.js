import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import React from "react";
import categoryApi from "api/categoryApi";
import useSWR from "swr";

const ProductListSwiper = ({ title, idCategory = 1 }) => {
  const { data: dataRelated } = useSWR(
    [idCategory, { limit: 6 }],
    ([idCategory, params]) => categoryApi.getAllItemById(idCategory, params)
  );

  if (!dataRelated) {
    return null;
  }
  const items = dataRelated?.items?.data;

  return (
    <>
      {items?.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-bold text-3xl">{title}</h3>
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
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item}></ProductCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductListSwiper;
