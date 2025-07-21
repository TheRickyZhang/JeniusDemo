// src/routes/SignupRoute.tsx
import { signupUser } from "@/client/api/auth";
import AuthForm, { type FormData } from "@/client/components/AuthForm";
import AuthLayout from "@/client/components/AuthLayout";
import { Page } from "@/client/components/Page";
import { SuccessModal } from "@/client/components/SuccessModal";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/client/hooks/AuthContext";
import { seo } from "@/client/utils/seo";

export const Route = createFileRoute("/signup")({
  meta: () => [
    ...seo({
      title:       "Sign Up | Acme Bank",
      description: "Create your Acme Bank account to start managing your portfolios.",
      image:       "/assets/BankLogo.png",
    }),
  ],

  component: () => {
    const { login } = useAuth();
    const navigate  = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [error, setError]       = useState<string|null>(null);

    const mutation = useMutation({
      mutationFn: async (data: FormData) => {
        await signupUser({
          email:    data.email,
          password: data.password,
        });
        await login(data.email, data.password);
      },
      onSuccess: () => setShowModal(true),
      onError:   (err) => {
        console.error("Signup error:", err);
        setError(err.message ?? "An unexpected error occurred.");
      },
    });

    const handleSignup = (formData: FormData) => {
      setError(null);
      mutation.mutate(formData);
    };

    const closeModal = () => {
      setShowModal(false);
      navigate({ to: "/dashboard" });
    };

    return (
        <Page>
          <AuthLayout isSignUp>
            <AuthForm
                title="Sign Up"
                buttonLabel="Sign Up"
                linkText="Already have an account?"
                linkRoute="/login"
                isSignUp
                onSubmit={handleSignup}
                errorMessage={error ?? undefined}
            />

            <SuccessModal
                isOpen={showModal}
                onClose={closeModal}
                message="🎉 Your account has been created!"
            />
          </AuthLayout>
        </Page>
    );
  },
});
