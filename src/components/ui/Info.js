import { CheckIcon, ChevronsUpDownIcon, ShoppingCart } from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

import Button from "components/button/Button";
import Currency from "./Currency";
import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";

const Info = ({ data }) => {
  console.log("Info ~ data:", data);
  const authModal = useAuth();
  const { isUserValid } = useAuth((state) => state);
  const cart = useCart();

  const onAddToCart = async (event) => {
    event.stopPropagation();
    if (!isUserValid) {
      toast.error("Please login to add to cart");
      authModal.onOpen("login");
      return;
    }

    const toastId = toast.loading("Loading...");
    try {
      const response = await shopApi.addCart(itemCart);
      console.log("onAddToCart ~ response:", response.item);
      cart.addItem(response.item);
      toast.success("Item added to cart", {
        id: toastId,
      });

      // if (response.status === "fails") {
      //   toast.error("Item already in cart.", {
      //     id: toastId,
      //   });
      // } else {
      //   toast.success("This worked", {
      //     id: toastId,
      //   });
      // }

      // toast.promise(response, {
      //   loading: "Loading",
      //   success: (res) => {
      //     console.log("onAddToCart ~ res:", res);
      //     if (res?.status === "fails") {
      //       toast.error("Item already in cart.");
      //     } else {
      //       return `${res?.status}`;
      //     }
      //     toast.dismiss();
      //     // cart.addItem(data);
      //   },
      //   error: (err) => {
      //     return `Error: ${err?.response?.message}`;
      //   },
      // });
    } catch (error) {
      toast.error("Error: " + error?.response?.message, {
        id: toastId,
      });
    }
  };

  const product_attributes = data?.product_attributes;
  const initSizes = [];

  for (let i = 0; i < product_attributes.length; i++) {
    if (!initSizes.includes(product_attributes[i].size)) {
      initSizes.push(product_attributes[i].size);
    }
  }

  const [selectedSize, setSelectedSize] = useState(initSizes[0]);
  const initColors = product_attributes.filter(
    (value) => value.size === selectedSize
  );
  const [colors, setColors] = useState(initColors);
  const [selectedColor, setSelectedColor] = useState(initColors[0]);

  const [quantity, setQuantity] = useState(1);
  const [itemCart, setItemCart] = useState({
    product_attribute_id: selectedColor.id,
    quantity: quantity,
  });

  useEffect(() => {
    const filterColor = product_attributes.filter(
      (value) => value.size === selectedSize
    );
    setColors(filterColor);
    setSelectedColor(colors[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSize]);

  useEffect(() => {
    setItemCart({
      product_attribute_id: selectedColor.id,
      quantity: quantity,
    });
  }, [quantity, selectedColor]);

  console.log("Info ~ selectedColor:", selectedColor);
  console.log("Info ~ itemCart:", itemCart);
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price}></Currency>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        {product_attributes.length > 0 && (
          <div className="flex items-center gap-x-7">
            <h3 className="font-semibold text-black ">Size:</h3>
            <div className="w-full sm:w-1/3 z-20">
              <Listbox value={selectedSize} onChange={setSelectedSize}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm">
                    <span className="block truncate">{selectedSize}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronsUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {initSizes.map((item, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        )}

        {product_attributes.length > 0 && (
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div className="w-full sm:w-1/3 z-10">
              <Listbox value={selectedColor} onChange={setSelectedColor}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm">
                    <span className="block truncate">
                      {selectedColor.color}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronsUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {colors.map((item) => (
                        <Listbox.Option
                          key={item.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.color}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        )}
        {/* <div className="flex items-start gap-x-4 ">
          <h3 className="font-semibold text-black">Description:</h3>
          <p>{data?.description}</p>
        </div> */}
        <div className="flex items-start gap-x-4 ">
          <h3 className="font-semibold text-black">Quantity:</h3>
          <div class="flex items-center border border-gray-200 rounded">
            <button
              type="button"
              class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() =>
                setQuantity(quantity - 1 > 0 ? quantity - 1 : quantity)
              }
            >
              -
            </button>

            <input
              type="number"
              id="Quantity"
              defaultValue={quantity}
              value={quantity}
              onChange={(e) =>
                e.target.value > 0 && e.target.value <= 10
                  ? setQuantity(e.target.value)
                  : setQuantity(1)
              }
              class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              type="button"
              class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() =>
                setQuantity((quantity) =>
                  quantity + 1 <= 10 ? quantity + 1 : quantity
                )
              }
            >
              +
            </button>
          </div>

          <h3 className="font-extralight italic text-black">
            Stock: {selectedColor.stock}
          </h3>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-3">
        <Button
          className={`flex items-center gap-x-2 text-white ${
            selectedColor.stock < quantity && "bg-red-500"
          }`}
          onClick={onAddToCart}
          disabled={selectedColor.stock < quantity ? true : false}
        >
          {selectedColor.stock < quantity ? (
            "Sold Out"
          ) : (
            <>
              Add to Cart
              <ShoppingCart />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Info;
