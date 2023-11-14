"use client";

import { CountryType } from "@/src/utils/types/CountryType";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useSearchContext } from "@/src/utils/context/SearchContext";
import { useFilterContext } from "@/src/utils/context/FilterContext";
import { useOrderContext } from "@/src/utils/context/OrderContext";
import Container404 from "./Container404";

export default function CountriesContainer({
    countries,
}: {
    countries: CountryType[];
}) {
    const { search } = useSearchContext();
    const { filter } = useFilterContext();
    const { order } = useOrderContext();

    const [handledCountries, setHandledCountries] = useState(countries);

    function orderCountries(arr: CountryType[]) {
        var orderedArr = arr;
        switch (order) {
            default:
                return (orderedArr = arr);
            case "a-z":
                return orderedArr.sort((a, b) =>
                    a.name.common.toLowerCase() < b.name.common.toLowerCase()
                        ? -1
                        : 1
                );
            case "z-a":
                return orderedArr.sort((a, b) =>
                    a.name.common.toLowerCase() < b.name.common.toLowerCase()
                        ? 1
                        : -1
                );
            case "most-populous":
                return orderedArr.sort((a, b) =>
                    a.population < b.population ? 1 : -1
                );
            case "least-populous":
                return orderedArr.sort((a, b) =>
                    a.population > b.population ? 1 : -1
                );
        }
    }

    function handleCountries(arr: CountryType[]) {
        // Searching if search !== ""
        var searchedArr = arr;

        if (search) {
            searchedArr = arr.filter((item) =>
                item.name.common.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filtering if filter !== 'default'

        var filteredArr = searchedArr;

        if (filter === "default") {
            filteredArr = searchedArr;
        } else {
            filteredArr = searchedArr.filter(
                (item) => item.region.toLowerCase() === filter
            );
        }

        setHandledCountries(filteredArr);
    }

    useEffect(() => {
        handleCountries(countries);
    }, [search, filter, order]);

    if (handledCountries.length === 0) {
        return <Container404 />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto my-8 w-fit justify-evenly">
            {orderCountries(handledCountries).map((country, index) => (
                <CountryCard country={country} key={index} />
            ))}
        </div>
    );
}
