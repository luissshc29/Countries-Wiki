"use client";

import React from "react";
import { Input, InputProps } from "@/src/shadComponents/ui/input";
import { TbWorldSearch } from "react-icons/tb";
import { useSearchContext } from "@/src/utils/context/SearchContext";

export default function SearchBox({
    ...props
}: InputProps & React.RefAttributes<HTMLInputElement>) {
    const { setSearch, search } = useSearchContext();

    return (
        <div className="relative w-full md:w-1/3 flex items-center">
            <Input
                {...props}
                onChange={(e) => setSearch(e.target.value)}
                defaultValue={search}
            />
            <div className="w-fit h-fit absolute right-0 mr-3">
                <TbWorldSearch />
            </div>
        </div>
    );
}
