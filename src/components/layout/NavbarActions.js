import React, { useEffect, useState } from "react";

import Button from "components/button/Button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white"></ShoppingBag>
        <span className="ml-2 text-sm font-medium text-white">2</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
