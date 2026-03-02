import styles from "@/app/componets/about/about.module.css"
import Image from "next/image"

export default function AboutSec() {
    return (
        <section className={`grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] md:mt-[150px] mt-[75px]`}>
            <div className="w-full relative col-start-2">

                <div className={`${styles.title_text} mb-[50px]`}>
                    ABOUT
                </div>
                <p className={`font-bold md:text-[32px] text-[20px] w-full md:text-[56px] leading-[101%] mb-[80px]`}>“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</p>

                <div className="flex justify-between items-end">
                    <Image 
                        className="m-auto"
                        src={"/aboutBunItem.png"}
                        alt=""
                        width={883}
                        height={525}
                    />

                    <div className="md:w-[40%] w-[60%] xl:w-[20%] bg-[#ffffff] pb-[10px] xl:h-auto xl:relative absolute xl:shadow-[0_0px_0px_rgba(0,0,0,0.0)] shadow-[0_0px_10px_rgba(0,0,0,0.10)] flex justify-center item-center flex-col xl:block" >
                        <div className="about_card xl:absolute static top-[-200px] left-[-60%] xl:bg-[#ffffff] flex items-center pt-[10px] pl-[15px] pb-[5px] pr-[50px] justify-items-start xl:shadow-[0_0px_10px_rgba(0,0,0,0.10)]">
                            <Image
                            className="md:scale-[1] scale-[0.8]"
                                src={"/human.png"}
                                alt="human"
                                width={51}
                                height={56}
                            />
                            <p className="pl-[5px]">
                                <span className="block font-[600] leading-[-140%] md:text-[16px] text-[13px] text-[#333]">Arga Danaan</span>
                                <span className="block font-[400] leading-[-140%] md:text-[14px] text-[11px] text-[#9C9C9C]">CEO of Dananz</span>
                            </p>
                        </div>

                        <p className="block xl:m-none md:text-[18px] text-[13px] pb-[0px] w-[90%] ml-[10px] mr-[10px] font-[400] leading-[160%] mt-[20px] mb-[40px] text-[#9C9C9C]"><span className={`${styles.content_text}`}>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</span></p>
                        <a className={styles.btn__about} href="/">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

    )
}