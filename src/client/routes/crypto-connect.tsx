// src/routes/CryptoConnectRoute.tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Wallet, CreditCard, Network } from "lucide-react";
import { seo } from "@/client/utils/seo";      

export const Route = createFileRoute("/crypto-connect")({
    meta: () =>
        seo({
            title:       "Crypto‑Connect | Acme Bank",
            description: "Securely integrate blockchain payments, custody, and DeFi services with our enterprise crypto platform.",
            image:       "/assets/crypto-hero.png", // TODO: add a hero image
        }),
    component: CryptoConnectPage,
});

function CryptoConnectPage() {
    const features = [
        {
            Icon: Wallet,
            title: "Secure Custody",
            desc: "Multi‑sig wallets and SOC‑compliant storage.",
        },
        {
            Icon: CreditCard,
            title: "Payments API",
            desc: "On‑chain and off‑chain payment rails.",
        },
        {
            Icon: Network,
            title: "DeFi Access",
            desc: "Integrate lending, staking, and liquidity services.",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
            {/* Hero */}
            <section className="w-full bg-[#783DF2] py-20 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold">Crypto‑Connect</h1>
                <p className="mx-auto max-w-2xl text-lg">
                    Enterprise‑grade crypto custody, on‑chain payments, and DeFi integrations.
                </p>
            </section>

            {/* Features */}
            <section className="w-full px-4 py-16 md:px-16">
                <h2 className="mb-12 text-center text-3xl font-semibold">Key Features</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {features.map(({ Icon, desc, title }) => (
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

            {/* Call‑to‑Action */}
            <section className="w-full px-4 py-16 text-center md:px-16">
                <h2 className="mb-4 text-3xl font-semibold">Integrate Crypto Today</h2>
                <p className="mx-auto mb-8 max-w-xl text-gray-700">
                    Speak with our blockchain experts to get started.
                </p>
                <button className="rounded-full bg-white px-8 py-3 font-medium text-[#783DF2] shadow transition hover:shadow-md">
                    Request Demo
                </button>
            </section>
        </div>
    );
}
