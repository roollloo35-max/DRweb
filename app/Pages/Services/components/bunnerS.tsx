import Image from "next/image"

export default function BunnerS() {
    return (


            <div className="w-[1200px] pb-[100px] conteiner">

                <h2 className="text-[56px] font-bold text-center leading-[140%] pt-[200px]">Services</h2>

                <p className="text-[18px] font-normal leading-[160%] w-[45%] text-center m-auto pt-[50px] pb-[150px]">Exclusive solutions for those who are accustomed to getting the best from life without compromise</p>

                <Image 
                src={'/bunner2Service.png'}
                alt="bunner2"
                width={1200}
                height={513}
                />
            </div>

//    WE OFFER
    )
}