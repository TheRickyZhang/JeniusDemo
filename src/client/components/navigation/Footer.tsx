// src/components/Footer.tsx
import { Link } from "@tanstack/react-router";
import { Button } from "@ui/button";
import SocialIcons from "@ui/socialIcons";

const footerNavItems = [
  { key: "home",              label: "Home",                 href: "/" },
  { key: "project-finance",   label: "Project Finance",      href: "/project-finance" },
  { key: "crypto-connect",    label: "Crypto‑Connect",       href: "/crypto-connect" },
  { key: "wealth-investment", label: "Wealth & Investment",  href: "/wealth-investment" },
];

const Footer: React.FC = () => {
  return (
      <footer className="mt-auto bg-gray-900 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          {/* Left: Logo & Social */}
          <div className="mb-6 flex flex-col items-center md:mb-0">
            <div className="mb-4">
              {/* TODO: add BankLogo.png to /assets/ */}
              <img
                  src="/images/BankLogo.png"
                  alt="Bank Logo"
                  className="h-12 w-auto"
              />
            </div>
            <SocialIcons />
          </div>

          {/* Right: Navigation & Support */}
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-6 flex flex-col items-center space-y-3 md:flex-row md:space-x-8 md:space-y-0">
              {footerNavItems.map(item => (
                  <Link
                      key={item.key}
                      to={item.href}
                      className="font-medium text-lg text-white hover:text-green-400 hover:underline"
                  >
                    {item.label}
                  </Link>
              ))}
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-center">
              <div className="h-px w-64 bg-green-500" />
              <div className="mt-4 md:mt-0 md:ml-6">
                <Button asChild variant="link" size="default">
                  <Link
                      to="/"
                      onClick={() => {
                        setTimeout(() => {
                          document.getElementById("support")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="inline-flex h-10 items-center rounded-full border-2 border-green-500 bg-green-500 px-6 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
                  >
                    Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
