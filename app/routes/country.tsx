import type { CountryPage } from "~/types/country";
import type { Route } from "./+types/country";

export async function loader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

const Country = ({ loaderData }: Route.ComponentProps) => {
  const data = loaderData![0] as CountryPage;

  const country = {
    name: data.name.common || "N/A",
    officialName: data.name.official || "N/A",
    region: data.region || "N/A",
    subregion: data.subregion || "N/A",
    capital: data.capital || "N/A",
    population: data.population || "N/A",
    flagUrl: data.flags?.png || "",
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-cyan-200">
        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-cyan-700 mb-4 text-center">
          {country.name}
        </h1>
        <h2 className="text-lg text-gray-600 text-center mb-8">
          Official name:{" "}
          <span className="font-semibold text-cyan-600">
            {country.officialName}
          </span>
        </h2>

        {/* Grid 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Columna 1: Bandera */}
          <div className="flex justify-center">
            {country.flagUrl ? (
              <img
                src={country.flagUrl}
                alt={`${country.name} flag`}
                className="w-72 h-auto rounded-xl shadow-md border border-gray-200"
              />
            ) : (
              <div className="w-72 h-48 flex items-center justify-center bg-gray-100 text-gray-400 rounded-xl">
                No flag available
              </div>
            )}
          </div>

          {/* Columna 2: Info */}
          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-cyan-600">Region:</span>{" "}
              {country.region}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-cyan-600">Subregion:</span>{" "}
              {country.subregion}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-cyan-600">Capital:</span>{" "}
              {Array.isArray(country.capital)
                ? country.capital.join(", ")
                : country.capital}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-cyan-600">Population:</span>{" "}
              {Number(country.population).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
