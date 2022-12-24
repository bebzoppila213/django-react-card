import { useState } from "react"
import FormItem from "./FormItem"
import CustopSelect from "./CustomSelect"
import { Card } from "../interfaces/Card";

type FilterOptionsType = {
    text: string,
    value: keyof Card
}

const filterOptions: FilterOptionsType[] = [{
    text: 'Остаток',
    value: 'balanse'
},{
    text: 'Номер карты',
    value: 'number'
},
{
    text: 'Серия карты',
    value: "series"
},
{
    text: 'Дата выпуска',
    value: "release_date"
}
]
type CardFilterProps = {
    updateFilterAll: (newValue: string, newKey: keyof Card) => void
}

export default function CardFilter({updateFilterAll}: CardFilterProps){
    const [filterState, setFilterState] = useState("")
    const [selectState, setSelectState] = useState<string>("balanse")

    const updateData = () => {
        updateFilterAll(filterState, selectState as keyof Card)
    }

    return(
        <div className="mb-1">
            <FormItem updateState={(text) => setFilterState(text)} defaultValue={filterState} label="Введите строку для фильтрации"></FormItem>
            <CustopSelect updateSelect={(selectData) => setSelectState(selectData)} label="" defaultSelect={selectState} options={filterOptions}></CustopSelect>
            <button onClick={updateData} className="btn btn-success mt-2">Отфильтровать</button>
        </div>
    )
}