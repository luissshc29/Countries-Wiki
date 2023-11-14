import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Switch } from "@/src/shadComponents/ui/switch";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
    const { setTheme, resolvedTheme } = useTheme();

    function toggleTheme(newTheme: "dark" | "light") {
        setTheme(newTheme);
    }

    return (
        <div className="flex justify-between items-center p-4 md:p-8 shadow-md dark:shadow-neutral-900 shadow-neutral-200 h-[15vh] md:h-[20vh]">
            <Link className="flex gap-3 md:gap-6 items-center w-fit " href="/">
                <Image
                    src="/black-logo.png"
                    alt="Logo"
                    className="dark:hidden"
                    width={30}
                    height={30}
                />
                <Image
                    src="/logo.png"
                    alt="Logo"
                    className="hidden dark:inline-block"
                    width={30}
                    height={30}
                />
                <h1 className="font-bold sm:text-xl md:text-2xl">
                    Countries Wiki
                </h1>
            </Link>
            <div className="flex gap-2 items-center text-lg">
                <MdOutlineLightMode />
                <Switch
                    //defaultChecked={resolvedTheme === "dark"}
                    onCheckedChange={(e) =>
                        e ? toggleTheme("dark") : toggleTheme("light")
                    }
                />
                <MdOutlineDarkMode />
            </div>
        </div>
    );
}
