// src/components/Header.tsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "@/client/hooks/AuthContext";
import { cn } from "@/shared/utils";
import DarkButton from "@components/DarkButton";
import { DarkModeContext } from "@components/DarkModeProvider";
import { useIsMobile } from "@hooks/useIsMobile";
import { DesktopMenu } from "@navigation/DesktopMenu";
import { Logo } from "@navigation/Logo";
import { MobileMenu } from "@navigation/MobileMenu";
import { SearchBar } from "@navigation/SearchBar";
import { UserButton } from "@navigation/UserButton";
import { Link, useLocation } from "@tanstack/react-router";
import { Squash as Hamburger } from "hamburger-react";
import { Briefcase } from "lucide-react";

const SCREEN_BREAKPOINT = 1024;
const navItems = [
  { name: "Project Finance", path: "/project-finance" },
  { name: "Crypto‑Connect", path: "/crypto-connect" },
  { name: "Wealth & Investment", path: "/wealth-investment" },
  { name: "Savings", path: "/savings" },
  { name: "Personal Loans", path: "/personal-loans" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, isLoading, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile(SCREEN_BREAKPOINT);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
          hamburgerRef.current &&
          !hamburgerRef.current.contains(e.target as Node) &&
          menuRef.current &&
          !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
      <header
          className={cn(
              `sticky left-0 top-0 z-50 w-full font-redhat font-medium shadow-md`,
              darkMode
                  ? "bg-green-800 text-white"
                  : "bg-green-300 text-black"
          )}
      >
        <nav className="relative flex h-16 w-full items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden w-full items-center justify-between md:flex">
            <div className="ml-auto flex items-center gap-2">
              <DesktopMenu
                  darkMode={darkMode}
                  navItems={navItems}
                  isHomePage={isHomePage}
              />
              <SearchBar className="ml-4" />
              <DarkButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

              {/* Profile & dashboard */}
              {isAuthenticated && (
                  <>
                    <Link
                        to="/profile/dashboard"
                        className="p-2 rounded hover:bg-gray-200"
                    >
                      <Briefcase
                          className="h-6 w-6"
                          color={isHomePage || darkMode ? "#fff" : "#000"}
                      />
                    </Link>
                  </>
              )}

              <div className="hidden md:block">
                {isLoading ? null : (
                    <UserButton
                        key={isAuthenticated ? "logged-in" : "logged-out"}
                        isLoggedIn={isAuthenticated}
                        onLogout={logout}
                        isHomePage={isHomePage}
                    />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <SearchBar />
            {isAuthenticated && (
                <>
                  <Link to="/profile/dashboard" className="p-1">
                    <Briefcase
                        className="h-5 w-5"
                        color={isHomePage || darkMode ? "#fff" : "#000"}
                    />
                  </Link>
                </>
            )}
            <button ref={hamburgerRef} className="focus:outline-none">
              <Hamburger
                  toggled={menuOpen}
                  toggle={setMenuOpen}
                  color={isHomePage || darkMode ? "#fff" : "#000"}
                  size={22}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div ref={menuRef}>
            <MobileMenu
                navItems={navItems}
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                isHomePage={isHomePage}
                isLoggedIn={isAuthenticated}
                onLogout={logout}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
          </div>
        </nav>
      </header>
  );
};

export default Header;
