// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "../utils/seo";

export const Route = createFileRoute("/")({
  meta: () =>
      seo({
        title: "SMBC Jenius Bank – Home",
        description:
            "Welcome to SMBC Jenius Bank where we make banking smarter, simpler and built around you.",
        image: "/assets/BankLogo.png", // add your logo here
      }),

  component: () => {
    const services = [
      {
        title: "Basic",
        desc: "Get started with our essential banking services, designed for everyday financial needs.",
        img: "/images/basic.jpg",
        link: "/services/basic",
      },
      {
        title: "Professional",
        desc: "Elevate your banking experience with advanced tools and dedicated support for professionals.",
        img: "/images/professional.jpg",
        link: "/services/professional",
      },
      {
        title: "Business",
        desc: "Empower your business with tailored financial solutions and expert guidance.",
        img: "/images/business.jpg",
        link: "/services/business",
      },
      {
        title: "Enterprise",
        desc: "Drive growth and efficiency with our comprehensive enterprise banking solutions.",
        img: "/images/enterprise.jpg",
        link: "/services/enterprise",
      },
    ];

    return (
        <div className="space-y-32">
          {/* Hero */}


          <section
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage: "url(/images/hero.jpg)" }}
          >
            {/* green‑tinted overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-green-900/40" />

            <div className="relative z-10 flex items-center justify-center h-full px-6">
              {/* semi‑transparent panel */}
              <div className="bg-black/50 p-8 rounded-2xl text-center space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl">
                  Banking Reimagined
                </h1>

                <h2 className="text-xl md:text-3xl font-medium text-green-200 leading-snug">
                  <span className="text-green-400 font-semibold">4.20% APY</span> lets you
                  save like a Jenius. FDIC insured, no fees or minimums, with 24/7
                  U.S.‑based support.
                </h2>

                <p className="text-base md:text-lg text-white leading-relaxed">
                  Welcome to SMBC Jenius Bank—smarter, simpler banking built around you.
                  Enjoy powerful digital tools, personalized insights, and the backing of
                  a global financial leader.
                </p>

                <Link
                    to="/savings"
                    className="inline-block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                  Let’s get started
                </Link>
              </div>
            </div>
          </section>



          {/* Our Vision */}
          <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  At SMBC Jenius Bank, we’re committed to providing innovative and
                  sustainable banking solutions. We empower you to achieve your
                  financial goals with transparent, accessible, and responsible
                  services. Explore how we can contribute to your financial
                  well-being.
                </p>
              </div>
              <div>
                <img
                    src="/images/vision.jpg"
                    alt="Our Vision"
                    className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">
                Our Services
              </h2>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                    <div
                        key={s.title}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center text-center"
                    >
                      <img
                          src={s.img}
                          alt={s.title}
                          className="w-32 h-32 object-cover rounded-full mb-4"
                      />
                      <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {s.desc}
                      </p>
                      <Link
                          to={s.link}
                          className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                      >
                        Read more
                      </Link>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                    src="/images/story.jpg"
                    alt="Our Story"
                    className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  SMBC Jenius Bank was founded on the principles of innovation,
                  sustainability, and customer-centricity. We’re dedicated to
                  providing a digital banking experience that is both seamless and
                  impactful. Join us as we build a better future for your money.
                </p>
                <Link
                    to="/about"
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        </div>
    );
  },
});
