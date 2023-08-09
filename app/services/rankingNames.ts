import useSWR from 'swr';

export default function useRankingNames(filter: string, filterValue: string) {

    const DECADE = 'decade'
    const LOCATION = 'location'
    const GENRE = 'genre'

    let rankingType = ''

    if (filter === DECADE) {
        rankingType = `decada=${filterValue}`
    } else if (filter === LOCATION) {
        rankingType = `localidade=${filterValue}`
    } else if (filter === GENRE) {
        rankingType = `sexo=${filterValue}`
    }
    
    const URL = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?${rankingType}`

    const getLocations = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(URL, getLocations)
    
    return {
        ranking: data,
        isLoading,
        error
    };
}
