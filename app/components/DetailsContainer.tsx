import { CountryType } from "@/src/utils/types/CountryType";
import React from "react";

export default function DetailsContainer({
    country,
}: {
    country: CountryType;
}) {
    function getLanguages(languages: object) {
        return Object.values(languages);
    }

    return (
        <div className="w-[90%] mx-auto my-10 lg:my-0 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[70vh]">
            <img
                className="w-[70%] md:w-[60%] lg:w-[90%] mx-auto"
                src={country.flags.png}
                alt={`${country.name.common} flag`}
            />
            <div className="p-4 my-auto">
                <h1 className="text-2xl md:text-3xl font-bold my-3">
                    {country.name.common}
                </h1>
                <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 items-center gap-x-4 gap-y-2">
                    {country.name.nativeName && (
                        <p>
                            <span className="font-bold text-md lg:text-lg">
                                Native Name:{" "}
                            </span>
                            {country.name.nativeName.common}
                        </p>
                    )}

                    <p>
                        <span className="font-bold text-md lg:text-lg">
                            Population:{" "}
                        </span>
                        {country.population.toLocaleString("en")}
                    </p>
                    <p>
                        <span className="font-bold text-md lg:text-lg">
                            Region:{" "}
                        </span>
                        {country.region}
                    </p>
                    <p>
                        <span className="font-bold text-md lg:text-lg">
                            Sub Region:{" "}
                        </span>
                        {country.subregion}
                    </p>
                    <p>
                        <span className="font-bold text-md lg:text-lg">
                            Capital:{" "}
                        </span>
                        {country.capital}
                    </p>
                    <p>
                        <span className="font-bold text-md lg:text-lg">
                            Top Level Domain:{" "}
                        </span>
                        {country.tld}
                    </p>
                    {country.currencies && (
                        <div className="flex flex-wrap col-gap-1 items-center">
                            <span className="font-bold text-md lg:text-lg w-full">
                                Currencies:{" "}
                            </span>
                            {getLanguages(country.currencies).map(
                                (curr: typeof country.currencies) => (
                                    <p>
                                        {curr.name} ({curr.symbol})
                                    </p>
                                )
                            )}
                        </div>
                    )}

                    {country.languages && (
                        <div className="flex gap-1 items-center">
                            <span className="font-bold text-md lg:text-lg">
                                Languages:{" "}
                            </span>
                            {getLanguages(country.languages).map((language) => (
                                <p>{language}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
