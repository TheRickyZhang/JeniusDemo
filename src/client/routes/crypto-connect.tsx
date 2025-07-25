// src/routes/crypto-connect.tsx
import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Wallet, CreditCard, Network } from 'lucide-react'
import { seo } from '@/client/utils/seo'

export const Route = createFileRoute('/crypto-connect')({
  meta: () =>
    seo({
      title: 'Crypto‑Connect | Acme Bank',
      description:
        'Securely integrate blockchain payments, custody, and DeFi services with our enterprise crypto platform.',
      image: '/assets/crypto-hero.png', // your hero image
    }),
  component: CryptoConnectPage,
})

function CryptoConnectPage() {
  const features = [
    {
      Icon: Wallet,
      title: 'Secure Custody',
      desc: 'Multi‑sig wallets and SOC‑compliant storage.',
    },
    {
      Icon: CreditCard,
      title: 'Payments API',
      desc: 'On‑chain and off‑chain payment rails.',
    },
    {
      Icon: Network,
      title: 'DeFi Access',
      desc: 'Integrate lending, staking, and liquidity services.',
    },
  ]

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-900">
      {/* Hero w/ Image */}
      <section className="relative w-full h-[60vh]">
        <img
          src="/images/crypto.jpg"
          alt="Crypto‑Connect Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-purple-900/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl items-center justify-center px-4 text-center">
          <div className="bg-purple-600 p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-4">
              Crypto‑Connect
            </h1>
            <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
              Enterprise‑grade crypto custody, on‑chain payments, and DeFi
              integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-12">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {features.map(({ Icon, desc, title }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-lg border bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto mb-4 inline-block rounded-full bg-purple-600 p-4 text-white transition-transform group-hover:scale-110">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-xl font-medium">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call‑to‑Action */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Integrate Crypto Today
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-700">
            Speak with our blockchain experts to get started.
          </p>
          <button className="rounded-full bg-purple-600 px-8 py-3 text-white shadow transition hover:bg-purple-700">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  )
}
