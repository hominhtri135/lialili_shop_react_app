import { API, fetcher } from "apiConfig/apiConfig";

import Billboard from "components/ui/Billboard";
import Container from "components/layout/Container";
import Filter from "components/filter/Filter";
import MobileFilters from "components/filter/MobileFilters";
import NoResults from "components/layout/NoResults";
import ProductCard from "components/product/ProductCard";
import React from "react";
import { useParams } from "react-router-dom";
import useSWRC from "swr";

const sizes = [
  { id: "1", name: "S" },
  { id: "2", name: "M" },
  { id: "3", name: "L" },
];
const colors = [
  { id: "1", name: "Xanh" },
  { id: "2", name: "Đỏ" },
  { id: "3", name: "Vàng" },
];
const CategoryPage = () => {
  const { idCategory } = useParams();
  const { data } = useSWRC(API.getFilterByCategory(idCategory), fetcher);
  if (!data) return null;
  console.log("CategoryPage ~ data:", data);
  const products = data.items.data;
  console.log("CategoryPage ~ products:", products);

  return (
    <div className="bg-white">
      <Container>
        <Billboard />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
