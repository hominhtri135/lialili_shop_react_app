import React, { useState } from "react";

import authApi from "api/authApi";
import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";

const Login = () => {
  const authModal = useAuth();
  const cart = useCart();
  const dataRemember = JSON.parse(localStorage.getItem("remember"));
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(dataRemember ? true : false);

  const [formData, setFormData] = useState(
    dataRemember
      ? dataRemember
      : {
          email: "",
          password: "",
          role: "customer",
        }
  );

  const handleSignUp = (e) => {
    e.preventDefault();
    authModal.setType("signup");
  };
  const handleForgot = (e) => {
    e.preventDefault();
    authModal.setType("forgot");
  };

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  const onRemember = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checked) {
      localStorage.setItem("remember", JSON.stringify(formData));
    } else {
      localStorage.removeItem("remember");
    }

    try {
      setIsLoading(true);
      const response = await authApi.login(formData);

      if (response?.user) {
        localStorage.setItem("user", JSON.stringify(response.user));
        authModal.setIsUserValid(true);

        setFormData({
          email: "",
          password: "",
          role: "customer",
        });

        try {
          const response = await shopApi.getAllCart();
          cart.setItems(response.cartItems);
        } catch (error) {
          toast.error("ErrorCart: " + error?.response?.message);
        }

        authModal.onClose();
        toast.success("Login success");
      }
      if (response?.message) {
        toast.error("Error: " + response?.message);
      }

      setIsLoading(false);
    } catch (error) {
      toast.error("Error: " + error?.response?.message);
    }
    setIsLoading(false);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={dataRemember ? dataRemember.email : ""}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  onChange={onChange}
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={dataRemember ? dataRemember.password : ""}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 accent-gray-700"
                      required=""
                      onChange={onRemember}
                      defaultChecked={checked}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <div
                  className="text-sm font-medium text-gray-600 hover:underline hover:text-gray-900 cursor-pointer"
                  onClick={handleForgot}
                >
                  Forgot password?
                </div>
              </div>
              <button
                disabled={isLoading ? true : false}
                className="w-full h-10 flex items-center justify-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-6 text-center"
              >
                {isLoading ? (
                  <div className="w-8 h-8  border-4 border-white rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  "Sign in"
                )}
              </button>

              <div className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <div
                  className="font-medium text-gray-600 hover:underline hover:text-gray-900 cursor-pointer max-w-fit"
                  onClick={handleSignUp}
                >
                  Sign up
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
