import { API, fetcher } from "apiConfig/apiConfig";

import GalleryTab from "./GalleryTab";
import React from "react";
import { Tab } from "@headlessui/react";
import useSWR from "swr";

const Gallery = ({ idProduct }) => {
  const { data } = useSWR(API.getProductImage(idProduct), fetcher);

  if (!data) return null;

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-5 gap-6">
          {data.map((image, index) => (
            <GalleryTab image={image} key={index}></GalleryTab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {data.map((image, index) => (
          <Tab.Panel key={index}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <img
                src={`https://lialili.fly.dev/storage/products/${image}`}
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
