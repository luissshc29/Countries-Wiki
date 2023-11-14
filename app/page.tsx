import SearchBox from "./components/SearchBox";
import SelectionMenu from "./components/SelectionMenu";
import CountriesContainer from "./components/CountriesContainer";
import { filters } from "@/src/utils/options/filters";
import { orders } from "@/src/utils/options/orders";
import { Metadata } from "next";
import { CountryType } from "@/src/utils/types/CountryType";

export const metadata: Metadata = {
    title: "Home | Countries Wiki",
    description: "Information about any country just a click away!",
};

export default async function Home() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries: CountryType[] = await res.json();

    return (
        <>
            <div className="w-[90%] mx-auto my-8">
                <div className="flex flex-col gap-4 md:flex-row justify-between">
                    <SearchBox placeholder="Search for a country..." />
                    <div className="flex justify-evenly w-4/5 mx-auto md:w-3/5 md:ml-auto md:mr-0 gap-4">
                        <SelectionMenu context="order" options={orders}>
                            <h2>Order by</h2>
                        </SelectionMenu>
                        <SelectionMenu context="filter" options={filters}>
                            <h2>Filter by Region</h2>
                        </SelectionMenu>
                    </div>
                </div>
                <CountriesContainer countries={countries} />
            </div>
        </>
    );
}
