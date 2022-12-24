import { useState } from "react";


type useFilterReturnData<T> = [
    filterDate: (date: T[]) => T[], 
    updateFilterValue: (newValue: string) => void, 
    updateFilterKey: (newKey: keyof T) => void, 
    updateFilterAll: (newValue: string, newKey: keyof T) => void, 
]

export default function useFilter<T extends object>(defaultFilterKey: keyof T, ): useFilterReturnData<T>
{
    const [filterState, setFilterState] = useState({key: defaultFilterKey, value1: ''})

    const filterDate = (date: T[]) => {
        return date.filter(dateItem => String(dateItem[filterState.key]).includes(filterState.value1))
    }

    const updateFilterValue = (newValue: string) => {
        setFilterState({...filterState, value1: newValue})
    }
    
    const updateFilterKey = (newKey: keyof T) => {
        setFilterState({...filterState, key: newKey})
    }

    const updateAll = (newValue: string, newKey: keyof T) => {
        setFilterState({key: newKey, value1: newValue})
    }
    return[filterDate, updateFilterValue, updateFilterKey, updateAll]
}