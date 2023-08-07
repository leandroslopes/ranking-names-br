"use client"

import useTypeFilter from "../hooks/useTypeFilter"

interface TypeFilterProps {

}

export function TypeFilter(props : TypeFilterProps) {

    const {
        filter,
        setFilter,
        onFilterChange
    } = useTypeFilter()

    return(
        <div className={`
            flex justify-between pt-2 pb-2 text-2xl
        `}>
            <div className={`
                m-2
            `}>
                <input 
                    type="radio" 
                    name="filter" 
                    id="decade" 
                    value="decade"
                    checked={filter === "decade"}
                    onChange={onFilterChange}
                />
                <label htmlFor="decade" className="ml-1"                                                                                                                                                                                                                    >Decade</label>
            </div>
            <div className={`
                m-2
            `}>
                <input 
                    type="radio" 
                    name="filter" 
                    id="location" 
                    value="location"
                    checked={filter === "location"}
                    onChange={onFilterChange}
                />
                <label htmlFor="location" className="ml-1">Location</label>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            </div>
            <div className={`
                m-2
            `}>
                <input 
                    type="radio" 
                    name="typeFilter" 
                    id="genre" 
                    value="genre"
                    checked={filter === "genre"}
                    onChange={onFilterChange}
                /> 
                <label htmlFor="genre" className="ml-1">Genre</label>
            </div>
        </div>
    )
}