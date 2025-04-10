import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Sidebar} from "@/components/nav/Sidebar";
import {Navdropdown} from "@/components/nav/Navdropdown";


export default function Home() {
    return (
        <>
            <SpeedInsights />
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40">
                <Link href={"./about"} className={buttonVariants({variant: "secondary"})}>About</Link>
                <Sidebar></Sidebar>
                <Navdropdown></Navdropdown>
            </div>
        </>
    )
}