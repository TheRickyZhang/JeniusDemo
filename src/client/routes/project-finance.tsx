// src/routes/project‑finance.tsx
import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {
    PieChart,
    Layers,
    Banknote,
    Database,
    Code,
    Bell,
    Filter,
} from 'lucide-react'
import {seo} from '@/client/utils/seo'

export const Route = createFileRoute('/project-finance')({
    meta: () =>
        seo({
            title: 'Project Finance | Acme Bank',
            description:
                'Explore tailored financing solutions for your next big project—construction, infrastructure, or beyond.',
            image: '/assets/finance-hero.png',
        }),
    component: ProjectFinancePage,
})

function ProjectFinancePage() {
    const steps = [
        {
            Icon: PieChart,
            title: 'Assessment',
            desc: 'We analyze your project needs and cash‑flow projections.',
        },
        {
            Icon: Layers,
            title: 'Structuring',
            desc: 'We design a financing package aligned with your timeline and risk profile.',
        },
        {
            Icon: Banknote,
            title: 'Funding',
            desc: 'We deploy capital and manage disbursements as your project progresses.',
        },
    ]

    const features = [
        {
            Icon: Database,
            title: 'Loan Participation',
            desc: 'Invest in large infrastructure loans with small, fractional tickets.',
        },
        {
            Icon: Database,
            title: 'Due‑Diligence Hub',
            desc: 'Browse transparent risk ratings, ESG scores, and project docs.',
        },
        {
            Icon: Code,
            title: 'Smart Contracts',
            desc: 'Automate your income distributions directly on‑chain.',
        },
        {
            Icon: Bell,
            title: 'Milestone Alerts',
            desc: 'Get notified when construction or revenue targets are hit.',
        },
        {
            Icon: Filter,
            title: 'Impact Filters',
            desc: 'Select projects by sustainability goals or social impact.',
        },
    ]

    const sampleProjects = [
        {name: 'Solar Farm Alpha', risk: 'A‑', esg: 92},
        {name: 'Bridge Renewal X', risk: 'BBB+', esg: 78},
        {name: 'Data Center Delta', risk: 'A', esg: 85},
    ]
    const milestones = [
        {text: '50% construction complete', time: '2 days ago'},
        {text: 'First energy production', time: '1 week ago'},
    ]
    const [impact, setImpact] = React.useState({
        sustainability: true,
        social: false,
    })

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
            {/* Hero w/ Image */}
            <section className="relative w-full h-[60vh]">
                {/* 50%‐opaque hero image */}
                <img
                    src="/images/ProjectFinance.png"
                    alt="Project Finance Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                <div className="absolute inset-0 bg-green-900/20"/>

                {/* Centered text card */}
                <div className="relative z-10 mx-auto flex h-full max-w-3xl items-center justify-center px-4">
                    <div className="bg-green-600 p-8 rounded-2xl shadow-lg">
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed">
                            Customized funding solutions to power your infrastructure,
                            real‑estate, and corporate initiatives.
                        </p>
                    </div>
                </div>
            </section>


            {/* How It Works */}
            <section className="w-full bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold mb-12">
                        How It Works
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {steps.map(({Icon, desc, title}) => (
                            <div
                                key={title}
                                className="group relative overflow-hidden rounded-lg border bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center transition-shadow hover:shadow-xl"
                            >
                                <div
                                    className="mx-auto mb-4 inline-block rounded-full bg-green-600 p-4 text-white transition-transform group-hover:scale-110">
                                    <Icon className="h-8 w-8" strokeWidth={1.5}/>
                                </div>
                                <h3 className="mb-2 text-xl font-medium">{title}</h3>
                                <p className="text-gray-700">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="w-full bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold mb-8">
                        Core Features
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {features.map(({Icon, desc, title}) => (
                            <div
                                key={title}
                                className="rounded-lg border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <Icon className="mx-auto mb-3 h-6 w-6 text-purple-600"/>
                                <h4 className="mb-1 font-medium">{title}</h4>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Due-Diligence Hub */}
            <section className="w-full py-16">
                <div className="container mx-auto px-4">
                    <h2 className="mb-4 text-2xl font-semibold">Due‑Diligence Hub</h2>
                    <p className="mb-6 text-gray-700">
                        Review risk ratings and ESG scores at a glance.
                    </p>
                    <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
                        <table className="w-full table-auto border-collapse">
                            <thead className="bg-green-100">
                            <tr>
                                <th className="border px-4 py-2 text-left">Project</th>
                                <th className="border px-4 py-2 text-center">Risk</th>
                                <th className="border px-4 py-2 text-center">ESG</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sampleProjects.map((p, i) => (
                                <tr
                                    key={p.name}
                                    className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                >
                                    <td className="border px-4 py-2">{p.name}</td>
                                    <td className="border px-4 py-2 text-center">{p.risk}</td>
                                    <td className="border px-4 py-2 text-center">{p.esg}%</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Milestone Alerts */}
            <section className="w-full bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="mb-4 text-2xl font-semibold">Milestone Alerts</h2>
                    <ul className="space-y-3">
                        {milestones.map((m, i) => (
                            <li
                                key={i}
                                className="flex items-center space-x-3 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md"
                            >
                                <Bell className="h-5 w-5 text-green-500"/>
                                <span className="flex-1">{m.text}</span>
                                <time className="text-sm text-gray-500">{m.time}</time>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Impact Filters */}
            <section className="w-full py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Impact Filters</h2>
                    <p className="mb-4 text-gray-700">
                        Show only projects that match your impact goals:
                    </p>
                    <div className="mx-auto flex max-w-md justify-around">
                        <label className="inline-flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={impact.sustainability}
                                onChange={() =>
                                    setImpact((i) => ({
                                        ...i,
                                        sustainability: !i.sustainability,
                                    }))
                                }
                                className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span>Sustainability</span>
                        </label>
                        <label className="inline-flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={impact.social}
                                onChange={() => setImpact((i) => ({...i, social: !i.social}))}
                                className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span>Social Impact</span>
                        </label>
                    </div>
                </div>
            </section>

            {/* Smart‑Contract Distribution */}
            <section className="w-full bg-gray-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Upcoming Payout</h2>
                    <div className="mx-auto max-w-sm rounded-lg border bg-white p-6 shadow-sm">
                        <Code className="mx-auto mb-3 h-6 w-6 text-purple-600"/>
                        <p className="mb-2 text-gray-700">Next Distribution Date:</p>
                        <p className="mb-4 text-lg font-medium">2025‑08‑01</p>
                        <p className="mb-6 text-gray-700">Amount per $1k Invested:</p>
                        <p className="text-2xl font-bold">$7.85</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-semibold">Ready to Invest?</h2>
                    <p className="mx-auto mb-8 max-w-xl text-gray-700">
                        Get started with as little as $1,000 in our Loan Participation
                        program.
                    </p>
                    <button
                        className="rounded-full bg-green-600 px-8 py-3 text-white shadow transition hover:bg-green-700">
                        Invest Now
                    </button>
                </div>
            </section>
        </div>
    )
}
