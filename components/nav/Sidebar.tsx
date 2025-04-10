import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Mark as Online</Button>
            </SheetTrigger>
            <SheetContent side={"left"} className={"w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl"}>
                <SheetHeader>
                    <SheetTitle>Online</SheetTitle>
                    <SheetDescription>
                        See who is online.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right p-3">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right p-3">
                            Username
                        </Label>
                        <Input id="username" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button className={"text-secondary"} type="submit">Mark as Online</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
