import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CountryPedia" },
    { name: "description", content: "Discover details about every country around the world" },
  ];
}

export default function Home() {
  return (
    <section className="flex items-center justify-center w-full h-screen p-8 text-gray-900 overflow-hidden -mt-[68px]">
      <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-42 mt-16 md:mt-0">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-gray-900">
            Explore Countries with Real-Time Data
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Discover details about every country around the world - from capitals to regions!
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link to="/countries" className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-white font-semibold rounded-xl shadow-md hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
              Explore Countries
            </Link>

            <Link to="/about" className="w-full sm:w-auto px-8 py-3 bg-transparent text-cyan-600 font-semibold border border-cyan-600 rounded-xl shadow-md hover:bg-cyan-50 transition-colors duration-300 ease-in-out cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A globe with a light color palette"
            className="rounded-xl shadow-xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
