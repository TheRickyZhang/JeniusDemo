// src/api/auth.ts
import { apiFetch } from "@shared/utils";
import { z } from "zod";

// --- Response schemas ---
const LoginResponseSchema = z.object({
    sessionId: z.string(),
});
const SignUpSuccessSchema = z.object({
    userId: z.string(),
});

// Now only id, no roles
const SessionSchema = z.object({
    id: z.string(),
});
export type Session = z.infer<typeof SessionSchema>;

// --- Credential schemas ---
const CredentialsSchema = z.object({
    email:    z.string().email(),
    password: z.string().min(1),
});
export type SignUpCredentials = z.infer<typeof CredentialsSchema>;
export type LoginCredentials  = z.infer<typeof CredentialsSchema>;

// --- API calls ---
export const fetchSession = () =>
    apiFetch("/api/auth/session", { credentials: "include" }, SessionSchema)
        .then((res) => res.data);

export const loginApi = async (creds: LoginCredentials): Promise<{ sessionId: string }> => {
    CredentialsSchema.parse(creds);
    const { data } = await apiFetch(
        "/api/auth/login",
        {
            method:      "POST",
            credentials: "include",
            body:        JSON.stringify(creds),
        },
        LoginResponseSchema
    );
    return data;
};

export const logoutApi = () =>
    apiFetch("/api/auth/logout", { method: "POST", credentials: "include" }, z.null());

export const signupUser = async (creds: SignUpCredentials) => {
    CredentialsSchema.parse(creds);
    const { data } = await apiFetch(
        "/api/auth/signup",
        {
            method: "POST",
            body:   JSON.stringify(creds),
        },
        SignUpSuccessSchema
    );
    return data;
};
