import { API, fetcher } from "apiConfig/apiConfig";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Billboard from "components/ui/Billboard";
import CategoryLoading from "components/loading/CategoryLoading";
import Container from "components/layout/Container";
import Filter from "components/filter/Filter";
import MobileFilters from "components/filter/MobileFilters";
import NoResults from "components/layout/NoResults";
import ProductCard from "components/product/ProductCard";
import ReactPaginate from "react-paginate";
import qs from "query-string";
import useSWR from "swr";

const sizes = [
  { id: "1", name: "S", value: "S" },
  { id: "2", name: "M", value: "M" },
  { id: "3", name: "L", value: "L" },
];
const colors = [
  { id: "1", name: "Xanh", value: "Xanh" },
  { id: "2", name: "Đỏ", value: "Đỏ" },
  { id: "3", name: "Vàng", value: "Vàng" },
];

const CategoryPage = () => {
  const { idCategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [nextPage, setNextPage] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [url, setUrl] = useState(
    API.getFilterByCategory(
      idCategory,
      searchParams.get("page") || 1,
      encodeURIComponent(searchParams.get("size")),
      encodeURIComponent(searchParams.get("color"))
    )
  );
  console.log("CategoryPage ~ url:", url);

  const { data, isLoading } = useSWR(url, fetcher);
  console.log("CategoryPage ~ data:", data);

  const products = data?.items?.data || [];
  const total_pages = data?.items?.last_page > 1 ? data?.items?.last_page : 0;

  useEffect(() => {
    setColor(searchParams.get("color"));
    setSize(searchParams.get("size"));

    if (color || size) {
      setUrl(
        API.getFilterByCategory(
          idCategory,
          nextPage,
          encodeURIComponent(size),
          encodeURIComponent(color)
        )
      );
    } else {
      setUrl(API.getFilterByCategory(idCategory, nextPage));
    }
  }, [color, size, nextPage, searchParams, idCategory]);

  useEffect(() => {
    setUrl(API.getFilterByCategory(idCategory));
  }, [idCategory]);

  const handlePageClick = (event) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      page: event.selected + 1,
    };

    setSearchParams(query);

    setNextPage(event.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-white mb-10">
      <Container>
        <div className="min-h-[calc(100vh-146px)]">
          <Billboard />

          <div className="px-4 sm:px-6 lg:px-8 pb-4">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <MobileFilters sizes={sizes} colors={colors} />
              <div className="hidden lg:block">
                <Filter valueKey="size" name="Sizes" data={sizes} />
                <Filter valueKey="color" name="Colors" data={colors} />
              </div>

              {isLoading && <CategoryLoading></CategoryLoading>}
              {!isLoading && (
                <div className="mt-6 lg:col-span-4 lg:mt-0">
                  {products.length === 0 && <NoResults />}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((item) => (
                      <ProductCard key={item.id} data={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={total_pages}
              previousLabel="<"
              initialPage={(parseInt(searchParams.get("page")) || 1) - 1}
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
