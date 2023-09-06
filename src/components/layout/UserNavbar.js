import { NavLink, useNavigate } from "react-router-dom";

import React from "react";
import authApi from "api/authApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";

const UserNavbar = () => {
  const authModal = useAuth();
  const cart = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await authApi.logout();
      authModal.onLogout();
      cart.removeAll();
      navigate("/");
      toast.success(`${response?.message}`, {
        id: toastId,
      });
    } catch (error) {
      if (error?.response?.data?.message === "Unauthenticated.") {
        authModal.onLogout();
        cart.removeAll();
        navigate("/");
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
    <div className="border-b-2 pb-10 lg:border-0">
      <p className="pb-6 font-medium text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
        My Account
      </p>
      <div className="flex flex-col px-3 gap-2">
        <NavLink
          to={`/user/profile`}
          className="transition-all hover:font-bold text-neutral-500 hover:text-black px-4 py-3 border-l-2 hover:border-black "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "700",
                  color: "black",
                  borderColor: "black",
                  boxShadow: "5px 5px 15px #c1c8d3",
                }
              : { fontWeight: "500" }
          }
        >
          Profile
        </NavLink>

        <NavLink
          to={`/user/password`}
          className="transition-all hover:font-bold text-neutral-500 hover:text-black px-4 py-3 border-l-2 hover:border-black"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "700",
                  color: "black",
                  borderColor: "black",
                  boxShadow: "5px 5px 15px #c1c8d3",
                }
              : { fontWeight: "500" }
          }
        >
          Change Password
        </NavLink>

        <NavLink
          to={`/user/orders`}
          className="transition-all hover:font-bold text-neutral-500 hover:text-black px-4 py-3 border-l-2 hover:border-black"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "700",
                  color: "black",
                  borderColor: "black",
                  boxShadow: "5px 5px 15px #c1c8d3",
                }
              : { fontWeight: "500" }
          }
        >
          Orders
        </NavLink>

        <div
          className={`transition-all font-medium hover:font-bold text-neutral-500 hover:text-black px-4 py-3 border-l-2 hover:border-black cursor-pointer`}
          onClick={handleLogout}
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
