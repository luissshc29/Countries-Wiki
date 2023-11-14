import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from "react";

const SearchContext = createContext<any>("");
SearchContext.displayName = "Search";

export const SearchContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [search, setSearch] = useState<string>("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => {
    const {
        search,
        setSearch,
    }: { search: string; setSearch: Dispatch<SetStateAction<string>> } =
        useContext(SearchContext);

    return {
        search,
        setSearch,
    };
};
