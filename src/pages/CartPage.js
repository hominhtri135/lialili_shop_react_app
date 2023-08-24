import React, { useEffect, useState } from "react";

import CartItem from "components/cart/CartItem";
import Container from "components/layout/Container";
import { Helmet } from "react-helmet";
import Summary from "components/cart/Summary";
import useCart from "hooks/useCart";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <Helmet
          onChangeClientState={(newState, addedTags, removedTags) => {}}
          defaultTitle="LIALILI"
          titleTemplate="LIALILI | %s"
        >
          <meta property="og:url" content="https://dev.lialili.com/" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Lialili Studio" />
          <meta
            property="og:description"
            content="Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM"
          />

          <meta
            property="og:image"
            content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/346500727_1377831933052584_6263561569183124993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=79otJq24iLcAX-cjVqa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7EU9JCK9EGv0L0Hzhz-hIUiiwfBGehe-p4A1KnSGzUw&oe=64ED0F17"
          />
        </Helmet>
        <div className="px-4 py-16 sm:px-6 lg:px-8 min-h-[calc(100vh-146px)]">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.items.length > 0 &&
                  cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
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
