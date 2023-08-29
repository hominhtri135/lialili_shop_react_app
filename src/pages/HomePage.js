import { ArrowBigLeft, ArrowBigRight, Search } from "lucide-react";
import React, { useState } from "react";

import Billboard from "components/ui/Billboard";
import Container from "components/layout/Container";
import { Helmet } from "react-helmet-async";
import ProductList from "components/product/ProductList";
import ProductListLoading from "components/loading/ProductListLoading";
import ReactPaginate from "react-paginate";
import { debounce } from "lodash";
import productsApi from "api/productsApi";
import useSWR from "swr";

const HomePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");

  const { data, isLoading } = useSWR(
    filter ? [filter, { page: nextPage }] : { page: nextPage },
    filter
      ? ([filter, params]) => productsApi.getSearch(filter, params)
      : productsApi.getAll
  );

  const products = data?.items?.data || [];
  const total_pages = data?.items?.last_page > 1 ? data?.items?.last_page : 0;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setNextPage(1);
  };

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-[calc(100vh-339px)]">
      <Container>
        <Helmet>
          <title>Lialili Studio</title>
          <link rel="canonical" href={window.location.href} />
          <meta
            name="description"
            content="Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh"
          />

          <meta property="og:url" content="https://dev.lialili.com/" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Lialili Studio" />
          <meta
            property="og:description"
            content="Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh"
          />

          <meta property="og:image" content="%PUBLIC_URL%/Lialili_LogoFB.jpg" />
          <meta property="og:image:alt" content="Logo Lialili" />
        </Helmet>

        <div className="space-y-10 pb-10">
          <Billboard></Billboard>

          <div className="flex mb-10 px-4 sm:px-6 lg:px-8">
            <input
              type="text"
              className="w-full p-4 outline-none border border-gray-300 rounded-lg rounded-r-none"
              placeholder="Type here to search..."
              defaultValue={filter}
              onChange={debounce(handleFilterChange, 500)}
            />
            <button className="p-4 bg-black rounded-lg text-white rounded-l-none">
              <Search size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h3 className="font-bold text-3xl">Featured Products</h3>
              {isLoading && <ProductListLoading></ProductListLoading>}
              {!isLoading && <ProductList items={products}></ProductList>}
            </div>
          </div>

          <div className="mt-20">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ArrowBigRight size={24} />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={total_pages}
              previousLabel={<ArrowBigLeft size={24} />}
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
