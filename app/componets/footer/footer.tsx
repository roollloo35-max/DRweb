import Logo from "../assetsSvg/logo"
import Arrow from "../assetsSvg/arrowEmail"

export default function Footer() {
    return (
        <footer>
            <div className=" w-full flex justify-content bg-[#2C3878] ">
                <div className="w-[1200px] pt-[50px] pb-[30px] flex justify-between m-auto items-center ">

                    <p className="block pt-[20px] pb-[20px] text-[36px] font-[600] leading-[160%] w-[45%] text-[#fff]">
                        let's discuss making your interior like a dream place!</p>
                    <div className="w-[40%] ">
                        <p className="block pt-[20px] pb-[20px] text-[18px] w-full font-[400] leading-[160%] w-[50%] text-[#D9D9D9]">
                            Contact us below to work together to build your amazing interior
                        </p>

                        <a href="/" className="block bg-[#fff] border border-[#333] w-[142] border-transparent transition h-[50] text-[14px] text-center leading-12.5 hover:bg-[#2C3878] hover:text-[#fff]">Contact Us</a>

                    </div>
                </div>
            </div>
            <div className="w-[1200px] m-auto mt-[100px] pb-[100px] flex justify-between ">

                <div className="w-[40%]">

                    <Logo />

                    <p className="block w-full pt-[20px] pb-[20px] text-[36px] font-[600] leading-[160%] w-[45%] text-[#333]">
                        One of the best furniture agency.
                    </p>

                </div>
                <div className="w-[40%] flex items-end flex-col">
                    <form className="w-full">
                        <label className="w-full flex items-center justify-between pb-[1px]" htmlFor="Enter your email to get the laterst news relative">
                            <span className="block flex items-center ">
                                <span className="block rounded-full w-[14px] h-[14px] bg-[#333] mr-[15px]"></span>
                                <span className="block text-[18px] w-full font-[400] leading-[160%] w-[50%] text-[#333]"> Enter your email to get the laterst news </span></span>
                            <span className="block"><Arrow /></span></label>

                        <div className="pt-3"><input className=" text-[18px] outline-none w-full font-[400] leading-[160%] w-[50%] text-[#333]" type="email" placeholder="Email Address" /></div>
                        <div className="w-full h-[1px] bg-[#141414] mt-[20px]"></div>
                    </form>
                </div>
            </div>
        </footer>
    )
}