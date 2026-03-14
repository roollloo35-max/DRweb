'use client'

import Logo from "../assetsSvg/logo";
import { roboto } from "@/app/fonts/fonts";
import styles from "@/app/componets/header/header.module.css"
import Link from "next/link";
import { useState } from "react";




export default function Header() {

    

    const [isHovered, setIsHovered] = useState(false)

    let [line1, setline1] = useState({x1: 0, x2: 25, y1: 5, y2: 5 })
        
    let [line2, setline2] = useState({x1: 25, x2: 50, y1: 35, y2: 35 })

    let Line_Draw = () => {
        if(isHovered === false){
            setline1(prev => ({...prev, x2:50}))
            setline2(prev => ({...prev, x1:0}))
        }else if(isHovered === true){
            setline1(prev => ({...prev, x2:25}))
            setline2(prev => ({...prev, x1:25}))
        }
    }

    let toggle = () => {
        setIsHovered(prevState => !prevState)
        Line_Draw()
    }

   

    let hide = 'hidden'

    if(isHovered){
        hide = 'block'
    }

    return (

        <header className="grid fixed bg-[#fff] md:static grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)] top-0 pt-[20px] z-[20]">
            <div className="col-start-2 w-full  m-auto md:static   md:flex flex-row justify-between item-start grid grid-cols-[max(50%)_max(10%)] grid-rows-[max[0], max[0]]">

            <div className="">
                <Logo />
            </div>

                <button className="block md:hidden mt-[10px] cursor-pointe h-0  row-start-1 col-start-2 " onClick={toggle} >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">

                        <g color="#2C3878"  stroke-width="3">
                            <line {...line1} className="transition" stroke-width="5"  />
                            <line x1="0" x2="50" y1="20" y2="20" />
                            <line {...line2} stroke-width="5"  />
                        </g>

                    </svg>
                </button>


                <ul className={` justify-between items-center md:text-[20px] text-[16px] md:flex ${hide}  lg:w-[58%] md:w-[75%] md:m-0  mt-[30px] mb-[20px] row-strat-2 col-span-2`}>
                    <li><Link className={`md:hover:font-bold block text-center transition  md:pt-0  md:pb-0  pt-[10px]   pb-[10px]`} href="/">Home</Link> </li>
                    <li><Link className={`md:hover:font-bold block text-center transition  md:pt-0  md:pb-0  pt-[10px]   pb-[10px]`} href="/Pages/About">About Us</Link> </li>
                    <li><Link className={`md:hover:font-bold block text-center transition  md:pt-0  md:pb-0  pt-[10px]   pb-[10px]`} href="/Pages/Services">Services</Link> </li>
                    <li><Link className={`md:hover:font-bold block text-center transition  md:pt-0  md:pb-0  pt-[10px]   pb-[10px]`} href="/Pages/Teams">Our Teams</Link> </li>
                    <li><Link className={`md:hover:font-bold block text-center transition  md:pt-0  md:pb-0  pt-[10px]   pb-[10px]`} href="/">Contact Us</Link></li>
                </ul>

                
            </div>
        </header>

    );
}

