import Gallery from "components/gallery/Gallery";
import Info from "components/ui/Info";
import Modal from "./Modal";
import React from "react";
import useModal from "hooks/useModal";

const PreviewModal = () => {
  const previewModal = useModal();
  const product = useModal((state) => state.data);
  console.log("PreviewModal ~ product:", product);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery idProduct={product.id} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
