import { API, fetcher } from "apiConfig/apiConfig";

import Container from "components/layout/Container";
import Gallery from "components/gallery/Gallery";
import Info from "components/ui/Info";
import ProductListSwiper from "components/product/ProductListSwiper";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const ProductPage = () => {
  const { idProduct } = useParams();

  const { data: dataProduct } = useSWR(
    API.getProductAttribute(idProduct),
    fetcher
  );

  if (!dataProduct) return null;
  const product = dataProduct[0];

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* <Gallery images={product.image}></Gallery> */}
            <Gallery idProduct={product.product_id}></Gallery>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product}></Info>
            </div>
          </div>
          <hr className="my-10" />
          <ProductListSwiper
            title="Related Items"
            categoryId={product.category_id}
          ></ProductListSwiper>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
