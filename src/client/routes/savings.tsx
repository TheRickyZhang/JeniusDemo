// src/routes/savings.tsx
import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/savings')({
  component: SavingsPage,
})

function SavingsPage() {
  return (
      <div className="flex flex-col items-center bg-gray-50 text-gray-900">
        {/* Hero Text */}
        <section className="w-full bg-green-600 py-20 text-center text-white">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold mb-4">
            Start earning <span className="text-green-200">4.20% APY</span> today
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Our 4.20% APY high‑yield savings account is 10× the national average
            of 0.42% APY, so your savings can grow faster.
          </p>
        </section>

        {/* Highlights */}
        <section className="w-full px-4 py-16 md:px-16">
          <div className="container mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              'FDIC insured deposits',
              'Withdraw and deposit simply',
              'Interest compounded daily',
              'Help from humans 24/7',
              'No fees or minimum balance requirements',
            ].map((line) => (
                <div
                    key={line}
                    className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="mt-1 inline-block h-3 w-3 flex-shrink-0 rounded-full bg-green-600" />
                  <p className="text-gray-700">{line}</p>
                </div>
            ))}
          </div>
        </section>

        {/* External Link */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 text-center">
            <a
                href="https://www.jeniusbank.com/savings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-green-600 px-8 py-3 text-white font-semibold shadow transition hover:bg-green-700"
            >
              Learn more at Jenius Bank
            </a>
          </div>
        </section>
      </div>
  )
}
