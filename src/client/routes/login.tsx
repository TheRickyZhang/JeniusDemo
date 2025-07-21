// src/routes/LoginRoute.tsx
import type { FormData } from "@/client/components/AuthForm";
import AuthForm from "@/client/components/AuthForm";
import AuthLayout from "@/client/components/AuthLayout";
import { Page } from "@/client/components/Page";
import { useAuth } from "@/client/hooks/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { seo } from "@/client/utils/seo";

export const Route = createFileRoute("/login")({
  meta: () => [
    ...seo({
      title:       "Login | Jenius Bank",
      description: "Access your Jenius Bank account to manage portfolios and more.",
      image:       "/assets/BankLogo.png", // TODO: add logo here
    }),
  ],

  component: () => {
    const { login } = useAuth();
    const navigate  = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const mutation = useMutation({
      mutationFn: async (data: FormData) => {
        // now using email instead of username
        await login(data.email, data.password);
      },
      onSuccess: () => {
        navigate({ to: "/profile/dashboard" });
      },
      onError: (err) => {
        setErrorMessage(err.message ?? "Login failed");
      },
    });

    const handleLogin = (data: FormData) => {
      setErrorMessage(null);
      mutation.mutate(data);
    };

    return (
        <Page>
          <AuthLayout isSignUp={false}>
            <AuthForm
                title="Login"
                buttonLabel="Login"
                linkText="Forgot password?"
                linkRoute="/"
                onSubmit={handleLogin}
                errorMessage={errorMessage || undefined}
                additionalButton={{
                  text: "Register new account",
                  route: "/signup",
                }}
            />
          </AuthLayout>
        </Page>
    );
  },
});
