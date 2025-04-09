import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {ModeToggle} from "@/components/theme/themebutton";


export default function Home() {
    return (
        <>

            <Link href={"./about"} className={buttonVariants({variant: "secondary"})}>About</Link>
        </>
    )
}