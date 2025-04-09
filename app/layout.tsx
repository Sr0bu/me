import "./globals.css";
import {ThemeProvider} from "next-themes";
import Navbar from "@/components/nav/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <Navbar></Navbar>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
