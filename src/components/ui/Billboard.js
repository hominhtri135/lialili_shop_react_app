import React from "react";

const data = [
  {
    imageUrl:
      "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y1NDZiYXRjaDMtbXludC0zMS1iYWRnZXdhdGVyY29sb3JfMS5qcGc.jpg",
    label: "Lorem ipsum dolor sit amet.",
  },
  {
    imageUrl:
      "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjcyMi1hdW0tMzFiXzFfMS5qcGc.jpg",
    label: "Lorem ipsum dolor sit amet.",
  },
  {
    imageUrl:
      "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNDczLWt3YW4tMDItYV8xXzEuanBn.jpg",
    label: "coming soon...",
  },
  {
    imageUrl:
      "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg5Ny13YW4tMDFfMS5qcGc.jpg",
    label: "Lorem ipsum dolor sit amet.",
  },
];
const Billboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data[2].imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl max-w-xs sm:text-5xl sm:max-w-xl lg:text-6xl sm:min-h-[18%] text-center block overflow-hidden text-ellipsis whitespace-nowrap">
            {data[2].label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
