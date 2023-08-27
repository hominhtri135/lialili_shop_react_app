import React, { useState } from "react";

import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";
import useShop from "hooks/useShop";

const Checkout = () => {
  const shopModal = useShop();
  const cart = useCart();
  const user = useAuth((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: user.phone || "",
    address: user.address || "",
  });

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await shopApi.checkout(formData);
      if (response.status === "success") {
        setFormData({
          phone: "",
          address: "",
        });

        cart.removeAll();
        shopModal.onClose();
        toast.success("Checkout success");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Error: " + error?.response?.data?.message);
    }
    setIsLoading(false);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Checkout
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{10}"
                defaultValue={user ? user?.phone : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="0123456789"
                required={true}
                onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  id="address"
                  defaultValue={user ? user?.address : ""}
                  placeholder="type your address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 pr-12"
                  required={true}
                  onChange={onChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading ? true : false}
              className="w-full h-10 flex items-center justify-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-6 text-center"
            >
              {isLoading ? (
                <div className="w-8 h-8  border-4 border-white rounded-full animate-spin border-t-transparent"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
