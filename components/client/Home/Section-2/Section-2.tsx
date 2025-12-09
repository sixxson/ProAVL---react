'use client'
import { useEffect, useRef, useState } from 'react'
import Link from "next/link"

import ProductCard from "../../../Product-card"

import "./Section-2.scss"

export default function Section2() {
  const [active, setActive] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = boxRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActive(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="section-py section-2 container border-x-2 lg:!px-0 ">
      <div className="flex-center flex-col gap-base">
        <div className="content-title">
          <div className="title">
            <h2>
              Sản Phẩm
            </h2>
          </div>
          <div className="subTitle">
            <p>
              Phân phối thiết bị, giải pháp, dịch vụ trong lĩnh vực âm thanh, ánh sáng, hình ảnh cho sân khấu biểu diễn chuyên nghiệp, bar – club, phát thanh truyền hình, hội thảo và studio
            </p>
          </div>
        </div>
        <div className="list-image">
          <ProductCard
            titleProduct="something"
            subTitleProduct="Nulla ad amet aliqua consectetur fugiat. Mollit proident anim anim laboris elit amet non ad. Excepteur mollit exercitation eu ullamco in ullamco. Id minim ipsum tempor nulla quis consequat aliqua. Cupidatat non ea excepteur laboris dolore sunt tempor do qui commodo occaecat. Velit duis laborum proident esse excepteur eu aliquip tempor minim proident ipsum cupidatat proident."
            imageProduct="/img/1.png"
          />
          <ProductCard
            titleProduct="something"
            subTitleProduct="Nulla ad amet aliqua consectetur fugiat. Mollit proident anim anim laboris elit amet non ad. Excepteur mollit exercitation eu ullamco in ullamco. Id minim ipsum tempor nulla quis consequat aliqua. Cupidatat non ea excepteur laboris dolore sunt tempor do qui commodo occaecat. Velit duis laborum proident esse excepteur eu aliquip tempor minim proident ipsum cupidatat proident."
            imageProduct="/img/2.png"
          />
          <ProductCard
            titleProduct="something"
            subTitleProduct="Nulla ad amet aliqua consectetur fugiat. Mollit proident anim anim laboris elit amet non ad. Excepteur mollit exercitation eu ullamco in ullamco. Id minim ipsum tempor nulla quis consequat aliqua. Cupidatat non ea excepteur laboris dolore sunt tempor do qui commodo occaecat. Velit duis laborum proident esse excepteur eu aliquip tempor minim proident ipsum cupidatat proident."
            imageProduct="/img/3.png"
          />
          <div
            ref={boxRef}
            className={`box-show-more group col-span-full relative overflow-hidden ${active ? "active" : ""
              }`}
            onMouseEnter={() => setActive(true)}
          >
            <div
              className={`rounded-full body-2 py-4 px-6 uppercase transition-300 transition-opacity border text-center border-black font-bold
                ${active ? "opacity-0" : "group-hover:opacity-0"}`}
            >
              <span>Xem ngay sieu pham</span>
            </div>
            <div className="overlay-show-more absolute inset-0 pointer-events-none">
              <div className="relative w-full h-full">
                <div className="overlay-left">
                  <span className="heading-2 font-bold text-primary-1 capitalize">Hon 100</span>
                  <p className="body-1">Dai ly va cong ty khap ca nuoc</p>
                </div>

                <Link href="/" className="overlay-right pointer-events-auto">
                  Xem ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
