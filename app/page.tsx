import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
    return (
        <>

            <Link href={"./about"} className={buttonVariants({variant: "secondary"})}>About</Link>
        </>
    )
}