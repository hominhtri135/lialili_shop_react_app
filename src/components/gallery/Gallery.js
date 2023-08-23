import GalleryTab from "./GalleryTab";
import React from "react";
import { Tab } from "@headlessui/react";

const Gallery = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 xl:grid-cols-5 gap-6">
          {images?.length > 0 &&
            images.map((item) => (
              <GalleryTab image={item.image} key={item.id}></GalleryTab>
            ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images?.length > 0 &&
          images.map((item) => (
            <Tab.Panel key={item.id}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <img
                  // src={`https://down-vn.img.susercontent.com/file/${
                  //   item.image.split(".")[0]
                  // }`}
                  src={`${item.image}`}
                  // src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzYzE0LWFkajAwOTM3LWFkai1iXzEuanBn.jpg"
                  alt=""
                  fill="true"
                  className="object-cover object-center w-full"
                />
              </div>
            </Tab.Panel>
          ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
