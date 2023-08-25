import Currency from "components/ui/Currency";
import IconButton from "components/button/IconButton";
import React from "react";
import { X } from "lucide-react";
import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useCart from "hooks/useCart";

const CartItem = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    try {
      const response = shopApi.deleteCartItem(data.id);
      toast.promise(response, {
        loading: "Loading",
        success: (res) => {
          cart.removeItem(data.id);
          return `Item removed from cart. ${res?.message}`;
        },
        error: (err) => {
          return `Error: ${err?.message}`;
        },
      });
    } catch (error) {}
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        {data && (
          <img
            fill="true"
            src={`${data?.product?.image}`}
            alt=""
            className="object-cover object-center"
          />
        )}
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data?.product?.title}
            </p>
          </div>

          <div className="mt-1 flex justify-start sm:justify-center text-sm">
            <p className="text-gray-500">
              {data?.product_attributes?.color} |{" "}
              {data?.product_attributes?.size}
            </p>
          </div>
          <Currency value={data?.product?.price} />
        </div>
        <div className="flex items-center border border-gray-200 rounded w-fit">
          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={data?.quantity}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
