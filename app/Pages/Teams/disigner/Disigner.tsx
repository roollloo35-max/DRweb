import Image from "next/image";
import styles from "@/app/componets/service/service.module.css"


export default function Disigner () {
    return(
        <section className="grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] md:mt-[150px] mt-[75px]">
        <div className="w-full m-auto relative z-[1] col-start-2 ">

            <div className="bg-[#fff] w-full md:w-[50%]">
                <div className={`${styles.title_text} md:before:left-[14%] before:left-[22%]`}>
                    SERVICE
                </div>
                <p className={`${styles.p__text} md:text-[36px] text-[20px]`}>Creative Person</p>
                <p className="block pt-[50px] pb-[50px] md:text-[18px] text-13px font-[400] leading-[160%] w-[90%] text-[#9C9C9C]">
                    Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>
            </div>

            <div className="">

                <div className="w-full bg-[#2C3878] ">
                    <Image 
                    src={""}
                    alt="person image"
                    width={282}
                    height={400}
                    />
                </div>

            </div>
            

            </div>
        </section>
    );
}