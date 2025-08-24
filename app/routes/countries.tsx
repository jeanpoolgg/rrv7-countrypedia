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
      return <p className="text-center text-red-500 mt-10">No hay datos</p>;
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
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-cyan-700">Countries</h2>
  
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <select
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All regions</option>
            <option value={Continent.Africa}>{Continent.Africa}</option>
            <option value={Continent.Asia}>{Continent.Asia}</option>
            <option value={Continent.Europe}>{Continent.Europe}</option>
            <option value={Continent.NorthAmerica}>{Continent.NorthAmerica}</option>
            <option value={Continent.Oceania}>{Continent.Oceania}</option>
            <option value={Continent.SouthAmerica}>{Continent.SouthAmerica}</option>
          </select>
        </div>
  
        {filteredCountries.length === 0 ? (
          <div className="text-center text-gray-500 font-semibold">No countries match your filters.</div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country: Country) => (
              <li
                key={country.name.official}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  to={`/countries/${country.name.common}`}
                  className="text-lg font-semibold text-cyan-600 hover:underline"
                >
                  {country.name.common}
                </Link>
                <div className="mt-2 text-gray-600">
                  <span className="font-medium">Region:</span> {country.continents[0]} |{" "}
                  <span className="font-medium">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

export default Countries