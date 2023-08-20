import Button from "components/button/Button";
import Currency from "./Currency";
import React from "react";
import { ShoppingCart } from "lucide-react";
import useCart from "hooks/useCart";

const Info = ({ data }) => {
  console.log("Info ~ data:", data);

  const cart = useCart();
  const onAddToCart = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price}></Currency>
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="flex justify-start gap-4">
            {data?.product_attributes.map((item) => (
              <div key={item.id}>{item.size}</div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="flex justify-start gap-4">
            {data?.product_attributes.map((item) => (
              <div key={item.id}>{item.color}</div>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-x-4 ">
          <h3 className="font-semibold text-black">Description:</h3>
          <p>{data?.description}</p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-3">
        <Button
          className="flex items-center gap-x-2 text-white"
          onClick={onAddToCart}
        >
          Add To Cart
          <ShoppingCart></ShoppingCart>
        </Button>
      </div>
    </div>
  );
};

export default Info;
