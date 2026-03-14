import Image from "next/image";
import styles from "@/app/componets/material/material.module.css";

export default function Material() {
    return (
        <section className="mt-[80px] w-full mb-[450px] z-[1] grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] md:mt-[150px] mt-[10px]">
            <div className="w-full col-start-2 m-auto  md:flex  block justify-between ">

                <div className="bg-[#fff] md:w-[30%] w-[100%]">
                    <div className={`${styles.title_text} md:before:left-[30%] before:left-[25%] `}>
                        MATERIAL
                    </div>
                    <p className={`${styles.p__text} md:text-[36px] text-[20px]`}>choice of materials for quality furniture.</p>
                    <p className="block pt-[20px] pb-[20px] md:text-[18px] text-[13px] font-[400] leading-[160%] w-full text-[#9C9C9C]">
                        You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
                    </p>

                    <a href="/" className="block border border-[#2C3878] w-[142] h-[50] transition text-[14px] text-center leading-12.5 hover:bg-[#2C3878] hover:text-[#fff]">See Materials</a>

                </div>
                <div className="relative md:w-[50%] md:block w-100% mt-[50px]  ">
                    <Image
                        className="absolute md:left-[-5%] md:top-[15%]  "
                        src={"/mat2.png"}
                        alt="mat2"
                        width={340}
                        height={392}
                    />
                    <Image
                        className="absolute md:right-[2%] md:top-[-10%] right-0"
                        src={"/mat1.png"}
                        alt="mat2"
                        width={240}
                        height={225}
                    />
                    <Image
                        className="absolute md:right-[8.5%] md:bottom-[-27%] right-0 hidden md:block"
                        src={"/mat3.png"}
                        alt="mat2"
                        width={200}
                        height={180}
                    />
                </div>
            </div>

        </section>
    )
}


