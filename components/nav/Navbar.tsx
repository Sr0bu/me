'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme/themebutton'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-background border-b shadow-sm px-4 py-3 w-full">
            <div className="w-full flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-foreground select-none">
                    Sebastian Robu
                </Link>

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="hover:underline text-foreground select-none">Home</Link>
                    <Link href="/about" className="hover:underline text-foreground select-none">Über uns</Link>
                    <Link href="/contact" className="hover:underline text-foreground select-none">Kontakt</Link>
                    <ModeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="select-none">
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="block hover:underline text-foreground select-none">Home</Link>
                    <Link href="/about" className="block hover:underline text-foreground select-none">Über uns</Link>
                    <Link href="/contact" className="block hover:underline text-foreground select-none">Kontakt</Link>
                </div>
            )}
        </nav>
    )
}
