import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from "react";

const FilterContext = createContext<any>("");
FilterContext.displayName = "Filter";

export const FilterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filter, setFilter] = useState<string>("default");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    const {
        filter,
        setFilter,
    }: { filter: string; setFilter: Dispatch<SetStateAction<string>> } =
        useContext(FilterContext);

    function alterFilter(value: string) {
        setFilter(value);
    }

    return {
        filter,
        alterFilter,
    };
};
