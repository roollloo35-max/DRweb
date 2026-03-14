import styles from '@/app/Pages/About/components/service/service.module.css'
import Image from 'next/image'

export default function ServiceA() {
    return (
        <section className="w-[1200px] m-auto mt-[150px] mb-[150px]">
            <div className={`${styles.title_text}`}>
                SERVICE
            </div>
            <p className="block pt-[50px] pb-[50px] text-[36px] font-[600] leading-[160%] w-[470px] text-[#333]">
                Why Choose Us
            </p>
            <p className="block pb-[100px] w-[60%] text-[18px] font-[400] leading-[160%] text-[#9C9C9C]">
                Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
            </p>
            <div className='w-full flex justify-between flex-row '>
                <div className=' flex flex-col  items-center pt-[40px] pb-[40px] w-[30%] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)] raunded-[2px]'>
                    <Image
                        src={'/high__quality.png'}
                        alt='high qual'
                        width={63}
                        height={63}
                    />
                    <p className='text-[24px] text-[#333] font-semibold text-center leading-[140%] pt-[20px] '>High Quality</p>
                    <p className='text=-[18px] text-[#9c9c9c] font-normal text-center leading-[160%] pt-[20px] w-[90%]'>We source only the finest materials and premium finishes to ensure every detail stands the test of time.</p>
                </div>

                <div className=' flex flex-col  items-center pt-[40px] pb-[40px] w-[30%] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)] raunded-[2px]'>
                    <Image
                        src={'/proffy.png'}
                        alt='high qual'
                        width={63}
                        height={63}
                    />
                    <p className='text-[24px] text-[#333] font-semibold text-center leading-[140%] pt-[20px]'>Professional Designer</p>
                    <p className='text=-[18px] text-[#9c9c9c] font-normal text-center leading-[160%] pt-[20px] w-[90%]'>A skilled designer will transform your vision into a cohesive plan that perfectly suits your lifestyle and space.</p>

                </div>
                <div className=' flex flex-col  items-center pt-[40px] pb-[40px] w-[30%] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)] raunded-[2px]'>
                    <Image
                        src={'/service.png'}
                        alt='high qual'
                        width={63}
                        height={63}
                    />
                    <p className='text-[24px] text-[#333] font-semibold text-center leading-[140%] pt-[20px]'>The Best Services</p>
                    <p className='text=-[18px] text-[#9c9c9c] font-normal text-center leading-[160%] pt-[20px] w-[90%]'>We provide a full cycle of support—from the first consultation to the final placement of furniture—so you can relax and enjoy the process.</p>
                </div>
            </div>
        </section>
    )
}