import { API, fetcher } from "apiConfig/apiConfig";

import Billboard from "components/ui/Billboard";
import Container from "components/layout/Container";
import ProductList from "components/product/ProductList";
import React from "react";
import useSWR from "swr";

const HomePage = () => {
  const { data } = useSWR(API.getAllItems, fetcher);
  if (!data) return null;
  const { data: products } = data.items;

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard></Billboard>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}></ProductList>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
