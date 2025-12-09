import Banner from "@/components/client/Home/Banner/Banner";
import Section1 from "@/components/client/Home/Section-1/Section-1";
import Section2 from "@/components/client/Home/Section-2/Section-2";
import Section3 from "@/components/client/Home/Section-3/Section-3";
import Section4 from "@/components/client/Home/Section-4/Section-4";
import Section5 from "@/components/client/Home/Section-5/Section-5";
import Section6 from "@/components/client/Home/Section-6/Section-6";

export default function page() {
  return (
    <>
      <Banner />
      <div className="bg-linear-1-white">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <div className="bg-linear-1-white">
        <Section4 />
        <Section5 />
        <Section6/>
      </div>
    </>
  )
}
