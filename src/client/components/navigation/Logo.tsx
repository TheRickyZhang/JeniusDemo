// src/navigation/Logo.tsx
import { Link } from "@tanstack/react-router";

export const Logo = () => (
    <Link to="/" className="flex items-center">
        <img
            src="/images/BankLogo.jpg"
            alt="Bank Logo"
            // Contained by object, max height 90
            className="h-20 md:h-12 w-auto object-contain"
        />
    </Link>
);
