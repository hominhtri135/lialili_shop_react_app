import React, { useEffect, useState } from "react";

import AuthModal from "components/modal/AuthModal";
import PreviewModal from "components/modal/PreviewModal";

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
    </>
  );
};

export default ModalProvider;
