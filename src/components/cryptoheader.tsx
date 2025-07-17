
export const CryptoHeader = () => (
    <header className="flex items-center justify-between bg-gray-800 px-6 py-4 text-white">
        <div className="flex items-center space-x-6">
            <a href="/" className="hover:opacity-80">Home</a>
            <a href="/markets" className="hover:opacity-80">Markets</a>
            <a href="/etfs" className="hover:opacity-80">ETFs</a>
            <a href="/dashboard" className="hover:opacity-80">Dashboard</a>
        </div>
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search markets"
                className="bg-gray-700 placeholder-gray-400 text-white px-2 py-1 rounded focus:outline-none"
            />
            <a href="/login" className="hover:opacity-80">Login</a>
        </div>
    </header>
)
