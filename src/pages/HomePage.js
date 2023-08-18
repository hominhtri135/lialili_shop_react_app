import Billboard from "components/Billboard";
import Container from "components/layout/Container";
import ProductList from "components/product/ProductList";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard></Billboard>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products"></ProductList>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
