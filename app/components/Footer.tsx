import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex justify-center items-center gap-2 h-[10vh] mt-12 shadow-top dark:shadow-neutral-900 shadow-neutral-200">
            <p className="text-xs md:text-sm font-semibold">
                Feito por Luis Henrique
            </p>
            <p className="text-xl">|</p>
            <div className="flex gap-1 items-center text-sm font-semibold">
                <a href="https://www.instagram.com/luissshc_/">
                    <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/luis-henrique-6a7425165/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/luissshc29">
                    <AiOutlineGithub />
                </a>
            </div>
        </footer>
    );
}
