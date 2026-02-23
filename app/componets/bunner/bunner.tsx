import styles from './benner.module.css';
import Image from 'next/image';




export default function Bunner (){
    return (
        <section className={`${styles.banner__conteiner}`}>
        <div className="w-[1200px] conteiner relative">

            <div  className="w-full conteiner flex justify-between">
                <h1 className={`${styles.title_text}`}>Design your interor with high quality.</h1>

                <p className={`${styles.p__text}`}>
                    2022 ALL RIGHT RESERVED
                </p>
           </div>
            <ul className="w-[252px] pt-[40px] pb-[40px] absolute right-[120px] top-[120px] flex flex-col bg-[#2C3878] text-[#fff]">
                <li className='pt-[40px]'><span className='block text-[52px] text-center'>350+</span><span className='block text-[16px] pt-[10px] text-center'>Project Completed</span></li>
                <li className='pt-[40px]' ><span className='block text-[52px] text-center'>23+</span><span className='block text-[16px] pt-[10px] text-center'>Professional Teams</span></li>
                <li className='pt-[40px]' ><span className='block text-[52px] text-center'>15+</span><span className='block text-[16px] pt-[10px] text-center'>Years Experience</span></li>
            </ul>
            
            <Image 
            className='mt-[40px]'
            src={"/banner1.png"}
            alt='bunner1'
            width={1200}
            height={513}
            />
            </div>
        </section>
    );
}