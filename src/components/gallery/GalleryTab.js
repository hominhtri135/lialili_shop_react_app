import React from "react";
import { Tab } from "@headlessui/react";

// https://down-vn.img.susercontent.com/file/sg-11134201-23010-icsjdqce05lve1

const GalleryTab = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <img
              src={`${image}`}
              // src={`https://lialili.fly.dev/storage/products/${image}`}
              // src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzYzE0LWFkajAwOTM3LWFkai1iXzEuanBn.jpg"
              alt="Lialili Product"
              fill="true"
              className="object-cover object-center w-full"
            />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${
              selected ? "ring-black" : "ring-transparent"
            }`}
          ></span>
        </>
      )}
    </Tab>
  );
};

export default GalleryTab;
