import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

import Button from "components/button/Button";
import { Dialog } from "@headlessui/react";
import IconButton from "components/button/IconButton";
import { NavLink } from "react-router-dom";
import categoryApi from "api/categoryApi";
import useSWR from "swr";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useSWR({}, categoryApi.getAll);
  const categories = data?.categories || [];

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        <AlignJustify size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="py-4">
              {!isLoading &&
                categories.map((route, index) => (
                  <div
                    className="shadow-md border-t py-4 flex items-center justify-center"
                    key={index}
                  >
                    <NavLink
                      to={`/category/${route.id}`}
                      className="text-xl transition-colors hover:text-black text-neutral-500"
                      style={({ isActive }) =>
                        isActive
                          ? { fontWeight: "700", color: "black" }
                          : { fontWeight: "500" }
                      }
                      key={route.id}
                    >
                      {route.title}
                    </NavLink>
                  </div>
                ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileNavbar;
