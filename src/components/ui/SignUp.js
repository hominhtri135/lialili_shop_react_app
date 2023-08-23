import React, { useState } from "react";

import authApi from "api/authApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";

const SignUp = () => {
  const authModal = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    authModal.setType("login");
  };

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
      const response = await authApi.register(formData);

      if (response?.user) {
        localStorage.setItem("user", JSON.stringify(response.user));
        authModal.setIsUserValid(true);

        setFormData({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        });

        authModal.onClose();
        toast.success("Sign Up Success");
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
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              autoComplete="false"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  placeholder="Your name"
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 accent-gray-700"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <div className="inline-block font-medium text-gray-600 hover:underline hover:text-gray-900 cursor-pointer">
                      Terms and Conditions
                    </div>
                  </label>
                </div>
              </div>
              <button
                disabled={isLoading ? true : false}
                className="w-full h-10 flex items-center justify-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-6 text-center"
              >
                {isLoading ? (
                  <div className="w-8 h-8 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  "Create an account"
                )}
              </button>
              <div className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <div
                  className="font-medium text-gray-600 hover:underline hover:text-gray-900 cursor-pointer max-w-fit"
                  onClick={handleLogin}
                >
                  Login here
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
