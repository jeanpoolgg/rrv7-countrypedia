const about = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Countrypedia</h1>
        <p className="text-gray-600 text-lg">
          Countrypedia is a simple project built with <span className="font-semibold">React Router v7 </span>
          that allows you to explore countries around the world using the
          <span className="font-semibold"> REST Countries API</span>.
        </p>
      </section>

      {/* Features */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mb-12">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🌍 Explore</h2>
          <p className="text-gray-600">
            Search and filter countries by name or continent. Discover population, region, and more.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🔎 Details</h2>
          <p className="text-gray-600">
            Access detailed information of each country, fetched in real-time from the API.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🎨 Design</h2>
          <p className="text-gray-600">
            Built with <span className="font-semibold">Tailwind CSS</span> for a clean and responsive UI.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm">
        Made with ❤️ by jeanpoolgg · Countrypedia Project
      </footer>
    </main>
  );
}

export default about