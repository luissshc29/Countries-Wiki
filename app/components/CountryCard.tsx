import { CountryType } from "@/src/utils/types/CountryType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CountryCard({ country }: { country: CountryType }) {
    return (
        <Link
            href={`/country/${country.name.common
                .toLowerCase()
                .replaceAll("-", "_")
                .replaceAll(" ", "-")}`}
            className="shadow-lg shadow-neutral-400 dark:shadow-neutral-900 flex flex-col gap-2 hover:animate-hop duration-300 w-fit mx-auto rounded-b-md"
        >
            <img
                src={country.flags.png}
                alt={country.name.common}
                className="mx-auto"
            />
            <div className="p-4 my-auto">
                <p className="font-bold text-lg">{country.name.common}</p>
                <p>
                    <span className="font-bold">Population: </span>
                    {country.population.toLocaleString("en")}
                </p>
                <p>
                    <span className="font-bold">Region: </span>
                    {country.region}
                </p>
                <p>
                    <span className="font-bold">Capital: </span>
                    {country.capital}
                </p>
            </div>
        </Link>
    );
}
