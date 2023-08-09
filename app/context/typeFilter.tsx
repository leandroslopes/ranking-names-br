import { SetStateAction, createContext, useContext, useState } from "react";

type TypeFilterContextProps = {
    filter: string,
    filterValue: string,
    onFilterChange: (e: { target: { value: SetStateAction<string> } }) => void
    onChangeSelectOption: (e: { target: { value: SetStateAction<string> } }) => void
}

const TypeFilterContext = createContext<TypeFilterContextProps>({} as TypeFilterContextProps)

export const TypeFilterProvider = ({ children }: { children: React.ReactNode }) => {

    const [filter, setFilter] = useState("")
    const [filterValue, setFilterValue] = useState("")

    const onFilterChange = (e: { target: { value: SetStateAction<string> } }) => {
        setFilter(e.target.value)
        setFilterValue("")
    }

    const onChangeSelectOption = (e: { target: { value: SetStateAction<string> } }) => {
        setFilterValue(e.target.value)
    }

    return (
        <TypeFilterContext.Provider value={
            { 
                filter, 
                filterValue,
                onFilterChange, 
                onChangeSelectOption 
            }
        }
        >
            { children }
        </TypeFilterContext.Provider>
    )
}

export const useTypeFilterContext = () => useContext(TypeFilterContext)