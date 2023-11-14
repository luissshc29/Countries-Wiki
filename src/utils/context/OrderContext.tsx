import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from "react";

const OrderContext = createContext<any>("");
OrderContext.displayName = "Order";

export const OrderContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [order, setOrder] = useState<string>("default");

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => {
    const {
        order,
        setOrder,
    }: { order: string; setOrder: Dispatch<SetStateAction<string>> } =
        useContext(OrderContext);

    function alterOrder(value: string) {
        setOrder(value);
    }

    return {
        order,
        alterOrder,
    };
};
