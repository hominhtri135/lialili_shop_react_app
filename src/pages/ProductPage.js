import { API, fetcher } from "apiConfig/apiConfig";

import Container from "components/layout/Container";
import Gallery from "components/gallery/Gallery";
import Info from "components/ui/Info";
import ProductList from "components/product/ProductList";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const data = {
  itemid: 23850750383,
  shopid: 73642108,
  name: "LIALILI.STUDIO | Đầm lụa gấm cổ tim cao cấp",
  image: "vn-11134207-7qukw-lk7q5iuu4zcyf7",
  images: [
    "vn-11134207-7qukw-lk7q5iuu4zcyf7",
    "vn-11134207-7qukw-lk7q5iv44kqq4c",
    "vn-11134207-7qukw-lk7q5iuukflue0",
    "vn-11134207-7qukw-lk7q5iv44kvob5",
    "vn-11134207-7qukw-lk7q5iuu4zhw4b",
  ],
  tier_variations: [
    {
      name: "Màu sắc",
      options: ["Hoạ tiết như hình"],
      images: ["vn-11134207-7qukw-lk7q5iuu6dxe34"],
      type: 0,
    },
    {
      name: "Kích cỡ",
      options: ["S", "M", "L"],
      type: 0,
    },
  ],
};

const ProductPage = () => {
  const { idProduct } = useParams();
  const { data: dataProduct } = useSWR(API.getItems(idProduct), fetcher);
  const { data: dataRelated } = useSWR(
    API.getFilterByCategory(dataProduct?.item?.category_id),
    fetcher
  );

  if (!dataProduct || !dataRelated) {
    return null;
  }
  const product = dataProduct.item;
  console.log("ProductsPage ~ idProduct:", idProduct);
  console.log("ProductPage ~ data:", product);

  const { data: products } = dataRelated.items;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* <Gallery images={product.image}></Gallery> */}
            <Gallery images={data.images}></Gallery>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={{ ...product, ...data }}></Info>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={products}></ProductList>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
