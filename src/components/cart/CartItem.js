import Currency from "components/ui/Currency";
import IconButton from "components/button/IconButton";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useCart from "hooks/useCart";
import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CartItem = ({ data }) => {
  const authModal = useAuth();
  const cart = useCart();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(data.quantity);
  const [itemCart, setItemCart] = useState({
    id: data.id,
    quantity: quantity,
  });

  const updateCart = async () => {
    if (quantity > 10 || data.quantity > 10) {
      toast.error("Up to 10 product!");
      return;
    }
    const toastId = toast.loading("Loading...");
    try {
      const response = await shopApi.updateCart(itemCart);

      if (response.message === "success") {
        const newCart = await shopApi.getAllCart();
        cart.setItems(newCart.cartItems);

        toast.success("Item upadate quantity to cart", {
          id: toastId,
        });
      }
    } catch (error) {
      if (error?.response?.data?.message === "Unauthenticated.") {
        authModal.onLogout();
        cart.removeAll();
        toast.error(
          "Token expired, please login and try again" +
            error?.response?.message,
          {
            id: toastId,
          }
        );
        authModal.onOpen("login");
        return;
      }

      toast.error("Error: " + error?.response?.message, {
        id: toastId,
      });
    }
  };

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

  const handleClick = () => {
    navigate(`/product/${data?.product?.slug}-${data?.product?.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setItemCart({
      id: data.id,
      quantity: quantity,
    });
  }, [data.id, quantity]);

  useEffect(() => {
    // setCount((count) => {
    //   return count + 1;
    // });
    // if (count <= 2) {
    //   return;
    // }

    const timer = setTimeout(() => {
      updateCart();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCart]);

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
            <p
              className="text-lg font-semibold text-black cursor-pointer"
              onClick={handleClick}
            >
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
            onClick={() =>
              setQuantity(quantity - 1 > 0 ? quantity - 1 : quantity)
            }
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={quantity}
            onChange={(e) =>
              e.target.value > 0 && e.target.value <= 10
                ? setQuantity(e.target.value)
                : setQuantity(1)
            }
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={() =>
              setQuantity((quantity) =>
                quantity + 1 <= 10 ? quantity + 1 : quantity
              )
            }
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
