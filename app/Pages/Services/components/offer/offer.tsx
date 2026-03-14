import Image from "next/image"
import styles from '@/app/Pages/Services/components/offer/offer.module.css'
import Product from "@/app/componets/product/product"

export default function Offer() {
    return (

        <section className="mb-[150px]">

            <div className="w-[1200px] m-auto">

                 <div className={`${styles.title_text}`}>
                OUR OFFER
            </div>

                <div className="grid grid-cols-2 grid-rows-3 w-full items-center justify-between  gap-y-[50px] gap-x-[50px] pt-[100px] pb-[0px]">

                    <Image
                        src={"/offer1.png"}
                        alt="offer1"
                        width={746}
                        height={365}
                    />

                    <div className="">
                        <p className="text-[24px] font-bold text-start leading-[140%] ">Interior design</p>
                        <p className="text-[18px] font-normal text-start leading-[160%]  text-center m-auto pt-[20px] pb-[20px]">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div> 

                    <Image
                        src={"/offer4.png"}
                        alt="offer1"
                        width={746}
                        height={365}
                    />

                    <div className="">
                        <p className="text-[24px] font-bold text-start leading-[140%] ">Consultant</p>
                        <p className="text-[18px] font-norma  text-start leading-[160%]  text-center m-auto pt-[20px] pb-[20px]">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div> 

                    <Image
                        src={"/offer2.png"}
                        alt="offer1"
                        width={746}
                        height={365}
                    />

                    <div className="">
                        <p className="text-[24px] font-bold text-start leading-[140%] ">Construction consultant</p>
                        <p className="text-[18px] font-normal text-start leading-[160%]  text-center m-auto pt-[20px] pb-[20px]">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>

            </div>

            <Product />

        </section>

    )
}