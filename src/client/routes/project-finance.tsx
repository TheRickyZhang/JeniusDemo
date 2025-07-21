import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PieChart, Layers, Banknote } from "lucide-react";
import { seo } from "@/client/utils/seo";   

export const Route = createFileRoute("/project-finance")({
    meta: () =>
        seo({
            title:       "Project Finance | Acme Bank",
            description: "Explore tailored financing solutions for your next big project—construction, infrastructure, or beyond.",
            image:       "/assets/finance-hero.png", // TODO: add hero image
        }),
    component: ProjectFinancePage,
});

function ProjectFinancePage() {
    /** step‑flow cards */
    const steps = [
        {
            Icon: PieChart,
            title: "Assessment",
            desc: "We analyze your project needs and cash‑flow projections.",
        },
        {
            Icon: Layers,
            title: "Structuring",
            desc: "We design a financing package aligned with your timeline and risk profile.",
        },
        {
            Icon: Banknote,
            title: "Funding",
            desc: "We deploy capital and manage disbursements as your project progresses.",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
            {/* Hero */}
            <section className="w-full bg-[#783DF2] py-20 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold">Project Finance</h1>
                <p className="mx-auto max-w-2xl text-lg">
                    Customized funding solutions to power your infrastructure, real‑estate, and corporate initiatives.
                </p>
            </section>

            {/* How it works */}
            <section className="w-full px-4 py-16 md:px-16">
                <h2 className="mb-12 text-center text-3xl font-semibold">How It Works</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {steps.map(({ Icon, desc, title }) => (
                        <div key={title} className="p-6 text-center">
                            <div className="mb-4 inline-block rounded-full bg-[#A992F7] p-4">
                                <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-xl font-medium">{title}</h3>
                            <p className="text-gray-700">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to action */}
            <section className="w-full px-4 py-16 text-center md:px-16">
                <h2 className="mb-4 text-3xl font-semibold">Ready to Get Started?</h2>
                <p className="mx-auto mb-8 max-w-xl text-gray-700">
                    Talk to our project‑finance specialists today.
                </p>
                <button className="rounded-full bg-white px-8 py-3 font-medium text-[#783DF2] shadow transition hover:shadow-md">
                    Contact Us
                </button>
            </section>
        </div>
    );
}
