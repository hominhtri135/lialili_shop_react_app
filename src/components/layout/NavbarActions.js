import React, { useEffect, useState } from "react";

import Button from "components/button/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "hooks/useCart";
import { useNavigate } from "react-router-dom";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const navigate = useNavigate();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => {
          navigate(`/cart`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ShoppingBag size={20} color="white"></ShoppingBag>
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items?.length || 0}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
