import useSWR from 'swr';

export default function useLocations() {
  
    const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'

    const getLocations = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(URL, getLocations)

    return {
        locations: data,
        isLoading,
        isError: error,
    };
}
