import type { Route } from "./+types/countries";
import type { Country } from '../types/index';
import { Link } from "react-router";

export async function clientLoader(): Promise<Country[]> {
    const res = await fetch(
        "https://restcountries.com/v3.1/independent?status=true&fields=name,continents,population"
    );
    const data: Country[] = await res.json();
    return data;
}


export function HydrateFallback() {
    return <p>Loading...</p>;
}



const Countries = ({ loaderData }: Route.ComponentProps) => {


    if (!loaderData) {
        return <p>No hay datos</p>;
    }

    const countries = loaderData as Country[];

    return (
        <div>
            <ul>
                {countries.map((country: Country) => (
                    <li key={country.name.official}>
                        <Link to={`/countries/${country.name.common}`} >{country.name.common}</Link>
                        <div>
                            Region: {country.continents[0]} | Population: {country.population}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries