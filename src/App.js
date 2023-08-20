import "react-loading-skeleton/dist/skeleton.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Route, Routes } from "react-router-dom";

import CartPage from "pages/CartPage";
import CategoryPage from "pages/CategoryPage";
import { Fragment } from "react";
import HomePage from "pages/HomePage";
import Main from "components/layout/Main";
import NotFound from "pages/NotFound";
import ProductPage from "pages/ProductPage";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
