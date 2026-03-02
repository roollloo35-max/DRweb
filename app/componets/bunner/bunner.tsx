import styles from './benner.module.css';
import Image from 'next/image';




export default function Bunner() {
    return (
        <section className={`grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)]`}>
            <div className="relative col-start-2 pt-[100px]">

                <div className="w-full justify-between">
                    <h1 className={`font-bold text-[32px] w-[100%] ms:w-[80%] md:w-[60%] md:text-[72px] leading-[101%]`}>Design your interor with high quality.</h1>
                </div>
                <Image
                    className='mt-[40px]'
                    src={"/banner1.png"}
                    alt='bunner1'
                    width={1200}
                    height={513}
                />
                <ul className="md:w-[252px] md:pt-[40px] md:pb-[40px] md:absolute  right-[10%] top-[120px] pb-[20] pt-[20px] flex justify-evenly md:flex-col bg-[#2C3878] text-[#fff]">
                    <li className='md:pt-[40px]'><span className='block md:text-[52px] text-[24px] text-center'>350+</span><span className='block md:text-[16px]  tex-[13] lg:pt-[10px] text-center'>Project Completed</span></li>
                    <li className='md:pt-[40px]' ><span className='block md:text-[52px] text-[24px]  text-center'>23+</span><span className='block md:text-[16px] tex-[13]   lg:pt-[10px] text-center'>Professional Teams</span></li>
                    <li className='md:pt-[40px]' ><span className='block md:text-[52px] text-[24px]  text-center'>15+</span><span className='block md:text-[16px] tex-[13]  lg:pt-[10px] text-center'>Years Experience</span></li>
                </ul>

                
            </div>
        </section>
    );
}