'use client'

import { useTypeFilterContext } from "../context";
import useLocations from "../services/locations";
import { Ranking } from "./Ranking";
import { Select } from "./Select";
import Title from "./Title";
import { TypeFilter } from "./TypeFilter";

interface HomePageProps {

}
export default function HomePage(props : HomePageProps) {
    
    const { filter, filterValue } = useTypeFilterContext()

    const getLocations = useLocations()

    const locations = getLocations.locations

    return(
        <div className={`
            pt-4 pb-8
        `}>
            <Title title="Name Rankings"/>
            <TypeFilter />
            { filter ? <Select data={locations} /> : '' }
            { filterValue ? <Ranking /> : '' } 
        </div>
    )
}