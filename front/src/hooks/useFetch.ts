import axios from "axios";
import { useEffect, useState } from "react";



export default function useFetch<T>(defaultState: T, url: string): [data: T, updateData: (data: T) => void]{
    const [data, setData] = useState(defaultState)

    const loadData = async () => {
        const response = await axios.get<T>(url)
        updateData(response.data)
    }

    const updateData = (data: T) => {
        setData(data)
    }

    useEffect(()=> {
        loadData()
    },[url])
    return [data, updateData]
}