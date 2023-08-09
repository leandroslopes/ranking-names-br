import { useTypeFilterContext } from "../context"
import useRankingNames from "../services/rankingNames"

interface RankingProps {

}

export function Ranking(props : RankingProps) {
    
    const { filter, filterValue } = useTypeFilterContext()

    const getRankingNamesResponse = useRankingNames(filter, filterValue)
    
    let isLoading = getRankingNamesResponse.isLoading
    const getRankingNames = getRankingNamesResponse.ranking
    
    let rankingNames = []
    
    if (!isLoading) {
        rankingNames = getRankingNames[0].res
    } 
        

    return (
        <div className={`
            flex justify-center overflow-y-auto h-96
        `}>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b border-t font-medium dark:border-neutral-500">
                <tr>
                    <th scope="col" className="px-6 py-4">NAME</th>
                    <th scope="col" className="px-6 py-4 text-center">RANKING</th>
                    <th scope="col" className="px-6 py-4 text-center">FREQUENCY</th>
                </tr>
                </thead>
                <tbody>
                    { rankingNames.map((rankingName: {nome: string, frequencia: number, ranking: number}) => (
                        <tr key={ rankingName.ranking } className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4">{ rankingName.nome }</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{ rankingName.ranking }</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{ rankingName.frequencia }</td>
                        </tr>
                        )) 
                    }
                </tbody>                
            </table>
        </div>
    )
}