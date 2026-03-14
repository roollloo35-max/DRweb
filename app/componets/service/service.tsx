import styles from "@/app/componets/service/service.module.css"
import ArrowRight from "../assetsSvg/arrowRight"
import Image from "next/image"


export default function Service() {
    return (

        <section className="grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] md:mt-[150px] mt-[75px]">
        <div className="w-full m-auto relative z-[1] col-start-2 ">

            <div className="bg-[#fff] w-full md:w-[50%]">
                <div className={`${styles.title_text} md:before:left-[14%] before:left-[22%]`}>
                    SERVICE
                </div>
                <p className={`${styles.p__text} md:text-[36px] text-[20px]`}>attractive furniture with the best quality.</p>
                <p className="block pt-[50px] pb-[50px] md:text-[18px] text-13px font-[400] leading-[160%] w-[90%] text-[#9C9C9C]">
                    Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>
                <ul className="">
                    <li><a className="flex items-center font-[600] leading-[160%] w-full text-[#333]  text-[18px] justify-between pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">01</span>Interior Design</span><span className="block"><ArrowRight /></span></a></li>
                    <li><a className="flex items-center font-[600] leading-[160%] w-full text-[#333] text-[18px]  justify-between pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">02</span>Consultant</span><span className="block"><ArrowRight /></span></a></li>
                    <li><a className="flex items-center font-[600] leading-[160%] w-full text-[#333] text-[18px]  justify-between pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">03</span>Construction Consultant</span ><span className="block"><ArrowRight /></span></a></li>
                </ul>
            </div>

            <Image
                className="md:absolute static top-[70%] right-[0%] z-[-1]"
                src={"/serviceBunItem.png"}
                alt="service"
                width={1076}
                height={524}
            />

            </div>
        </section>
    )
}






