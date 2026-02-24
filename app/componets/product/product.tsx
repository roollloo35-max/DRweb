import styles from '@/app/componets/product/product.module.css'
import ArrowRight from '../assetsSvg/arrowRight'

export default function Product() {
    return (
        <section className="pt-[50px]">
        <div className="w-[1200px] conteiner">

            <div className={`${styles.title_text}`}>
                PRODUCT
            </div>
            <div className='flex justify-between w-full items-center pt-[50px] pb-[30px]'>

                <p className="block  text-[36px] pb-[50px] w-[25%] font-[700] leading-[160%]  text-[#333]">Choose your product themes.”</p>
                <p className="block  text-[18px] pb-[0px] w-[35%] font-[400] leading-[160%]  text-[#9C9C9C]">Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>
            </div>
            <ul className="">
                <li><a className="flex items-center font-[600] leading-[160%] w-[470px] text-[#333]  text-[18px] justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">01</span>Interior Design</span><span className="block"><ArrowRight /></span></a>
                <p className='block  text-[18px] pl-[45px] w-[40%] font-[400] leading-[160%]  text-[#9C9C9C]'>The use of aged elements and nostalgic details to evoke a sense of history and character.</p></li>
                <li><a className="flex items-center  font-[600] leading-[160%] w-[470px] text-[#333] text-[18px] justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">02</span>Consultant</span><span className="block"><ArrowRight /></span></a>
                <p className='block  text-[18px] pl-[45px] w-[40%] font-[400] leading-[160%]  text-[#9C9C9C]'>The use of extreme simplicity and purposeful emptiness to achieve clarity and focus.</p></li>
                <li><a className="flex items-center font-[600] leading-[160%] w-[470px] text-[#333] text-[18px]  justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">03</span>Construction Consultant</span ><span className="block"><ArrowRight /></span></a>
                <p className='block  text-[18px] pl-[45px] w-[40%] font-[400] leading-[160%]  text-[#9C9C9C]'>The use of clean lines and uncluttered function to express a sense of progress and order.</p></li>
                <li><a className="flex items-center font-[600] leading-[160%] w-[470px] text-[#333] text-[18px]  justify-between w-full pt-[15px] pb-[15] pl-[0] pr-[25] transition hover:shadow-[10px_0px_10px_rgba(0,0,0,0.05)]" href="/"><span className="block"><span className="pr-[25px]">03</span>Construction Consultant</span ><span className="block"><ArrowRight /></span></a>
                <p className='block  text-[18px] pl-[45px] w-[40%] font-[400] leading-[160%]  text-[#9C9C9C]'>The use of balanced contrasts (old/new, heavy/light) to create a timeless and relaxed harmony.</p></li>
            </ul>
            </div>
        </section>
    )
}