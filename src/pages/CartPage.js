import React, { useEffect, useState } from "react";

import CartItem from "components/cart/CartItem";
import Container from "components/layout/Container";
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
