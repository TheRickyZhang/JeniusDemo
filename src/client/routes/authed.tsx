// src/routes/authed.tsx
import React, { useEffect } from "react";
import { useAuth } from "@/client/hooks/AuthContext";
import { createFileRoute } from "@tanstack/react-router";
import { useIsMobile } from "@hooks/useIsMobile";

const SCREEN_BREAKPOINT = 1024;

export const Route = createFileRoute("/authed")({
  component: AuthedComponent,
});

function AuthedComponent() {
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile(SCREEN_BREAKPOINT);

  useEffect(() => {
    console.log("[AuthedComponent] isAuthenticated:", isAuthenticated);
    // console.log("[AuthedComponent] isAdmin:", isAdmin);
    console.log(
        `[AuthedComponent] isMobile (<${SCREEN_BREAKPOINT}px):`,
        isMobile
    );
    console.log("[AuthedComponent] window.innerWidth:", window.innerWidth);
  }, [isAuthenticated, isMobile]);

  return (
      <div className="p-4">
        <div>Helllllllo</div>
        {isAuthenticated ? (
            <div>Hello, you are indeed authenticated</div>
        ) : (
            <div>Sorry, you are not authenticated</div>
        )}
        {/*{isAdmin ? <div>You are an admin</div> : <div>You are not an admin</div>}*/}

        {/* Debug panel for mobile mode */}
        <div className="mt-6 p-4 bg-yellow-100 text-black rounded-lg">
          <h4 className="font-semibold mb-2">Debug Info</h4>
          <p>isMobile: <strong>{isMobile ? "true" : "false"}</strong></p>
          <p>Breakpoint: <strong>{SCREEN_BREAKPOINT}px</strong></p>
          <p>
            Window width:{" "}
            <strong>
              {typeof window !== 'undefined' ? window.innerWidth : 'SSR'}
            </strong>
          </p>
        </div>
      </div>
  );
}
