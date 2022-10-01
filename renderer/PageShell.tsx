import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { FaSignOutAlt } from "react-icons/fa/index.js";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  console.log(pageContext.urlPathname);
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <button
          title="logout"
          style={{
            border: "none",
            backgroundColor: "rgba(1,1,1,0)",
          }}
        >
          <FaSignOutAlt
            size=" clamp(2rem, 5vw, 4rem)"
            style={{ color: "#007980", margin: "1em" }}
            onClick={async (el) => {
              let res = await fetch("/auth/logout", {
                method: "GET",
              });
              if (res.status == 200) {
                window.location.reload();
              } else {
                window.alert(
                  "Somthing went wrong while logging out please try again"
                );
              }
            }}
          />
        </button>
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="page-container"
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
