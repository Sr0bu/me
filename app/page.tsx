import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
    return (
        <>
            <SpeedInsights />
            <div className="p-4">
                <Link href={"./about"} className={buttonVariants({variant: "secondary"})}>About</Link>
            </div>
        </>
    )
}