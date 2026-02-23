import styles from "@/app/componets/service/service.module.css"
import ArrowRight from "../assetsSvg/arrowRight"
import Image from "next/image"


export default function Service() {
    return (

        <section className="mt-[150px]">
        <div className="w-[1200px] m-auto relative z-[1]">

            <div className="bg-[#fff] w-[50%]">
                <div className={`${styles.title_text}`}>
                    SERVICE
                </div>
                <p className={`${styles.p__text}`}>attractive furniture with the best quality.</p>
                <p className="block pt-[50px] pb-[50px] text-[18px] font-[400] leading-[160%] w-[470px] text-[#9C9C9C]">
                    Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>
                <ul className="">
                    <li><a className="flex items-center font-[600] leading-[160%] w-[470px] text-[#333]  text-[18px] justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">01</span>Interior Design</span><span className="block"><ArrowRight /></span></a></li>
                    <li><a className="flex items-center  font-[600] leading-[160%] w-[470px] text-[#333] text-[18px] justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">02</span>Consultant</span><span className="block"><ArrowRight /></span></a></li>
                    <li><a className="flex items-center font-[600] leading-[160%] w-[470px] text-[#333] text-[18px]  justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">03</span>Construction Consultant</span ><span className="block"><ArrowRight /></span></a></li>
                </ul>
            </div>

            <Image
                className="absolute top-[70%] right-[0%] z-[-1]"
                src={"/serviceBunItem.png"}
                alt="service"
                width={1076}
                height={524}
            />

            </div>
        </section>
    )
}