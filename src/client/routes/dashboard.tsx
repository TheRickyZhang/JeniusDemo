// src/routes/DashboardRoute.tsx
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import { seo } from "@/client/utils/seo"
import { useAuth } from "@/client/hooks/AuthContext"
import { Page } from "@/client/components/Page"
import { Button } from "@ui/button";
import React from "react"

export const Route = createFileRoute("/dashboard")({
    meta: () =>
        seo({
            title:       "Dashboard | Acme Bank",
            description: "Your central hub for managing projects, crypto, investments, and account settings.",
            image:       "/assets/BankLogo.png", // TODO: add BankLogo.png to /assets/
        }),

    component: () => {
        const { id, isAuthenticated, isLoading, logout } = useAuth()
        const navigate                          = useNavigate()

        // Redirect to login if not authed (once loading finishes)
        React.useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                navigate({ to: "/login" })
            }
        }, [isLoading, isAuthenticated, navigate])

        // While checking session, don't render anything
        if (isLoading) return null
        if (!isAuthenticated) return null

        return (
            <Page>
                <div className="mx-auto max-w-7xl p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold text-[#783DF2]">Dashboard</h1>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                logout().then(() => navigate({ to: "/login" }))
                            }}
                        >
                            Logout
                        </Button>
                    </div>

                    {/* Greeting */}
                    <p className="mt-2 text-gray-700">
                        Welcome back, user <span className="font-semibold">{id}</span>!
                    </p>

                    {/* Quick Links */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <Link
                                to="/project-finance"
                                className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                            >
                                <img
                                    src="/assets/icons/finance.svg"
                                    alt="Project Finance"
                                    className="mx-auto mb-4 h-12 w-12"
                                />
                                <span className="mt-2 block text-xl font-medium text-[#783DF2]">
                  Project Finance
                </span>
                            </Link>

                            <Link
                                to="/crypto-connect"
                                className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                            >
                                <img
                                    src="/assets/icons/crypto.svg"
                                    alt="Crypto‑Connect"
                                    className="mx-auto mb-4 h-12 w-12"
                                />
                                <span className="mt-2 block text-xl font-medium text-[#783DF2]">
                  Crypto‑Connect
                </span>
                            </Link>

                            <Link
                                to="/wealth-investment"
                                className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                            >
                                <img
                                    src="/assets/icons/wealth.svg"
                                    alt="Wealth & Investment"
                                    className="mx-auto mb-4 h-12 w-12"
                                />
                                <span className="mt-2 block text-xl font-medium text-[#783DF2]">
                  Wealth & Investment
                </span>
                            </Link>

                            <Link
                                to="/profile"
                                className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                            >
                                <img
                                    src="/assets/icons/settings.svg"
                                    alt="Account Settings"
                                    className="mx-auto mb-4 h-12 w-12"
                                />
                                <span className="mt-2 block text-xl font-medium text-[#783DF2]">
                  Account Settings
                </span>
                            </Link>
                        </div>
                    </section>

                    {/* Overview Panels (placeholder) */}
                    <section className="mt-12 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="text-xl font-semibold mb-2">My Portfolios</h3>
                            <p className="text-gray-600">View and manage your project & crypto portfolios.</p>
                            <Button
                                variant="link"
                                size="sm"
                                className="mt-4"
                                onClick={() => navigate({ to: "/project-finance" })}
                            >
                                Go to Portfolios →
                            </Button>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
                            <p className="text-gray-600">No recent transactions. Make your first investment today.</p>
                            <Button
                                variant="link"
                                size="sm"
                                className="mt-4"
                                onClick={() => navigate({ to: "/project-finance" })}
                            >
                                Explore Projects →
                            </Button>
                        </div>
                    </section>
                </div>
            </Page>
        )
    },
})
