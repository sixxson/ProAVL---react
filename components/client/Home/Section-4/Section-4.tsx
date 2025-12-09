'use client'
import React from 'react'
import ItemService from "../../../ItemService"
import ImageCustoms from "../../../customUI/ImageCustoms"
import Link from "next/link"
import { Button } from "../../../ui/button"

export default function Section4() {
  return (
    <section className='container lg:!px-0 border-x-2 section-py'>
      <div className="flex-center flex-col gap-base">
        <div className="content-title text-center">
          <div className="title heading-1 capitalize">
            <h1>
              dich vu
            </h1>
          </div>
          <div className="subTitle body-1">
            <p>
              Exercitation duis deserunt excepteur elit sunt consectetur sit.
            </p>
          </div>
        </div>
        <div className="content-service flex-center -lg:flex-col  gap-base">
          <ItemService />
          <ItemService />
          <ItemService />
        </div>
        <div className="box-image-service w-full relative overflow-hidden">
          <div className="img-ratio ratio:pt-[650_1400] w-full rounded-4 zoom-img">
            <ImageCustoms />
          </div>
          <div className="content-box-service text-utility-white absolute-center-x bottom-16 flex-center flex-col gap-5 text-center">
            <div className="title heading-2 font-semibold">
              <h2>
                Nulla officia irure
              </h2>
            </div>
            <div className="subTitle body-1">
              <p>
                Laborum incididunt Lorem elit consequat laboris aliqua sit fugiat deserunt incididunt velit
              </p>
            </div>
            <Link href='#'
              className="bg-transparent border-white hover:text-white hover:border-primary-1 hover:bg-primary-1 
              border border-input bg-background rounded-full body-2 py-3 px-6 uppercase transition-300"
            >
              Khám phá thêm
            </Link>
          </div>
        </div>
        <Link href='#'
          className="bg-transparent border-black hover:text-white hover:border-primary-1 hover:bg-primary-1 
              border border-input bg-background rounded-full body-2 py-3 px-6 capitalize transition-300"
        >
          Khám phá thêm
        </Link>
      </div>
    </section>
  )
}
