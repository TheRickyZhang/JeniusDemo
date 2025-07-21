// src/routes/profile/index.tsx
import React, { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { seo } from "@/client/utils/seo";
import { useAuth } from "@/client/hooks/AuthContext";
import { useUsers } from "@/client/hooks/useUsers";
import { Page } from "@/client/components/Page";
import { Button } from "@ui/button";
import AccountBox from "@/client/components/profile/AccountBox";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  Settings as SettingsIcon,
} from "lucide-react";

export const Route = createFileRoute("/profile/dashboard")({
  meta: () =>
      seo({
        title: "My Dashboard | Acme Bank",
        description: "Your account overview and quick access to all services.",
        image: "/assets/BankLogo.png",
      }),

  component: () => {
    const {
      id,
      isAuthenticated,
      isLoading: authLoading,
      logout,
    } = useAuth();
    const navigate = useNavigate();

    // Fetch “me” and all users (for admin)
    const {
      error,
      isLoading: userLoading,
      isLoadingUsers,
      user,
    } = useUsers(id);

    // Redirect if not logged in
    useEffect(() => {
      if (!authLoading && !isAuthenticated) {
        navigate({ to: "/login" });
      }
    }, [authLoading, isAuthenticated, navigate]);

    // loading / error states
    if (authLoading || userLoading || isLoadingUsers) return null;
    if (error) return <div className="text-red-600">{(error as Error).message}</div>;
    if (!user) return null;

    // placeholder financial data
    const portfolioValue = "$123,456";
    const monthlyReturn = "+8.7%";
    const openPositions = 5;

    return (
        <Page>
          <div className="mx-auto max-w-7xl p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-[#783DF2]">My Dashboard</h1>
              <div className="flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate({ to: "/profile/dashboard" })}
                >
                  Main Dashboard
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        logout().then(() => navigate({ to: "/login" }))
                    }
                >
                  Logout
                </Button>
              </div>
            </div>

            {/* Account Info */}
            <section className="mt-8">
              <AccountBox
                  email={user.email}
                  id={id}
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
                  <Wallet className="mx-auto mb-4 h-12 w-12 text-[#783DF2]" />
                  <span className="block text-xl font-medium text-[#783DF2]">
                  Project Finance
                </span>
                </Link>
                <Link
                    to="/crypto-connect"
                    className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                >
                  <CreditCard className="mx-auto mb-4 h-12 w-12 text-[#783DF2]" />
                  <span className="block text-xl font-medium text-[#783DF2]">
                  Crypto‑Connect
                </span>
                </Link>
                <Link
                    to="/wealth-investment"
                    className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                >
                  <TrendingUp className="mx-auto mb-4 h-12 w-12 text-[#783DF2]" />
                  <span className="block text-xl font-medium text-[#783DF2]">
                  Wealth & Investment
                </span>
                </Link>
                <Link
                    to="/profile/settings"
                    className="block rounded-lg border bg-white p-6 text-center shadow hover:shadow-lg transition"
                >
                  <SettingsIcon className="mx-auto mb-4 h-12 w-12 text-[#783DF2]" />
                  <span className="block text-xl font-medium text-[#783DF2]">
                  Account Settings
                </span>
                </Link>
              </div>
            </section>

            {/* Portfolio Overview */}
            <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow text-center">
                <Wallet className="mx-auto mb-2 h-8 w-8 text-[#783DF2]" />
                <h3 className="text-xl font-semibold">Total Value</h3>
                <p className="text-2xl">{portfolioValue}</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8 text-[#783DF2]" />
                <h3 className="text-xl font-semibold">Last Month Return</h3>
                <p className="text-2xl">{monthlyReturn}</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow text-center">
                <CreditCard className="mx-auto mb-2 h-8 w-8 text-[#783DF2]" />
                <h3 className="text-xl font-semibold">Open Positions</h3>
                <p className="text-2xl">{openPositions}</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow text-center">
                <SettingsIcon className="mx-auto mb-2 h-8 w-8 text-[#783DF2]" />
                <h3 className="text-xl font-semibold">Manage Account</h3>
                <Button
                    variant="link"
                    size="sm"
                    className="mt-2"
                    onClick={() => navigate({ to: "/profile/settings" })}
                >
                  Go →
                </Button>
              </div>
            </section>

            {/*/!* Admin: All Users *!/*/}
            {/*{isAdmin && (*/}
            {/*    <section className="mt-12">*/}
            {/*      <h2 className="text-2xl font-semibold mb-4">All Users</h2>*/}
            {/*      {errorUsers ? (*/}
            {/*          <div className="text-red-600">{(errorUsers as Error).message}</div>*/}
            {/*      ) : users?.length ? (*/}
            {/*          <div className="space-y-6">*/}
            {/*            {users.map((u) => (*/}
            {/*                <AccountBox*/}
            {/*                    key={u.id}*/}
            {/*                    email={u.email}*/}
            {/*                    timeAdded={Date.now()}*/}
            {/*                    timeUpdated={Date.now()}*/}
            {/*                    adminView*/}
            {/*                />*/}
            {/*            ))}*/}
            {/*          </div>*/}
            {/*      ) : (*/}
            {/*          <p>No users found.</p>*/}
            {/*      )}*/}
            {/*    </section>*/}
            {/*)}*/}
          </div>
        </Page>
    );
  },
});
