import { API, fetcher } from "apiConfig/apiConfig";
import { Expand, ShoppingCart } from "lucide-react";

import Currency from "components/ui/Currency";
import IconButton from "components/button/IconButton";
import React from "react";
import useCart from "hooks/useCart";
import useModal from "hooks/useModal";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const ProductCard = ({ data }) => {
  const previewModal = useModal();
  const cart = useCart();
  const navigate = useNavigate();

  const { data: dataImagesProduct } = useSWR(
    API.getProductImage(data?.id),
    fetcher
  );

  const handleClick = () => {
    navigate(`/product/${data?.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPreview = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {dataImagesProduct && (
          <img
            src={`https://down-vn.img.susercontent.com/file/${
              dataImagesProduct[0].image.split(".")[0]
            }`}
            // src={`https://lialili.fly.dev/storage/product_image/${data.image}`}
            // src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzYzE0LWFkajAwOTM3LWFkai1iXzEuanBn.jpg"
            fill="true"
            alt="Product"
            className="aspect-square object-cover w-full rounded-md"
          />
        )}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600"></Expand>}
            ></IconButton>
            <IconButton
              onClick={onAddToCart}
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
        <p className="text-sm text-gray-500">{data?.category?.title}</p>
      </div>

      <div className="flex items-center justify-between ">
        <Currency value={data.price}></Currency>
      </div>
    </div>
  );
};

export default ProductCard;
