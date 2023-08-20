import Gallery from "components/gallery/Gallery";
import Info from "components/ui/Info";
import Modal from "./Modal";
import React from "react";
import useModal from "hooks/useModal";

const PreviewModal = () => {
  const previewModal = useModal();
  const product = useModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 lg:grid-cols-12 lg:gap-x-8">
        <div className="sm:m-[58px] lg:m-0 lg:col-span-5">
          <Gallery idProduct={product.id} />
        </div>
        <div className="sm:m-[58px] lg:m-0 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
