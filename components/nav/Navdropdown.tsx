"use client"

import * as React from "react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"



export function Navdropdown() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary">Other</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Other</DropdownMenuLabel>
                <DropdownMenuItem>Online</DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
