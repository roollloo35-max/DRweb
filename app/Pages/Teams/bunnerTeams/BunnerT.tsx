import Image from "next/image"


export default function BunnerTeams() {
    return (
        <section className="grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)]">
            <div className="col-start-2 w-full">
                <h2 className="text-[56px] font-bold text-center leading-[140%] pt-[200px]">Our Teams</h2>

                <p className="text-[18px] font-normal leading-[160%] w-[50%] text-center m-auto pt-[50px] pb-[150px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <Image
                    src={'/team.png'}
                    alt="bunner2"
                    width={1200}
                    height={513}
                />
            </div>
        </section>
    )
}