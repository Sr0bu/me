'use client';

import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/nav/Navbar";
import { usePathname } from "next/navigation";
import {hideNavbarOnPaths} from "@/utils/layoutVisibility";

export default function RootLayout({
children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname() ?? ''; //Always String
    const showNavbar = !hideNavbarOnPaths.some((prefix) => pathname.startsWith(prefix));

    return (
        <html lang="en">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {showNavbar && <Navbar />}
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
