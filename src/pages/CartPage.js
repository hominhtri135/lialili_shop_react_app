import React, { useEffect, useState } from "react";

import CartItem from "components/cart/CartItem";
import Container from "components/layout/Container";
import { Helmet } from "react-helmet-async";
import Summary from "components/cart/Summary";
import shopApi from "api/shopApi";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const authModal = useAuth();
  const { isUserValid } = useAuth((state) => state);
  const cart = useCart();

  const { data, isLoading, error } = useSWR(
    isUserValid ? "getAllCart" : null,
    shopApi.getAllCart,
    {
      refreshInterval: 1000,
    }
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isUserValid && !isLoading) {
      if (error?.response?.data?.message === "Unauthenticated.") {
        cart.removeAll();
        authModal.onLogout();
        return;
      }

      cart.setItems(data.cartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white min-h-[calc(100vh-339px)]">
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) => {}}
        defaultTitle="Lialili Studio"
        titleTemplate="Lialili | %s"
      >
        <title>Cart</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Cart Page`} />
        <meta
          property="og:description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />
        <meta
          property="og:image"
          content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/346500727_1377831933052584_6263561569183124993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=79otJq24iLcAX-cjVqa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7EU9JCK9EGv0L0Hzhz-hIUiiwfBGehe-p4A1KnSGzUw&oe=64ED0F17"
        />
      </Helmet>
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.items.length > 0 &&
                  cart.items.map((item) => (
                    <CartItem key={uuidv4()} data={item} />
                  ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
