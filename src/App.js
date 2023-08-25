import "react-loading-skeleton/dist/skeleton.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingPage from "pages/LoadingPage";
import Main from "components/layout/Main";

// dynamic imports
const CartPage = lazy(() => delayLazy(import("pages/CartPage"), 500));
const CategoryPage = lazy(() => delayLazy(import("pages/CategoryPage"), 500));
const HomePage = lazy(() => delayLazy(import("pages/HomePage"), 500));
const NotFound = lazy(() => delayLazy(import("pages/NotFound"), 500));
const ProductPage = lazy(() => delayLazy(import("pages/ProductPage"), 500));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route
              path="/category/:slugCategory"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route
              path="/product/:slugProduct"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

function delayLazy(promise, time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  }).then(() => promise);
}

export default App;
