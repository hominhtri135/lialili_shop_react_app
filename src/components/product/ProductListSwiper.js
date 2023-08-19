import { API, fetcher } from "apiConfig/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";

import NoResults from "components/layout/NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import useSWR from "swr";

const ProductListSwiper = ({ title, categoryId = 0 }) => {
  const { data: dataRelated } = useSWR(
    API.getFilterByCategory(categoryId),
    fetcher
  );

  if (!dataRelated) {
    return null;
  }
  const { data: items } = dataRelated.items;

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults></NoResults>}
      <div className="product-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {items.length > 0 &&
            items.map((item) => (
              <SwiperSlide key={item.itemid}>
                <ProductCard data={item}></ProductCard>
              </SwiperSlide>
            ))}

          {/* <ProductCard key={item.id} data={item}></ProductCard> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductListSwiper;
