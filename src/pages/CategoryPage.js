import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Billboard from "components/ui/Billboard";
import CategoryLoading from "components/loading/CategoryLoading";
import Container from "components/layout/Container";
import Filter from "components/filter/Filter";
import { Helmet } from "react-helmet";
import MobileFilters from "components/filter/MobileFilters";
import NoResults from "components/layout/NoResults";
import ProductCard from "components/product/ProductCard";
import ReactPaginate from "react-paginate";
import categoryApi from "api/categoryApi";
import qs from "query-string";
import useSWR from "swr";

const sizes = [
  { id: "1", name: "S", value: "S" },
  { id: "2", name: "M", value: "M" },
  { id: "3", name: "L", value: "L" },
  { id: "2", name: "XL", value: "XL" },
];
const colors = [
  { id: "1", name: "Đen", value: "Đen" },
  { id: "2", name: "Trắng", value: "Trắng" },
  { id: "3", name: "Đỏ", value: "Đỏ" },
  { id: "4", name: "Cam", value: "Cam" },
  { id: "5", name: "Vàng", value: "Vàng" },
  { id: "6", name: "Hồng", value: "Hồng" },
  { id: "7", name: "Tím", value: "Tím" },
  { id: "8", name: "Xanh Lá", value: "Xanh Lá" },
  { id: "9", name: "Xanh Dương", value: "Xanh Dương" },
];

const CategoryPage = () => {
  const { idCategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [nextPage, setNextPage] = useState(1);

  const [params, setParams] = useState({
    color: searchParams.get("color"),
    size: searchParams.get("size"),
    page: searchParams.get("page") || 1,
  });
  const { data, isLoading } = useSWR(
    [idCategory, params],
    ([idCategory, params]) => categoryApi.getAllItemById(idCategory, params)
  );
  const products = data?.items?.data || [];
  const total_pages = data?.items?.last_page > 1 ? data?.items?.last_page : 0;

  useEffect(() => {
    setParams({
      color: searchParams.get("color"),
      size: searchParams.get("size"),
      page: nextPage,
    });
  }, [nextPage, searchParams, idCategory]);

  const handlePageClick = (event) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      page: event.selected + 1,
    };

    setSearchParams(query);

    setNextPage(event.selected + 1);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0 });
  };

  function createMetaTagFacebook(type, title, description, image) {
    const metaTagFaceBook = [];
    if (type) metaTagFaceBook.push({ property: "og:type", content: type });
    if (title) metaTagFaceBook.push({ property: "og:title", content: title });
    if (description)
      metaTagFaceBook.push({
        property: "og:description",
        content: description,
      });
    if (image) metaTagFaceBook.push({ property: "og:image", content: image });
    return metaTagFaceBook;
  }

  return (
    <div className="bg-white mb-10">
      {!isLoading && products && (
        <Helmet
          onChangeClientState={(newState, addedTags, removedTags) => {}}
          defaultTitle="LIALILI"
          titleTemplate="LIALILI | %s"
        >
          <title>{products?.category?.title}</title>
          <meta name="description" content="Category Page" />
          {createMetaTagFacebook(
            "article",
            products?.category?.title,
            products?.category?.title,
            "/Lialili-01.jpg"
          ).map((item, index) => {
            return (
              <meta
                property={item.property}
                content={`${item.content}`}
                key={index}
              />
            );
          })}
        </Helmet>
      )}
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
