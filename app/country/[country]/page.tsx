import DetailsContainer from "@/app/components/DetailsContainer";
import formatCountryName from "@/src/utils/functions/formatCountryName";
import { CountryType } from "@/src/utils/types/CountryType";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
    params,
}: {
    params: { country: string };
}) {
    const { country } = params;

    const res = await fetch(
        `https://restcountries.com/v3.1/name/${
            formatCountryName(country).urlName
        }`
    );
    const countrydata: CountryType[] = await res.json();

    return {
        title: `${countrydata[0].name.common} | Countries Wiki`,
    };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries: CountryType[] = await res.json();

    return countries.map((country) => ({
        country: country.name.common
            .toLowerCase()
            .replaceAll("-", "_")
            .replaceAll(" ", "-"),
    }));
}

export default async function DetailsPage({
    params,
}: {
    params: { country: string };
}) {
    const { country } = params;

    const res = await fetch(
        `https://restcountries.com/v3.1/name/${
            formatCountryName(country).urlName
        }`
    );
    const json: CountryType[] = await res.json();
    const selectedCountry = json[0];

    return (
        <div>
            <Link
                href="/"
                className="flex items-center gap-2 w-fit shadow-md duration-300 active:shadow-inner hover:bg-background dark:shadow-neutral-700 shadow-neutral-400 px-4 py-2 m-4 rounded-md"
            >
                <AiOutlineArrowLeft />
                <p>Back</p>
            </Link>
            <DetailsContainer country={selectedCountry} />
        </div>
    );
}
