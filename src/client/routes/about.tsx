// src/routes/about.tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/client/utils/seo";
import { useIsMobile } from "@hooks/useIsMobile";
import { cn } from "@/shared/utils";
import { ContactForm } from "@components/ContactForm";

export const Route = createFileRoute("/about")({
  meta: () =>
      seo({
        title: "About | SMBC Jenius Bank",
        description:
            "Learn more about SMBC Jenius Bank: our mission, values, leadership, and commitment to you.",
        image: "/assets/JeniusLogo.png", // drop your logo here
      }),
  component: () => {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
          <div className="w-full max-w-4xl px-4 py-12">
            {/* Hero */}
            <section className="mb-16 text-center">
              <h1 className="text-5xl font-bold text-green-600">
                About SMBC Jenius Bank
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                At SMBC Jenius Bank, we combine global expertise with a digital‑first
                mindset to bring you smarter, simpler banking—built around your life.
              </p>
            </section>

            {/* Our Mission */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-green-400"></div>
                <h2 className="text-3xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We empower you to reach your financial goals through transparent,
                high‑yield products, intuitive tools, and human support—anytime, anywhere.
              </p>
            </section>

            {/* History */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-green-400"></div>
                <h2 className="text-3xl font-semibold">Our Story</h2>
              </div>
              <ul className="space-y-8">
                {[
                  { year: "2020", event: "Founded as the digital arm of SMBC" },
                  { year: "2021", event: "Launched Jenius high‑yield savings (4.20% APY)" },
                  { year: "2023", event: "Expanded crypto‑connect and project finance" },
                  { year: "2025", event: "Surpassed $5B in customer deposits" },
                ].map(({ year, event }) => (
                    <li key={year} className="flex">
                      <div className="w-16 flex-shrink-0 text-xl font-bold text-green-600">
                        {year}
                      </div>
                      <div className="ml-4 text-gray-700">{event}</div>
                    </li>
                ))}
              </ul>
            </section>

            {/* Leadership */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-green-400"></div>
                <h2 className="text-3xl font-semibold">Leadership</h2>
              </div>
              <div
                  className={cn(
                      "grid gap-8",
                      isMobile ? "grid-cols-1" : "grid-cols-3"
                  )}
              >
                {[
                  { name: "Eri Tanaka", title: "CEO", img: "/assets/team/eri.jpg" },
                  { name: "Samuel Lee", title: "CFO", img: "/assets/team/samuel.jpg" },
                  { name: "Nina Patel", title: "CTO", img: "/assets/team/nina.jpg" },
                ].map(({ img, name, title }) => (
                    <div key={name} className="text-center">
                      <img
                          src={img}
                          alt={name}
                          className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                      />
                      <h3 className="text-xl font-medium">{name}</h3>
                      <p className="text-gray-600">{title}</p>
                    </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-green-400"></div>
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
    );
  },
});
