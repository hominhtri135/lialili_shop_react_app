import authApi from "api/authApi";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const EmailVerification = () => {
  const authModal = useAuth();
  const dataRemember = JSON.parse(localStorage.getItem("remember"));
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(
    dataRemember
      ? { email: dataRemember.email }
      : {
          email: "",
        }
  );

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
      const response = await authApi.emailVerification(formData);

      if (response?.token) {
        localStorage.setItem(
          "emailVerification",
          JSON.stringify({
            ...formData,
            token: response.token,
          })
        );

        setFormData({
          email: "",
        });

        authModal.setType("forgotPassword");
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
        <div className="w-full p-6 bg-white rounded-lg shadow sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Forgot password
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
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
                defaultValue={dataRemember ? dataRemember.email : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="name@company.com"
                required={true}
                onChange={onChange}
              />
            </div>

            <button
              disabled={isLoading ? true : false}
              className="w-full h-10 flex items-center justify-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-6 text-center"
            >
              {isLoading ? (
                <div className="w-8 h-8  border-4 border-white rounded-full animate-spin border-t-transparent"></div>
              ) : (
                "Confirm"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailVerification;
