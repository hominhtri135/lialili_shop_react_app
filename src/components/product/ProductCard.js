import { Expand, ShoppingCart } from "lucide-react";

import Currency from "components/Currency";
import IconButton from "components/button/IconButton";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <img
          //   src={data?.image}
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wmoHppYtaIieN-Nu1VggcYEjBiTI3hux7ZqrFFla-7EgX9a-m4SaTLOGD1zGtGxt-_wyL3hwptrwVS4zYKMVxRi_4Z8w=w1003-h368"
          fill="true"
          alt=""
          className="max-h-[276px] aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600"></Expand>}
            ></IconButton>
            <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                ></ShoppingCart>
              }
            ></IconButton>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg inline-block overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {data.title}
        </p>
        <p className="text-sm text-gray-500">{data.category.title}</p>
      </div>

      <div className="flex items-center justify-between ">
        <Currency value={data.price}></Currency>
      </div>
    </div>
  );
};

export default ProductCard;
