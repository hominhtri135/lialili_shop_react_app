import Button from "components/button/Button";
import Currency from "components/ui/Currency";
import { toast } from "react-hot-toast";
import useCart from "hooks/useCart";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useShop from "hooks/useShop";

const Summary = () => {
  const [searchParams] = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const shopModal = useShop();
  const isOpen = useShop((state) => state.isOpen);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item?.product?.price) * Number(item?.quantity);
  }, 0);

  const onCheckout = () => {
    shopModal.onOpen();
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0 || isOpen}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
