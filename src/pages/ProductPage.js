import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Container from "components/layout/Container";
import Gallery from "components/gallery/Gallery";
import GalleryLoading from "components/loading/GalleryLoading";
import { Helmet } from "react-helmet-async";
import Info from "components/ui/Info";
import InfoLoading from "components/loading/InfoLoading";
import ProductListSwiper from "components/product/ProductListSwiper";
import ProductListSwiperLoading from "components/loading/ProductListSwiperLoading";
import productsApi from "api/productsApi";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const ProductPage = () => {
  const { slugProduct } = useParams();
  const idProduct = slugProduct.split("-").pop();

  const { data, isLoading } = useSWR(idProduct, productsApi.get);

  const product = data?.item;

  return (
    <div className="bg-white min-h-[calc(100vh-339px)]">
      {!isLoading && product && (
        <Helmet
          onChangeClientState={(newState, addedTags, removedTags) => {}}
          defaultTitle="Lialili Studio"
          titleTemplate="Lialili | %s"
        >
          <title>{product?.title}</title>
          <link rel="canonical" href={window.location.href} />
          <meta name="description" content={`Sản phẩm ${product?.title}`} />

          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={product?.title} />
          <meta property="og:description" content={product?.description} />
          <meta property="og:image" content={product?.image} />
        </Helmet>
      )}
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {isLoading && <GalleryLoading></GalleryLoading>}
            {!isLoading && <Gallery images={product?.product_images}></Gallery>}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {isLoading && <InfoLoading></InfoLoading>}
              {!isLoading && <Info data={product}></Info>}
            </div>
          </div>

          <div className="my-10">
            <h3 className="font-bold text-3xl">Description</h3>
            <div className="px-5 pt-5">
              {isLoading && (
                <SkeletonTheme>
                  <Skeleton height={24} count={4}></Skeleton>
                </SkeletonTheme>
              )}
              {!isLoading && (product?.description || "No description")}
            </div>
          </div>

          <hr className="my-10" />
          {isLoading && <ProductListSwiperLoading></ProductListSwiperLoading>}
          {!isLoading && (
            <ProductListSwiper
              title="Related Items"
              idCategory={product?.category_id}
            ></ProductListSwiper>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
