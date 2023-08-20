import { API, fetcher } from "apiConfig/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import React from "react";
import useSWR from "swr";

const ProductListSwiper = ({ title, categoryId = 0 }) => {
  const { data: dataRelated } = useSWR(
    API.getFilterByCategory(categoryId),
    fetcher
  );
  console.log("ProductListSwiper ~ dataRelated:", dataRelated);

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
                <SwiperSlide key={item.itemid}>
                  <ProductCard data={item}></ProductCard>
                </SwiperSlide>
              ))}

              {/* <ProductCard key={item.id} data={item}></ProductCard> */}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductListSwiper;
