import Image from "next/image";
import styles from "@/app/componets/material/material.module.css";

export default function Material() {
    return (
        <section className="mt-[200px] w-full mb-[150px] z-[1] ">
            <div className="w-[1200px] m-auto  flex justify-between  ">

                <div className="bg-[#fff] w-[30%]">
                    <div className={`${styles.title_text}`}>
                        MATERIAL
                    </div>
                    <p className={`${styles.p__text}`}>choice of materials for quality furniture.</p>
                    <p className="block pt-[20px] pb-[20px] text-[18px] font-[400] leading-[160%] w-full text-[#9C9C9C]">
                        You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
                    </p>

                    <a href="/" className="block border border-[#2C3878] w-[142] h-[50] transition text-[14px] text-center leading-12.5 hover:bg-[#2C3878] hover:text-[#fff]">See Materials</a>

                </div>
                <div className="relative w-[50%]">
                    <Image
                        className="absolute left-[-5%] top-[15%]"
                        src={"/mat2.png"}
                        alt="mat2"
                        width={340}
                        height={392}
                    />
                    <Image
                        className="absolute right-[2%] top-[-10%]"
                        src={"/mat1.png"}
                        alt="mat2"
                        width={240}
                        height={225}
                    />
                    <Image
                        className="absolute right-[8.5%] bottom-[0%]"
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

