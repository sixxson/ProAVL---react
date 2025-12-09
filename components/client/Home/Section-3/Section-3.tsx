"use client"
import { useRef, useEffect } from "react";
import type { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper'
import SolutionCard from "../../../Solution-card"
import { Pagination } from "swiper/modules";

export default function Section3(): ReactElement {
  const swiperRef = useRef<SwiperType | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  // -----------------------------
  // Arrow function: khai báo trước khi dùng
  // -----------------------------

  // sửa updateThumb: nhận thêm progress tùy chọn
  const updateThumb = (swiper: SwiperType, progressFromDrag?: number) => {
    const thumb = thumbRef.current;
    const bar = document.querySelector<HTMLDivElement>(".progressbar");
    const fill = document.querySelector<HTMLDivElement>(".progressbar-fill");
    if (!thumb || !bar || !fill) return;

    // nếu có progress truyền vào (khi drag), dùng nó; ngược lại dùng swiper.progress
    const progress = typeof progressFromDrag === "number" ? progressFromDrag : swiper.progress ?? 0;

    // căn giữa nút bằng half width thay vì cố định 10px
    const half = thumb.offsetWidth / 2;
    thumb.style.left = `calc(${progress * 100}% - ${half}px)`;
    fill.style.width = `${progress * 100}%`;
  };


  // -----------------------------
  // Effect xử lý drag nút
  // -----------------------------

  useEffect(() => {
    const thumb = thumbRef.current;
    const bar = document.querySelector<HTMLDivElement>(".progressbar");
    if (!thumb || !bar) return;

    let isDragging = false;

    const dragStart = () => {
      isDragging = true;
      if (swiperRef.current) updateThumb(swiperRef.current);
    };

    const dragEnd = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current;
        const slidesPerView = Number(swiper.params.slidesPerView) || 1;
        const maxIndex = Math.max(0, swiper.slides.length - slidesPerView);

        const targetIndex = Math.round(swiper.progress * maxIndex);
        swiper.slideTo(targetIndex);
      }
      isDragging = false;
    };

    const dragMove = (e: MouseEvent) => {
      if (!isDragging || !swiperRef.current) return;
      if (!bar) return;

      const rect = bar.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));

      const progress = x / rect.width;
      const swiper = swiperRef.current;

      const maxTranslate = swiper.maxTranslate();
      const minTranslate = swiper.minTranslate();
      const translate = minTranslate + progress * (maxTranslate - minTranslate);

      swiper.setTranslate(translate);
      updateThumb(swiper);
    };

    // add
    thumb.addEventListener("mousedown", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("mousemove", dragMove);

    // cleanup → tránh bug
    return () => {
      thumb.removeEventListener("mousedown", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("mousemove", dragMove);
    };
  }, []);


  return (
    <section className="section-py lg:!px-0 container border-x-2">
      <div className="title-content w-[calc(1200/1400*100%)] mx-auto text-center space-y-5">
        <div className="heading-1 capitalize">
          <h2>
            giai phap tieu bieu
          </h2>
        </div>
        <div className="sub-title">
          <div className="body-1">
            <p>
              Incididunt proident aliqua ut aute nisi adipisicing voluptate nisi sint. Quis aliquip est excepteur elit. Exercitation pariatur consectetur ex ut nostrud amet. Officia tempor adipisicing ad sint. Occaecat quis Lorem ad ipsum dolor incididunt in eu sint ut aliquip exercitation nulla. Laborum ex duis adipisicing excepteur est nulla enim mollit. Quis ullamco anim culpa exercitation adipisicing id amet enim aliqua irure elit.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Swiper
          // modules={[Pagination]}
          //   pagination={{ type: "progressbar", el: ".progressbar" }}
          speed={800}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.on("progress", () => updateThumb(swiper));
            swiper.on("resize", () => updateThumb(swiper));
          }}
          onSlideChange={(swiper) => updateThumb(swiper)}

          className="space-y-10 -lg:space-y-5"
        >
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCard
              icon={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
              image="/img/1.png"
              title="something"
              titleButton="kham pha"
            />
          </SwiperSlide>
        </Swiper>

        <div className="relative mt-4 h-2">
          <div className="progressbar h-1 bg-gray-300 rounded w-full relative overflow-hidden top-1/2 -translate-y-1/2">
            <div className="progressbar-fill absolute-full h-1 bg-primary-1 w-0"></div>
          </div>
          <div
            ref={thumbRef}
            className="absolute-center-y w-5 h-5 bg-primary-1 rounded-full cursor-pointer"
          ></div>
        </div>
      </div>
    </section>
  )
}
