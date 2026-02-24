import Logo from "../assetsSvg/logo";
import { roboto } from "@/app/fonts/fonts";
import styles from "@/app/componets/header/header.module.css"
import Link from "next/link";


export default function Header() {
    return (

        <header className="">
            <div className="w-[1200px] pt-[30px] m-auto text-[72px] flex flex-row justify-between ">

                <Logo />

                <ul className={`${roboto.className} ${styles.menu} text-[16px] `}>
                    <li><Link className={`${styles.links} transition`} href="/">Home</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/Pages/About">About Us</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/Pages/Services">Services</Link> </li>
                    <li><Link className={`${styles.links} transition`} href="/">Our Teams</Link> </li>
                    <li><Link className={`${styles.btn__header}`} href="/">Contact Us</Link></li>
                </ul>


            </div>
        </header>

    );
}

