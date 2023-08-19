import { API, fetcher } from "apiConfig/apiConfig";

import { NavLink } from "react-router-dom";
import React from "react";
import useSWR from "swr";

// const data = [
//   {
//     id: 1,
//     slug: "suits",
//     name: "Suits",
//   },
//   {
//     id: 2,
//     slug: "shirts",
//     name: "Shirts",
//   },
//   {
//     id: 3,
//     slug: "glasses",
//     name: "Glasses",
//   },
// ];
const MainNavbar = () => {
  const { data: dataAPI } = useSWR(API.getAllCategories, fetcher);
  if (!dataAPI) return null;
  const { categories } = dataAPI;

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {categories.map((route) => (
        <NavLink
          to={`/category/${route.id}`}
          className="text-base transition-colors hover:text-black text-neutral-500"
          style={({ isActive }) =>
            isActive
              ? { fontWeight: "700", color: "black" }
              : { fontWeight: "500" }
          }
          key={route.id}
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default MainNavbar;
