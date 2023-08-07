import { SetStateAction, useState } from "react";

const useTypeFilter = () => {

    const [filter, setFilter] = useState("")

    const onFilterChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setFilter(e.target.value)
    }

    return {
        filter,
        setFilter,
        onFilterChange
    }
}

export default useTypeFilter