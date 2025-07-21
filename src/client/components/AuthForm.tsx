// src/components/AuthForm.tsx
import React from "react";
import { cn } from "@/shared/utils";
import { Link } from "@tanstack/react-router";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Logo } from "@navigation/Logo";

interface AuthFormProps {
  onSubmit: (data: FormData) => void;
  title: string;
  buttonLabel: string;
  linkText: string;
  linkRoute: string;
  errorMessage?: string;
  isSignUp?: boolean;
  isResetPassword?: boolean;
  isEmailVerification?: boolean;
  additionalButton?: { text: string; route: string };
}

export interface FormData {
  email: string;
  password?: string;
  newPassword?: string;
  retypePassword?: string;
}

// just styling wrapper
const StyledFormField: React.FC<{
  children: React.ReactNode;
  hasError?: boolean;
  icon?: string;
}> = ({ children, hasError, icon }) => (
    <div className="relative mb-4 w-full">
      {icon && <span className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-500 ${icon}`} />}
      {React.cloneElement(children as React.ReactElement, {
        className: cn(
            "w-full rounded-lg border border-gray-300 bg-muted p-4 pl-10 placeholder-gray-600",
            hasError && "border-red-600"
        ),
      })}
    </div>
);

const AuthForm: React.FC<AuthFormProps> = ({
                                             additionalButton,
                                             buttonLabel,
                                             errorMessage,
                                             isEmailVerification = false,
                                             isResetPassword = false,
                                             isSignUp = false,
                                             linkRoute,
                                             linkText,
                                             onSubmit,
                                             title,
                                           }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormData>({
    mode: "all",
    defaultValues: { email: "", password: "", newPassword: "", retypePassword: "" },
  });

  const password = watch(isResetPassword ? "newPassword" : "password");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForm: SubmitHandler<FormData> = (data) => {
    const {retypePassword: _, ...rest } = data;
    onSubmit(rest as FormData);
  };

  return (
      <form
          onSubmit={handleSubmit(handleForm)}
          noValidate
          className={cn(
              "z-10 flex w-full max-w-md flex-col items-center rounded-lg bg-white p-6 shadow-lg",
              isSignUp ? "min-h-[32rem]" : "min-h-[24rem]"
          )}
      >
        <div className="mb-6">
          <Logo />
        </div>
        <h3 className="mb-4 text-center text-2xl font-semibold">{title}</h3>
        {errorMessage && <div className="mb-4 text-sm text-red-600">{errorMessage}</div>}

        {/* Email field (always) */}
        <StyledFormField icon="icon-[material-symbols--mail-outline]" hasError={!!errors.email}>
          <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: emailRegex, message: "Enter a valid email" },
              })}
          />
        </StyledFormField>
        {errors.email && <span className="mb-2 text-sm text-red-600">{errors.email.message}</span>}

        {/* Password or newPassword */}
        {!isEmailVerification && (
            <>
              <StyledFormField icon="icon-[fluent--key-20-filled]" hasError={!!errors[isResetPassword ? "newPassword" : "password"]}>
                <Input
                    id={isResetPassword ? "newPassword" : "password"}
                    type="password"
                    placeholder={isResetPassword ? "New Password" : "Password"}
                    autoComplete={isResetPassword ? undefined : "current-password"}
                    {...register(isResetPassword ? "newPassword" : "password", {
                      required: isResetPassword ? "New password is required" : "Password is required",
                      minLength: { value: 8, message: "Must be at least 8 characters" },
                    })}
                />
              </StyledFormField>
              {(errors.newPassword || errors.password) && (
                  <span className="mb-2 text-sm text-red-600">
              {errors.newPassword?.message ?? errors.password?.message}
            </span>
              )}
            </>
        )}

        {/* Retype for signup & reset */}
        {(isSignUp || isResetPassword) && (
            <>
              <StyledFormField icon="icon-[fluent--key-20-filled]" hasError={!!errors.retypePassword}>
                <Input
                    id="retypePassword"
                    type="password"
                    placeholder="Retype Password"
                    {...register("retypePassword", {
                      required: "Please retype your password",
                      validate: (v) => v === password || "Passwords do not match",
                    })}
                />
              </StyledFormField>
              {errors.retypePassword && <span className="mb-2 text-sm text-red-600">{errors.retypePassword.message}</span>}
            </>
        )}

        <Button type="submit" className="w-full mt-4">
          {buttonLabel}
        </Button>

        <p className="mt-4 text-center text-sm">
          {linkText}{" "}
          <Link to={linkRoute} className="text-blue-600 underline">
            here
          </Link>
        </p>

        {additionalButton && (
            <Link
                to={additionalButton.route}
                className="mt-3 inline-block rounded bg-gray-100 px-4 py-2 text-sm"
            >
              {additionalButton.text}
            </Link>
        )}
      </form>
  );
};

export default AuthForm;
