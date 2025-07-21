// src/routes/AboutRoute.tsx
import { createFileRoute } from "@tanstack/react-router"
import { seo } from "../utils/seo"
import { useIsMobile } from "@hooks/useIsMobile"
import { cn } from "@/shared/utils"
import {ContactForm} from "@components/ContactForm";

export const Route = createFileRoute("/about")({
  meta: () =>
      seo({
        title: "About | Acme Bank",
        description:
            "Learn more about Acme Bank: our mission, history, leadership, and how to get in touch.",
        image: "/assets/BankLogo.png", // TODO: drop BankLogo.png in /assets/
      }),

  component: () => {
    const isMobile = useIsMobile()

    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
          <div className="w-full max-w-4xl px-4 py-12">
            {/* Hero */}
            <section className="mb-16 text-center">
              <h1 className="text-5xl font-bold text-[#783DF2]">About Acme Bank</h1>
              <p className="mt-4 text-lg text-gray-700">
                At Acme Bank, we blend innovation and trust to deliver next‑gen financial
                solutions—from project finance to crypto services and wealth management.
              </p>
            </section>

            {/* Our Mission */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-[#A992F7]"></div>
                <h2 className="text-3xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We empower businesses and individuals with transparent, flexible, and
                secure financial services designed to drive growth and safeguard assets.
                Our commitment is to innovation, integrity, and your success.
              </p>
            </section>

            {/* History */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="mr-3 h-1.5 w-12 bg-[#A992F7]"></div>
                <h2 className="text-3xl font-semibold">Our History</h2>
              </div>
              <ul className="space-y-8">
                {[
                  { year: "2001", event: "Founded by a group of finance innovators." },
                  { year: "2005", event: "Launched our first project finance platform." },
                  { year: "2018", event: "Introduced enterprise crypto‑connect services." },
                  { year: "2023", event: "Surpassed $1B in assets under management." },
                ].map(({ event, year }) => (
                    <li key={year} className="flex">
                      <div className="w-16 flex-shrink-0 text-xl font-bold text-[#783DF2]">
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
                <div className="mr-3 h-1.5 w-12 bg-[#A992F7]"></div>
                <h2 className="text-3xl font-semibold">Leadership</h2>
              </div>
              <div
                  className={cn(
                      "grid gap-8",
                      isMobile ? "grid-cols-1" : "grid-cols-3"
                  )}
              >
                {[
                  { name: "Alice Chen", title: "CEO", img: "/assets/team/alice.jpg" },
                  { name: "Bob Patel", title: "CFO", img: "/assets/team/bob.jpg" },
                  { name: "Cara Nguyen", title: "CTO", img: "/assets/team/cara.jpg" },
                ].map(({ img, name, title }) => (
                    <div key={name} className="text-center">
                      {/* TODO: add team photos to /assets/team/ */}
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
                <div className="mr-3 h-1.5 w-12 bg-[#A992F7]"></div>
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
    )
  },
})
