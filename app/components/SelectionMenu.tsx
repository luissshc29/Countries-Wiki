"use client";

import { OptionType } from "@/src/utils/types/OptionType";
import { SelectValue } from "@radix-ui/react-select";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/src/shadComponents/ui/select";
import { useFilterContext } from "@/src/utils/context/FilterContext";
import { useOrderContext } from "@/src/utils/context/OrderContext";

export default function SelectionMenu({
    options,
    children,
    context,
}: {
    options: OptionType[];
    children: React.ReactNode;
    onValueChange?: () => void;
    context?: "filter" | "order";
}) {
    const { alterFilter } = useFilterContext();
    const { alterOrder } = useOrderContext();

    function onChange(value: string) {
        if (context === "filter") {
            alterFilter(value);
        }

        if (context === "order") {
            alterOrder(value);
        }
    }

    return (
        <Select onValueChange={(value) => onChange(value)}>
            <SelectTrigger className="w-1/2">
                <SelectValue placeholder={children} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="default">{children}</SelectItem>
                {options.map((option) => (
                    <SelectItem value={option.value} key={option.id}>
                        {option.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
