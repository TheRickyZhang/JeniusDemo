// src/routes/wealth-investment.tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/client/utils/seo";
import { Briefcase, UserCog, CalendarClock, LineChart } from "lucide-react";

export const Route = createFileRoute("/wealth-investment")({
    meta: () =>
        seo({
            title: "Wealth & Investment | Acme Bank",
            description:
                "Grow and protect your assets with our expert advisory and managed portfolios.",
            image: "/assets/wealth-hero.png", // your hero image
        }),
    component: WealthInvestmentPage,
});

function WealthInvestmentPage() {
    const services = [
        {
            Icon: Briefcase,
            title: "Portfolio Management",
            desc: "Diversified strategies built around your risk profile and goals.",
        },
        {
            Icon: UserCog,
            title: "Advisory Services",
            desc: "One‑on‑one financial planning, tax optimization, and estate strategies.",
        },
        {
            Icon: CalendarClock,
            title: "Retirement Planning",
            desc: "Build a secure retirement with tailored savings and withdrawal plans.",
        },
        {
            Icon: LineChart,
            title: "Market Insights",
            desc: "In‑depth research and regular updates to keep your strategy ahead.",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
            {/* Hero w/ full‑width background image */}
            <section className="relative w-full h-[60vh]">
                <img
                    src="/images/investing.jpeg"
                    alt="Wealth & Investment Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-green-900/20" />
                <div className="relative z-10 mx-auto flex h-full max-w-4xl items-center justify-center px-4">
                    <div className="bg-green-600 p-8 rounded-2xl shadow-lg">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Wealth &amp; Investment
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                            Personalized portfolio management, advisory services, and retirement
                            planning tailored for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="w-full bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold mb-12">
                        Our Services
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {services.map(({ Icon, desc, title }) => (
                            <div
                                key={title}
                                className="rounded-lg border bg-gray-50 p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <div className="mx-auto mb-4 inline-block rounded-full bg-green-600 p-4 text-white">
                                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="mb-2 text-xl font-medium">{title}</h3>
                                <p className="text-gray-700">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Start Your Journey</h2>
                    <p className="mx-auto mb-8 max-w-xl text-gray-700">
                        Schedule a consultation with our wealth advisors today.
                    </p>
                    <button className="rounded-full bg-green-600 px-8 py-3 text-white shadow transition hover:bg-green-700">
                        Schedule a Call
                    </button>
                </div>
            </section>
        </div>
    );
}
