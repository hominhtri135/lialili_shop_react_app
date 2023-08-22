import { LogOut, UserCog2 } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

import { API } from "apiConfig/apiConfig";
import { Fragment } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";

// import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MyDropdown = () => {
  const authModal = useAuth();
  const cart = useCart();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    try {
      const response = axios.get(API.logout(), {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      toast.promise(response, {
        loading: "Loading",
        success: (res) => {
          authModal.onLogout();
          cart.removeAll();
          return `${res?.data?.message}`;
        },
        error: (err) => {
          return `Error: ${err?.response?.data?.message}`;
        },
      });
    } catch (error) {}
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="border-gray-400 border-2 rounded-full text-xs h-full text-gray-400 px-4 py-2 flex gap-2 items-center justify-center hover:bg-white hover:text-black hover:border-transparent">
          {user.email}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="min-w absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <UserCog2 className="mr-2 h-5 w-5"></UserCog2>
                  ) : (
                    <UserCog2 className="mr-2 h-5 w-5"></UserCog2>
                  )}
                  My Profile
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={handleLogout}
                >
                  {active ? (
                    <LogOut className="mr-2 h-5 w-5"></LogOut>
                  ) : (
                    <LogOut className="mr-2 h-5 w-5"></LogOut>
                  )}
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MyDropdown;
