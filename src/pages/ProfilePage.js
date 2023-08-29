import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import userApi from "api/userApi";

const ProfilePage = () => {
  const authModal = useAuth();
  const { user } = useAuth((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const initialData = {
    name: user.name,
    address: user.address,
    phone: user.phone,
    avatar: "",
  };
  const [formData, setFormData] = useState(initialData);

  const onChange = (e) => {
    setIsDisable(false);
    setFormData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit ~ formData:", formData);
    try {
      setIsLoading(true);
      const response = await userApi.updateProfile(formData);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, ...response.user[0] })
      );
      authModal.setUser({ ...user, ...response.user[0] });
      setIsDisable(true);

      toast.success("Update success");

      setIsLoading(false);
    } catch (error) {
      console.log("handleSubmit ~ error:", error);
      toast.error("Error: " + error?.response?.data?.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50 w-full h-full">
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) => {}}
        defaultTitle="Lialili Studio"
        titleTemplate="Lialili | %s"
      >
        <title>Profile</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Cart Page`} />
        <meta
          property="og:description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />
        <meta
          property="og:image"
          content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/346500727_1377831933052584_6263561569183124993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=79otJq24iLcAX-cjVqa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7EU9JCK9EGv0L0Hzhz-hIUiiwfBGehe-p4A1KnSGzUw&oe=64ED0F17"
        />
      </Helmet>
      <div className="p-8 border border-gray-600">
        <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
          Account Details
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-x-5">
            {/* <div className="col-span-12 mb-5">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </label>
                <input id="dropzone-file" type="file" className="hidden" />
              </div>
            </div> */}

            <div className="col-span-12 lg:col-span-6 mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="Test"
                defaultValue={user?.name || ""}
                required={true}
                onChange={onChange}
              />
            </div>

            <div className="col-span-12 lg:col-span-6 mb-5">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                className="bg-gray-50 border border-gray-300 italic text-gray-600 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="Customer"
                defaultValue={user?.role || ""}
                disabled={true}
                required={true}
              />
            </div>

            <div className="col-span-12 mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 italic text-gray-600 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="name@company.com"
                defaultValue={user?.email || ""}
                disabled={true}
                required={true}
              />
            </div>

            <div className="col-span-12 mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{10}"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="0123456789"
                defaultValue={user?.phone || ""}
                onChange={onChange}
              />
            </div>

            <div className="col-span-12 mb-5">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="Your address"
                onChange={onChange}
                defaultValue={user?.address || ""}
              />
            </div>

            <div className="col-span-12">
              <button
                type="submit"
                disabled={isDisable || isLoading}
                className={`w-full h-10 flex items-center justify-center uppercase text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-6 text-center ${
                  isDisable || isLoading
                    ? "bg-gray-600"
                    : "bg-black hover:bg-gray-700"
                }`}
              >
                {isLoading ? (
                  <div className="w-8 h-8  border-4 border-white rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
