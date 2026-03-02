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

        <header className="relative grid grid-cols-[minmax(16px,1fr)_minmax(320px,1200px)_minmax(16px,1fr)]">
            <div className="col-start-2 w-full fixed m-auto md:static bg-[#fff] left-0 pt-[20px] pl-[50px] pr-[40px] md:pl-none md:pr-none top-0 z-[20] text-[72px] flex flex-row justify-between item-center">

                <Logo />

                <ul className={` ${styles.menu} text-[18px] md:text-[16px] md:flex ${hide}  lg:w-[58%] md:w-[75%]`}>
                    <li><Link className={`${styles.links} transition`} href="/">Home</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/Pages/About">About Us</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/Pages/Services">Services</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/">Our Teams</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/">Contact Us</Link></li>
                </ul>

                <button className="block md:hidden mr-[20px] mt-[7px] cursor-pointer" onClick={toggle} >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">

                        <g color="#2C3878"  stroke-width="3">
                            <line {...line1} className="transition" stroke-width="5"  />
                            <line x1="0" x2="50" y1="20" y2="20" />
                            <line {...line2} stroke-width="5"  />
                        </g>

                    </svg>
                </button>
            </div>
        </header>

    );
}

