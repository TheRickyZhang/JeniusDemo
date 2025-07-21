import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "../utils/seo";

export const Route = createFileRoute("/")({
  meta: () =>
      seo({
        title: "Acme Bank – Home",
        description:
            "Welcome to Acme Bank. Your partner in project finance, crypto integration, and wealth management.",
        image: "/assets/BankLogo.png", // TODO: add BankLogo.png to /assets/
      }),

  component: () => {
    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-900">
          {/* Hero */}
          <section className="w-full bg-gradient-to-r from-blue-700 to-green-500 py-20 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Acme Bank</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Your trusted partner for project finance, crypto solutions, and wealth management.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                  to="/project-finance"
                  className="rounded-xl bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-gray-100"
              >
                Project Finance
              </Link>
              <Link
                  to="/crypto-connect"
                  className="rounded-xl bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-gray-100"
              >
                Crypto‑Connect
              </Link>
              <Link
                  to="/wealth-investment"
                  className="rounded-xl bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-gray-100"
              >
                Wealth & Investment
              </Link>
            </div>
          </section>

          {/* Features */}
          <section className="w-full px-4 py-16 md:px-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow">
                <h3 className="text-xl font-medium mb-2">Project Finance</h3>
                <p className="text-gray-600">
                  Customized funding solutions for corporate and infrastructure projects.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow">
                <h3 className="text-xl font-medium mb-2">Crypto Integration</h3>
                <p className="text-gray-600">
                  Secure crypto custody and on‑chain payment services for businesses.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow">
                <h3 className="text-xl font-medium mb-2">Wealth Management</h3>
                <p className="text-gray-600">
                  Personalized investment strategies to grow and protect your assets.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="w-full bg-gray-100 px-4 py-16 md:px-16">
            <h2 className="text-3xl font-semibold text-center mb-12">By the Numbers</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-700">500+</p>
                <p className="text-gray-600">Projects Funded</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-700">100M+</p>
                <p className="text-gray-600">Assets Under Management</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-700">50+</p>
                <p className="text-gray-600">Crypto Partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-indigo-700">99%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full px-4 py-16 text-center md:px-16">
            <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
            <p className="max-w-xl mx-auto text-gray-600 mb-8">
              Create an account to manage your portfolios, access project dashboards, and connect your crypto wallet.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                  to="/signup"
                  className="rounded-full bg-blue-700 px-8 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                Sign Up
              </Link>
              <Link
                  to="/login"
                  className="rounded-full border border-blue-700 px-8 py-3 font-medium text-blue-700 transition hover:bg-blue-50"
              >
                Log In
              </Link>
            </div>
          </section>
        </div>
    );
  },
});
