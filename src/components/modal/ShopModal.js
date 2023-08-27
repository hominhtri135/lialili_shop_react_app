import Checkout from "components/ui/Checkout";
import Modal from "./Modal";
import React from "react";
import useShop from "hooks/useShop";

const ShopModal = () => {
  const shopModal = useShop();
  const type = useShop((state) => state.type);

  return (
    <Modal open={shopModal.isOpen} onClose={shopModal.onClose}>
      <div className="w-full">
        {type === "checkout" && <Checkout></Checkout>}
      </div>
    </Modal>
  );
};

export default ShopModal;
