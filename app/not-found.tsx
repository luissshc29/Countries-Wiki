import React from "react";
import Container404 from "./components/Container404";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const metadata: Metadata = {
    title: "País não encontrado | Countries Wiki",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center">
            <Container404 />
            <Link
                href="/"
                className="flex items-center gap-2 w-fit shadow-md duration-300 active:shadow-inner hover:bg-background dark:shadow-neutral-700 shadow-neutral-400 px-4 py-2 m-4 rounded-md scale-75 md:scale-100"
            >
                <AiOutlineArrowLeft />
                <p>Back</p>
            </Link>
        </div>
    );
}
