import { useState } from "react";


export default function useActiveItem<T>(): [activeItem: T | null, updateActiveItem: (newActiveItem: T) => void, removeActiveItem: () => void]{
    const [activeItem, setActiveItem] = useState<T | null>(null)

    const updateActiveItem = (newActiveItem: T | null) => {
        setActiveItem(newActiveItem)
    }   

    const removeActiveItem = () => {
        setActiveItem(null)
    }

    return [activeItem, updateActiveItem, removeActiveItem]
}
