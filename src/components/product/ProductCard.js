import { Expand, ShoppingCart } from "lucide-react";

import Currency from "components/ui/Currency";
import IconButton from "components/button/IconButton";
import React from "react";
import shopApi from "api/shopApi";
import { toast } from "react-hot-toast";
import useAuth from "hooks/useAuth";
import useCart from "hooks/useCart";
import { useNavigate } from "react-router-dom";
import useProduct from "hooks/useProduct";

const ProductCard = ({ data }) => {
  const previewModal = useProduct();
  const authModal = useAuth((state) => state);
  const { isUserValid } = useAuth((state) => state);

  const cart = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${data?.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPreview = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart = async (event) => {
    event.stopPropagation();
    if (!isUserValid) {
      toast.error("Please login to add to cart");
      authModal.onOpen("login");
      return;
    }

    const toastId = toast.loading("Loading...");

    try {
      const itemCart = {
        product_attribute_id: data?.product_attributes[0]?.id,
        quantity: 1,
      };

      const response = await shopApi.addCart(itemCart);
      console.log("ProductCard ~ response:", response);
      cart.addItem(response.item);
      toast.success("Item added to cart", {
        id: toastId,
      });
    } catch (error) {
      toast.error("Error: " + error?.response?.message, {
        id: toastId,
      });
    }
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {data && (
          <img
            // src={`https://down-vn.img.susercontent.com/file/${
            //   dataImagesProduct[0].image.split(".")[0]
            // }`}
            src={`${data?.image}`}
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
        <Currency value={data?.price}></Currency>
      </div>
    </div>
  );
};

export default ProductCard;
