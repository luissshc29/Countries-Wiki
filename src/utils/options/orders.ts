import { OptionType } from "@/src/utils/types/OptionType";
import { v4 as uuid } from "uuid";

export const orders: OptionType[] = [
    {
        id: uuid(),
        name: "A - Z",
        value: "a-z",
    },
    {
        id: uuid(),
        name: "Z - A",
        value: "z-a",
    },
    {
        id: uuid(),
        name: "Most populous",
        value: "most-populous",
    },
    {
        id: uuid(),
        name: "Least populous",
        value: "least-populous",
    },
];
