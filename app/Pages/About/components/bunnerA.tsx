import Image from "next/image"

export default function BunnerA() {
    return (


            <section className="w-[1200px] conteiner">

                <h2 className="text-[56px] font-bold text-center leading-[140%] pt-[200px]">About</h2>

                <p className="text-[18px] font-normal leading-[160%] w-[45%] text-center m-auto pt-[50px] pb-[150px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <Image 
                src={'/bunner2.png'}
                alt="bunner2"
                width={1200}
                height={513}
                />
            </section>

    )
}