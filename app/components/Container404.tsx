import React from "react";
import { TbWorldX } from "react-icons/tb";

export default function Container404() {
    return (
        <div className="min-h-[70vh] w-full grid place-items-center gap-4 p-8 md:p-0">
            <div className="flex flex-col justify-center md:flex-row items-center text-lg md:text-2xl gap-4 font-bold self-end">
                <div className="text-2xl">
                    <TbWorldX />
                </div>
                <h2 className="text-center">
                    We couldn't find any corresponding country.
                </h2>
            </div>
            <div className="self-start">
                <p className="text-md md:text-lg font-bold">
                    We recommend you try:
                </p>
                <ul className="text-sm md:text-md">
                    <li>- Changing the search</li>
                    <li>- Changing the filter</li>
                    <li>- Typing a valid URL (eg.: "/", "/country/...")</li>
                </ul>
            </div>
        </div>
    );
}
