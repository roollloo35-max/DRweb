import Image from "next/image";
import BunnerTeams from "@/app/Pages/Teams/bunnerTeams/BunnerT"
import ServiceA from "../About/components/service/service";
import Disigner from "@/app/Pages/Teams/disigner/Disigner"

export default function Page() {
    return (
        <div>
            <BunnerTeams />
            <Disigner />
            <ServiceA />
       </div>

    );
}