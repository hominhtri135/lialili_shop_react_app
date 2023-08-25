import { NavLink } from "react-router-dom";
import NavbarLoading from "components/loading/NavbarLoading";
import React from "react";
import categoryApi from "api/categoryApi";
import useSWR from "swr";
import Slugify from "components/ui/VietnameseSlug";
import { v4 as uuidv4 } from "uuid";

const MainNavbar = () => {
  const { data, isLoading } = useSWR({}, categoryApi.getAll);
  const categories = data?.categories || [];

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {isLoading && <NavbarLoading></NavbarLoading>}
      {!isLoading &&
        categories.map((route) => (
          <NavLink
            to={`/category/${Slugify(route.title || "")}-${route.id}`}
            className="text-base transition-colors hover:text-black text-neutral-500"
            style={({ isActive }) =>
              isActive
                ? { fontWeight: "700", color: "black" }
                : { fontWeight: "500" }
            }
            key={uuidv4()}
          >
            {route.title}
          </NavLink>
        ))}
    </div>
  );
};

export default MainNavbar;
