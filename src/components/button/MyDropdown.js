import { ClipboardList, LogOut, UserCog2 } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";
import authApi from "api/authApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";
import { useNavigate } from "react-router-dom";

// import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MyDropdown = () => {
  const authModal = useAuth();
  const cart = useCart();
  const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await authApi.logout();
      authModal.onLogout();
      cart.removeAll();
      toast.success(`${response?.message}`, {
        id: toastId,
      });
    } catch (error) {
      if (error?.response?.data?.message === "Unauthenticated.") {
        authModal.onLogout();
        cart.removeAll();
        toast.success(`Logged out`, {
          id: toastId,
        });
        return;
      }
      toast.error(`Error: ${error?.response?.data?.message}`, {
        id: toastId,
      });
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-10 ">
      <div>
        <Menu.Button className="min-w-[73px] border-gray-400 border-2 rounded-full text-xs h-full text-gray-400 px-4 py-2 flex gap-2 items-center justify-center hover:bg-white hover:text-black hover:border-transparent">
          {user.name}
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
        <Menu.Items className="min-w-max absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => {
                    navigation("/user/profile");
                  }}
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
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => {
                    navigation("/user/purchase");
                  }}
                >
                  {active ? (
                    <ClipboardList className="mr-2 h-5 w-5"></ClipboardList>
                  ) : (
                    <ClipboardList className="mr-2 h-5 w-5"></ClipboardList>
                  )}
                  My Purchase
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
