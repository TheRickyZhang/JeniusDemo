// src/routes/WealthInvestmentRoute.tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/client/utils/seo";
import {
    Briefcase,
    UserCog,
    CalendarClock,
    LineChart,
} from "lucide-react";

export const Route = createFileRoute("/wealth-investment")({
    meta: () =>
        seo({
            title:       "Wealth & Investment | Acme Bank",
            description: "Grow and protect your assets with our expert advisory and managed portfolios.",
            image:       "/assets/wealth-hero.png", // TODO: drop a hero image here
        }),
    component: WealthInvestmentPage,
});

function WealthInvestmentPage() {
    const services = [
        {
            Icon: Briefcase,
            title: "Portfolio Management",
            desc:  "Diversified strategies built around your risk profile and goals.",
        },
        {
            Icon: UserCog,
            title: "Advisory Services",
            desc:  "One‑on‑one financial planning, tax optimization, and estate strategies.",
        },
        {
            Icon: CalendarClock,
            title: "Retirement Planning",
            desc:  "Build a secure retirement with tailored savings and withdrawal plans.",
        },
        {
            Icon: LineChart,
            title: "Market Insights",
            desc:  "In‑depth research and regular updates to keep your strategy ahead.",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
            {/* Hero */}
            <section className="w-full bg-[#783DF2] py-20 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold">Wealth &amp; Investment</h1>
                <p className="mx-auto max-w-2xl text-lg">
                    Personalized portfolio management, advisory services, and retirement planning tailored for you.
                </p>
            </section>

            {/* Services */}
            <section className="w-full px-4 py-16 md:px-16">
                <h2 className="mb-12 text-center text-3xl font-semibold">Our Services</h2>
                <ul className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {services.map(({ Icon, desc, title }) => (
                        <li key={title} className="flex items-start gap-4">
                            <div className="mt-1 inline-block rounded-full bg-[#A992F7] p-3">
                                <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">{title}</h3>
                                <p className="text-gray-700">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Call to Action */}
            <section className="w-full px-4 py-16 text-center md:px-16">
                <h2 className="mb-4 text-3xl font-semibold">Start Your Journey</h2>
                <p className="mx-auto mb-8 max-w-xl text-gray-700">
                    Schedule a consultation with our wealth advisors today.
                </p>
                <button className="rounded-full bg-white px-8 py-3 font-medium text-[#783DF2] shadow transition hover:shadow-md">
                    Schedule a Call
                </button>
            </section>
        </div>
    );
}
