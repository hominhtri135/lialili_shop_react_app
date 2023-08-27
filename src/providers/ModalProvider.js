import React, { useEffect, useState } from "react";

import AuthModal from "components/modal/AuthModal";
import PreviewModal from "components/modal/PreviewModal";
import ShopModal from "components/modal/ShopModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
      <AuthModal />
      <ShopModal />
    </>
  );
};

export default ModalProvider;
