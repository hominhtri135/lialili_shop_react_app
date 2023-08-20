import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import React from "react";
import qs from "query-string";

const Filter = ({ data, name, valueKey }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const selectedValue = searchParams.get(valueKey);
  console.log("Filter ~ selectedValue:", selectedValue);
  const navigate = useNavigate();

  const onClick = (id) => {
    const current = qs.parse(searchParams.toString());
    console.log("onClick ~ current:", current);
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    if (current["page"]) {
      query["page"] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: location.pathname,
        query,
      },
      { skipNull: true }
    );

    navigate(url);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            {/* <Button
              className={`rounded-md text-sm p-2 border border-gray-300 ${
                selectedValue === filter.id
                  ? "text-white"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button> */}
            <button
              className={`w-auto px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition rounded-md font-semibold text-sm border border-gray-300 ${
                selectedValue === filter.value
                  ? "bg-black text-white"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => onClick(filter.value)}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
