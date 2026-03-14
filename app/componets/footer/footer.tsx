import Logo from "../assetsSvg/logo"
import Arrow from "../assetsSvg/arrowEmail"

export default function Footer() {
    return (
        <footer>

            <div className="bg-[#2C3878] grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] pt-[50px] pb-[30px] ">

                <div className="w-full col-start-2 flex justify-between m-auto items-center">
                    <p className="block pt-[20px] pb-[20px] md:text-[36px] text-[20] font-[600] leading-[160%] w-[45%] text-[#fff]">
                        let's discuss making your interior like a dream place!</p>
                    <div className="w-[40%] ">
                        <p className="block pt-[20px] pb-[20px] md:text-[18px] text-[13] w-full font-[400] leading-[160%] w-[50%] text-[#D9D9D9]">
                            Contact us below to work together to build your amazing interior
                        </p>

                        <a href="/" className="block bg-[#fff] border border-[#333] w-[142] border-transparent transition h-[50] text-[14px] text-center leading-12.5 hover:bg-[#2C3878] hover:text-[#fff]">Contact Us</a>

                    </div>

                </div>
            </div>
            <div className="grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] m-auto mt-[100px] pb-[100px] ">
                <div className="w-full col-start-2 justify-between m-auto items-center md:flex md:justify-between  grid-rows-2 ">
                    <div className="md:w-[40%] row-start-1">

                        <Logo />

                        <p className="block w-full pt-[20px] pb-[20px] md:text-[36px] md:[20px] font-[600] leading-[160%] w-[45%] text-[#333]">
                            One of the best furniture agency.
                        </p>

                    </div>
                    <div className="md:w-[40%] row-start-2 flex items-end flex-col">
                        <form className="w-full">
                            <label className="w-full flex items-center justify-between pb-[1px]" htmlFor="Enter your email to get the laterst news relative">
                                <span className="block flex items-center ">
                                    <span className="block rounded-full w-[14px] h-[14px] bg-[#333] mr-[15px]"></span>
                                    <span className="block md:text-[18px] text-[13] w-full font-[400] leading-[160%] w-[50%] text-[#333]"> Enter your email to get the laterst news </span></span>
                                <span className="block"><Arrow /></span></label>

                            <div className="pt-3"><input className=" md:text-[18px] text-[13px] outline-none w-full font-[400] leading-[160%] w-[50%] text-[#333]" type="email" placeholder="Email Address" /></div>
                            <div className="w-full h-[1px] bg-[#141414] mt-[20px]"></div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}