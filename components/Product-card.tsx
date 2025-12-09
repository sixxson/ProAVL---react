import React from 'react'
import ImageCustoms from "./customUI/ImageCustoms"
import { Button } from "./ui/button"

export default function ProductCard({ titleProduct, subTitleProduct, imageProduct }: { titleProduct: string, subTitleProduct: string, imageProduct: string }) {
  return (
    <div className="overflow-hidden relative group zoom-img-parent rounded-4">
      <div className="img-ratio ratio:pt-[560_440] img-zoom ">
        <ImageCustoms src={imageProduct} />
      </div>
      {/* overlay card */}
      <div className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 backdrop-blur-lg xl:px-11 px-5 py-6
        flex flex-col items-start gap-5 w-full text-white group-hover:translate-y-0 transition-300">
        {/* content */}
        <div className=" uppercase heading-2 font-medium">
          <h2>
            {titleProduct}
          </h2>
        </div>
        <div className="subTitle line-clamp-3">
          <p>
            {subTitleProduct}
          </p>
        </div>
        {/* Button */}
        <Button
          variant={'outline'}
          className=" bg-transparent border-white hover:text-white hover:border-primary-1 hover:bg-primary-1 rounded-full body-2 py-3 px-6 uppercase transition-300"
        >
          Kham pha ngay
        </Button>
      </div>
    </div>
  )
}
