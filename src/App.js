import "react-loading-skeleton/dist/skeleton.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Fragment, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoadingPage from "pages/LoadingPage";
import Main from "components/layout/Main";
import User from "components/layout/User";
import useAuth from "hooks/useAuth";

// dynamic imports
const CartPage = lazy(() => delayLazy(import("pages/CartPage"), 500));
const CategoryPage = lazy(() => delayLazy(import("pages/CategoryPage"), 500));
const HomePage = lazy(() => delayLazy(import("pages/HomePage"), 500));
const NotFound = lazy(() => delayLazy(import("pages/NotFound"), 500));
const ProductPage = lazy(() => delayLazy(import("pages/ProductPage"), 500));
const ProfilePage = lazy(() => delayLazy(import("pages/ProfilePage"), 500));
const PasswordPage = lazy(() => delayLazy(import("pages/PasswordPage"), 500));
const OrdersPage = lazy(() => delayLazy(import("pages/OrdersPage"), 500));
const OrderDetail = lazy(() => delayLazy(import("pages/OrderDetail"), 500));

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
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <User></User>
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/user/profile" replace />} />
              <Route
                path="profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
              <Route
                path="password"
                element={<PasswordPage></PasswordPage>}
              ></Route>
              <Route path="orders" element={<OrdersPage></OrdersPage>}></Route>
              <Route
                path="order/:orderCode"
                element={<OrderDetail></OrderDetail>}
              ></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

async function delayLazy(promise, time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  }).then(() => promise);
}

function ProtectedRoute({ children }) {
  const { isUserValid } = useAuth((state) => state);
  if (!isUserValid) {
    return <Navigate to="/" />;
  }
  return children;
}
export default App;
