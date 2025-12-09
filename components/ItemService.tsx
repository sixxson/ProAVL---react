"use client"
import React from 'react'
import ImageCustoms from "./customUI/ImageCustoms"
import { Button } from "./ui/button"

export default function ItemService() {
  return (
    <div className="item-service p-6 flex flex-col gap-base">
      <div className="icon rem:w-[80px]">
        <div className="img-ratio ratio:pt-[1_1]">
          <ImageCustoms src="/icons/icons-1.png" />
        </div>
      </div>
      <div className="space-y-10 -lg:space-y-5">
        <div className="title-service heading-2 font-semibold">
          <h2>
            something
          </h2>
        </div>
        <div className="subTitle-service line-clamp-3 body-1">
          <p>
            In mollit est ea occaecat qui ullamco non non. Minim in duis dolor cupidatat ut nostrud. Adipisicing elit in excepteur et consequat Lorem velit adipisicing.
          </p>
        </div>
        <Button
          variant={'outline'}
          className="bg-transparent border-black hover:text-white hover:border-primary-1 hover:bg-primary-1 rounded-full body-2 py-3 px-6 uppercase transition-300"
        >
          Khám phá thêm
        </Button>
      </div>
    </div>
  )
}


