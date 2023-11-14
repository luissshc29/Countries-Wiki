import { createContext, useState } from "react";
import { SearchContextProvider } from "./SearchContext";
import { FilterContextProvider } from "./FilterContext";
import { OrderContextProvider } from "./OrderContext";

const GeneralContext = createContext<any>("");
GeneralContext.displayName = "General";

export const GeneralContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [general, setGeneral] = useState<string>("");

    return (
        <GeneralContext.Provider value={{ general, setGeneral }}>
            <SearchContextProvider>
                <OrderContextProvider>
                    <FilterContextProvider>{children}</FilterContextProvider>
                </OrderContextProvider>
            </SearchContextProvider>
        </GeneralContext.Provider>
    );
};
