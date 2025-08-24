import type { Route } from "./+types/country";

export async function clientLoader({params}: Route.LoaderArgs) {
  const countryName = params.countryName
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true
`)
    const data = await res.json();
    return data;
}


const country = ({loaderData}: Route.ComponentProps) => {
  console.log(loaderData)
  return (
    <div>country</div>
  )
}

export default country