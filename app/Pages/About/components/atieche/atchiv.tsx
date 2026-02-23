import styles from '@/app/Pages/About/components/atieche/achiev.module.css'
import Image from 'next/image'


export default function Achievement() {
    return (
        <div className='w-[1200px] m-auto'>

            <div className={`${styles.title_text}`}>
                ACHIEVEMENT
            </div>

            <p className="block pt-[20px]  mb-[100px] text-[36px] font-[600] leading-[160%] w-[70%] text-[#333]">
                interior customization with Danaanz, best quality with professional workers
            </p>

            <div className='w-full flex justify-between relative'>

                <Image
                    src={'/atchiv.png'}
                    alt='atchiv'
                    width={883}
                    height={525}
                />

                <ul className="w-[252px] pt-[40px] pb-[40px]  right-[120px] top-[120px] flex flex-col bg-[#2C3878] text-[#fff]">
                    <li className='pt-[40px]'><span className='block text-[52px] text-center'>350+</span><span className='block text-[16px] pt-[10px] text-center'>Project Completed</span></li>
                    <li className='pt-[40px]' ><span className='block text-[52px] text-center'>23+</span><span className='block text-[16px] pt-[10px] text-center'>Professional Teams</span></li>
                    <li className='pt-[40px]' ><span className='block text-[52px] text-center'>15+</span><span className='block text-[16px] pt-[10px] text-center'>Years Experience</span></li>
                </ul>


            </div>
        </div>
    )
}