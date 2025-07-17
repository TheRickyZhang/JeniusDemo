import { createFileRoute } from '@tanstack/react-router'
import {CryptoHeader} from "../components/cryptoheader";

export const Route = createFileRoute('/crypto')({
  component: CryptoHomePage,
})

function CryptoHomePage() {
  const etfs = [
    { name: 'Crypto Growth ETF', symbol: 'CGRT', apy: '8.5%' },
    { name: 'Digital Assets ETF', symbol: 'DAET', apy: '7.2%' },
    { name: 'DeFi Leaders ETF', symbol: 'DFLT', apy: '9.1%' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <CryptoHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="h-[60vh] flex flex-col items-center justify-center bg-[var(--color-primary)] text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Secure Crypto ETFs</h1>
          <p className="text-xl mb-6">Invest in diversified crypto ETFs with BankName.</p>
          <a
            href="/etfs"
            className="px-6 py-3 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:opacity-90"
          >
            Explore ETFs
          </a>
        </section>

        {/* Featured ETFs */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured ETFs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {etfs.map(etf => (
              <div key={etf.symbol} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-medium mb-2">{etf.name}</h3>
                <p className="mb-4">Symbol: {etf.symbol}</p>
                <p className="mb-4">Current APY: {etf.apy}</p>
                <a
                  href={`/etfs/${etf.symbol.toLowerCase()}`}
                  className="px-4 py-2 bg-[var(--color-primary-light)] text-white rounded hover:opacity-90"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p>1. Create an account and complete KYC.</p>
            <p>2. Deposit funds via bank transfer or card.</p>
            <p>3. Choose your preferred crypto ETF.</p>
            <p>4. Track performance and manage your portfolio.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} BankName Crypto Services. All rights reserved.</p>
      </footer>
    </div>
  )
}