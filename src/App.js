import "react-loading-skeleton/dist/skeleton.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "components/layout/Main";

// dynamic imports
const CartPage = lazy(() => import("pages/CartPage"));
const CategoryPage = lazy(() => import("pages/CategoryPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const NotFound = lazy(() => import("pages/NotFound"));
const ProductPage = lazy(() => import("pages/ProductPage"));

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route
              path="/category/:idCategory"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route
              path="/product/:idProduct"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
