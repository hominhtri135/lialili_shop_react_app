import GalleryTab from "./GalleryTab";
import React from "react";
import { Tab } from "@headlessui/react";

const Gallery = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-5 gap-6">
          {images.map((image, index) => (
            <GalleryTab image={image} key={index}></GalleryTab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image, index) => (
          <Tab.Panel key={index}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <img
                src={`https://down-vn.img.susercontent.com/file/${image}`}
                alt=""
                fill="true"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
