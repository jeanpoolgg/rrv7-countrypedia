import type { Route } from "./+types/countries";
import { Continent, type Country } from '../types/index';
import { Link } from "react-router";
import { useState } from "react";

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

    const [search, setSearch] = useState<string>("");
    const [continent, setContinent] = useState<string>("");


    const filteredCountries = countries.filter((country: Country) => {

        const matchesContinent = !continent || country.continents[0].toLowerCase() === continent.toLowerCase();

        const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
        return matchesSearch && matchesContinent;
    });


    return (
        <div>
            <h2>Countries</h2>

            <div>
                <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={continent} onChange={(e) => setContinent(e.target.value)} >
                    <option value="">All regions</option>
                    <option value={Continent.Africa}>{Continent.Africa}</option>
                    <option value={Continent.Asia}>{Continent.Asia}</option>
                    <option value={Continent.Europe}>{Continent.Europe}</option>
                    <option value={Continent.NorthAmerica}>{Continent.NorthAmerica}</option>
                    <option value={Continent.Oceania}>{Continent.Oceania}</option>
                    <option value={Continent.SouthAmerica}>{Continent.SouthAmerica}</option>
                </select>
            </div>
            <ul>
                {filteredCountries.map((country: Country) => (
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