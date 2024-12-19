import React, { createContext, useState, ReactNode } from "react";
import { Item } from "../model/Item";

// Create ItemContext
export const ItemContext = createContext<{
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
} | null>(null);

// Define CustomerProvider Component
export function CustomerProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Item[]>([]);

    return (
        <ItemContext.Provider value={{ items, setItems }}>
            {children}
        </ItemContext.Provider>
    );
}
