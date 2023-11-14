"use client";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import { GeneralContextProvider } from "@/src/utils/context/GeneralContext";
import Footer from "./components/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="logo.png" />
            </head>
            <body className={nunitoSans.className}>
                <GeneralContextProvider>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </GeneralContextProvider>
            </body>
        </html>
    );
}
