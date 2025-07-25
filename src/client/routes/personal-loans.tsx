// src/routes/personal‑loans.tsx
import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/client/utils/seo'

export const Route = createFileRoute('/personal-loans')({
  meta: () =>
      seo({
        title: 'Personal Loans | Acme Bank',
        description:
            'Low Rates. No Fees. Smarter Borrowing. Apply for a Jenius Personal Loan today.',
        // image: '/assets/personal-loans-hero.png', // optional hero image
      }),
  component: PersonalLoansPage,
})

function PersonalLoansPage() {
  return (
      <div className="flex flex-col items-center bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="w-full bg-green-600 py-20 text-center text-white">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold mb-4">
            Low Rates. No Fees. Smarter Borrowing.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Maybe you’re interested in paying off high‑rate debt, or maybe it’s
            time to finally redo that retro (in a bad way) bathroom. That’s
            where a Jenius Personal Loan comes in handy. With no fees of any kind
            and low rates, you’re on your way to living a richer life.
          </p>
          <p className="mt-6 text-2xl font-semibold">Save Thousands. That’s Jenius.</p>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 overflow-x-auto">
            <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg">
              <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2"></th>
                <th className="border px-4 py-2 text-center">Jenius Personal Loan</th>
                <th className="border px-4 py-2 text-center">High‑Rate Credit Card</th>
              </tr>
              </thead>
              <tbody>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">Balance</td>
                <td className="border px-4 py-2 text-center">$20,000</td>
                <td className="border px-4 py-2 text-center">$20,000</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">APR</td>
                <td className="border px-4 py-2 text-center">11.74%</td>
                <td className="border px-4 py-2 text-center">21.37%</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">Monthly Payment</td>
                <td className="border px-4 py-2 text-center">$442.27</td>
                <td className="border px-4 py-2 text-center">$545.24</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">Interest Paid</td>
                <td className="border px-4 py-2 text-center">$6,535.94</td>
                <td className="border px-4 py-2 text-center">$12,714.29</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">Estimated Savings</td>
                <td
                    className="border px-4 py-2 text-center text-green-600 font-semibold"
                    colSpan={2}
                >
                  $6,178.35
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="w-full px-4 pb-16 text-center md:px-16">
          <p className="mx-auto max-w-2xl text-sm text-gray-500 italic leading-relaxed">
            Information is for illustrative purposes only and takes into consideration
            regular monthly payments of principal and interest over 5 years with no
            increase to the example credit card balance. Actual APR and savings may
            differ.
          </p>
        </section>

        {/* External Link */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 text-center">
            <a
                href="https://www.jeniusbank.com/savings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-green-600 px-8 py-3 text-white font-semibold shadow transition hover:bg-green-700"
            >
              Learn More & Apply
            </a>
          </div>
        </section>
      </div>
  )
}
