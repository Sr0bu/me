import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <div className="p-4">
                <Link href={"./about"} className={buttonVariants({variant: "secondary"})}>About</Link>
            </div>
        </>
    )
}