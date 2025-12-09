import React from 'react'
import ImageCustoms from "./customUI/ImageCustoms"
import Link from "next/link"

type SolutionCard = { title: string, image: string, titleButton: string, icon: React.ReactNode }

export default function SolutionCard({ title, image, titleButton, icon }: SolutionCard) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl cursor-pointer xl:rem:h-[550px] rem:h-[480px]">
      <div className="img-ratio ratio:pt-[420_320] transition-transform duration-700 ease-out -bottom-[10%] translate-y-0
          group-hover:-translate-y-[10%] ">
        <ImageCustoms className="rounded-4" src={image} />
      </div>
      <div className="absolute w-full flex gap-4 items-center justify-end flex-col p-6 
        bottom-0 translate-y-[65%] group-hover:-translate-y-[30%] transition-500">
        <p className="text-white heading-2 font-semibold whitespace-pre-line drop-shadow-lg">
          {title}
        </p>
        <Link
          href='/'
          className="
              flex-center flex-col gap-2 p-3 opacity-0 group-hover:opacity-100 relative
              rem:w-[120px] aspect-square rounded-full bg-primary-1 text-white text-lg font-medium 
              hover:bg-transparent border border-transparent hover:border-white transition-300 group/btn
              "
        >
          {icon}
          {titleButton}
          <span className="absolute inset-0 bg-primary-1 group-hover/btn:bg-white rounded-full animate-ping animate-infinite animate-duration-500 animate-ease-linear 
          animate-alternate-reverse animate-fill-backwards"></span>
        </Link>
      </div>
    </div>
  )
}
