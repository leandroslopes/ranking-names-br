import useTypeFilter from "../hooks/useTypeFilter";
import { Select } from "./Select";
import Title from "./Title";
import { TypeFilter } from "./TypeFilter";

interface HomePageProps {

}
export default function HomePage(props : HomePageProps) {

    const {
        filter
    } = useTypeFilter()

    return(
        <div>
            <Title title="Name Rankings"/>
            <TypeFilter />
            <Select name="decade"/>
            {filter}
        </div>
    )
}