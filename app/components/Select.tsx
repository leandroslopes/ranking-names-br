'use client'

import { useTypeFilterContext } from "../context"
import useSWR from "swr"

interface SelectProps {
    data?: []
}

export function Select(props: SelectProps) {

    const { filter, onChangeSelectOption } = useTypeFilterContext()

    const DECADE = 'decade'
    const LOCATION = 'location'
    const GENRE = 'genre'

    function renderOptions() {

        let options = null

        if (filter === DECADE) {
            options = optionsDecade()
        } else if (filter === LOCATION) {
            options = optionsLocation()
        } else if (filter === GENRE) {
            options = optionsGenre()
        }
        
        return options
    }

    const optionsDecade = () => {

        const currentYear = new Date().getFullYear();
        const startDecade = Math.floor(currentYear / 10) * 10 - 90;

        const decadesOptions = Array.from(
            { length: (currentYear - startDecade + 10) / 10 },
            (_, index) => (
                <option key={startDecade + index * 10} value={startDecade + index * 10}>
                    {startDecade + index * 10}
                </option>
            )
        );

        return (
            <>
                { decadesOptions }
            </>
        )
    }

    const optionsLocation = () => {
        
        const locations = props.data
        
        const locationsSort = locations?.sort((a: { id: any; nome: any }, 
            b: { id: any; nome: any }) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0))

        const locationsOrganized = locationsSort?.map((city: { id: any; nome: any }) => 
            (<option key={city.id} value={city.id}>{city.nome}</option>))
        
        return (
            <>
                { locationsOrganized }
            </>
        )
    }

    const optionsGenre = () => {

        return (
            <>                
                <option key={0} value="M">Masculino</option>
                <option key={1} value="F">Feminino</option>
            </>
        )
    }

    return (
        <div className={`
            flex pb-8
        `}>
            <select
                name={filter}
                id={filter}
                className={`
                    form-select w-full text-gray-950
                `}
                onChange={onChangeSelectOption}
            >
                <option value="">Select a { filter }</option>
                <>
                    { renderOptions() }
                </>
            </select>
        </div>
    )
}