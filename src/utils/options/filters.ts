import { OptionType } from "@/src/utils/types/OptionType";
import { v4 as uuid } from "uuid";

export const filters: OptionType[] = [
    {
        id: uuid(),
        name: "Africa",
        value: "africa",
    },
    {
        id: uuid(),
        name: "Americas",
        value: "americas",
    },
    {
        id: uuid(),
        name: "Asia",
        value: "asia",
    },
    {
        id: uuid(),
        name: "Europe",
        value: "europe",
    },
    {
        id: uuid(),
        name: "Oceania",
        value: "oceania",
    },
];
