import { API, fetcher } from "apiConfig/apiConfig";

import Billboard from "components/ui/Billboard";
import Container from "components/layout/Container";
import ProductList from "components/product/ProductList";
import ProductListLoading from "components/loading/ProductListLoading";
import React from "react";
import useSWR from "swr";

const HomePage = () => {
  const { data, isLoading } = useSWR(API.getAllItems, fetcher);
  const products = data?.items?.data;

  return (
    <Container>
      <div className="space-y-10 pb-10 min-h-[calc(100vh-146px)]">
        <Billboard></Billboard>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {isLoading && <ProductListLoading></ProductListLoading>}

          {!isLoading && (
            <ProductList
              title="Featured Products"
              items={products}
            ></ProductList>
          )}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
