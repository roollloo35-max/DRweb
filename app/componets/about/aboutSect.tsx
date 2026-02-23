import styles from "@/app/componets/about/about.module.css"
import Image from "next/image"

export default function AboutSec() {
    return (
        <section className={`${styles.about__conteiner}`}>
            <div className="w-[1200px] conteiner">

                <div className={`${styles.title_text}`}>
                    ABOUT
                </div>
                <p className={`${styles.p__text}`}>“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</p>

                <div className="flex justify-between items-end">
                    <Image
                        src={"/aboutBunItem.png"}
                        alt=""
                        width={883}
                        height={525}
                    />

                    <div className="w-[20%] relative" >
                        <div className="about_card absolute top-[-200px] left-[-60%] bg-[#ffffff] flex items-center pt-[10px] pl-[15px] pb-[15px] pr-[50px] justify-items-start shadow-[0_0px_10px_rgba(0,0,0,0.10)]">
                            <Image
                                src={"/human.png"}
                                alt="human"
                                width={51}
                                height={56}
                            />
                            <p className="pl-[25px]">
                                <span className="block font-[600] leading-[-140%] text-[16px] text-[#333]">Arga Danaan</span>
                                <span className="block font-[400] leading-[-140%] text-[#9C9C9C]">CEO of Dananz</span>
                            </p>
                        </div>

                        <p className="w-[100%] pb-[40px]"><span className={`${styles.content_text}`}>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</span></p>
                        <a className={styles.btn__about} href="/">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

    )
}