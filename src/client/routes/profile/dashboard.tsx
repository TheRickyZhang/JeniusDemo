// src/routes/profile/index.tsx
import React, { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { seo } from "@/client/utils/seo";
import { useAuth } from "@/client/hooks/AuthContext";
import { Page } from "@/client/components/Page";
import { Button } from "@ui/button";
import AccountBox from "@/client/components/profile/AccountBox";

export const Route = createFileRoute("/profile/dashboard")({
  meta: () =>
      seo({
        title:       "My Dashboard | Acme Bank",
        description: "Your account overview and quick access to all services.",
        image:       "/assets/BankLogo.png", // TODO: drop your logo here
      }),

  component: () => {
    const {isAuthenticated, isLoading, logout } = useAuth();
    const navigate                           = useNavigate();

    // redirect to login if not authenticated
    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        navigate({ to: "/login" });
      }
    }, [isLoading, isAuthenticated, navigate]);

    if (isLoading || !isAuthenticated) return null;

    // TODO: fetch full user record (email, timestamps, etc.) via your own hook or api
    // For demonstration, we'll pass placeholders into AccountBox:
    const dummyEmail      = "you@example.com";
    const dummyTimeAdded  = Date.now() - 1000 * 60 * 60 * 24 * 7;
    const dummyTimeUpdate = Date.now();

    return (
        <Page>
          <div className="mx-auto max-w-7xl p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-[#783DF2]">My Dashboard</h1>
              <div className="flex gap-2">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Main Dashboard
                  </Button>
                </Link>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => logout().then(() => navigate({ to: "/login" }))}
                >
                  Logout
                </Button>
              </div>
            </div>

            {/* Account Info */}
            <section className="mt-8">
              <AccountBox
                  email={dummyEmail}
                  timeAdded={dummyTimeAdded}
                  timeUpdated={dummyTimeUpdate}
                  points={0}
                  roles={undefined}
                  adminView={false}
              />
            </section>

            {/* Quick Actions */}
            <section className="mt-12">
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
          </div>
        </Page>
    );
  },
});
