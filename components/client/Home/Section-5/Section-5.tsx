'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
// import React, { useRef, useState } from 'react';
import { Grid, Navigation } from 'swiper/modules';
import ImageCustoms from "@/components/customUI/ImageCustoms";
import { Button } from "../../../ui/button";

export default function Section5() {

  return (
    <section className='container lg:!px-0 border-x-2 space-y-10 -lg:space-y-5'>

      <div className="content-title text-center">
        <div className="title heading-1">
          <h2>
            Thương hiệu
          </h2>
        </div>
      </div>
      <div className="scroll-brands relative ">
        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            nextEl: ".scroll-brands .button-next",
            prevEl: ".scroll-brands .button-prev",
          }}
          grid={{
            rows: 2,
            fill: "row"
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 40
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 40
            }
          }}
        >
          <SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="box-logoBrand img-zoom bg-white rounded-1 outline outline-1 outline-white img-ratio ratio:pt-[55_100]">
              <ImageCustoms />
            </div>
          </SwiperSlide>
        </Swiper>
        <Button
          variant={'outline'}
          className="button-prev bg-transparent border-black hover:text-white hover:border-primary-1 hover:bg-primary-1 
            absolute-center-y -left-20 translate-x-20 rounded-1 body-2 p-3 uppercase transition-300"
        >
          <i className="fa-regular fa-arrow-left"></i>
        </Button>
        <Button
          variant={'outline'}
          className="button-next bg-transparent border-black hover:text-white hover:border-primary-1 hover:bg-primary-1 
            absolute-center-y -right-20 -translate-x-20 rounded-1 body-2 p-3 uppercase transition-300"
        >
          <i className="fa-regular fa-arrow-right"></i>
        </Button>
      </div>
    </section>
  )
}
