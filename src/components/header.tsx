export const Header = () => (
    <header className="flex items-center justify-between bg-green-600 px-6 py-4">
        <div className="flex items-center space-x-6">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <a href="/projects" className="text-white hover:text-gray-200">Project Finance</a>
            <a href="/crypto" className="text-white hover:text-gray-200">Crypto</a>
            <a href="/health" className="text-white hover:text-gray-200">
                Health & Investment Management
            </a>
        </div>
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search"
                className="bg-green-500 text-white placeholder-gray-200 px-2 py-1 rounded focus:outline-none"
            />
            <a href="/login" className="text-white hover:text-gray-200">Login</a>
        </div>
    </header>
)
