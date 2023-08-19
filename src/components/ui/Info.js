import Button from "components/button/Button";
import Currency from "./Currency";
import React from "react";
import { ShoppingCart } from "lucide-react";

const Info = ({ data }) => {
  console.log("Info ~ data:", data);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price}></Currency>
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>S M L</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div>Xanh</div>
          <div>Đỏ</div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 text-white">
          Add To Cart
          <ShoppingCart></ShoppingCart>
        </Button>
      </div>
    </div>
  );
};

export default Info;
