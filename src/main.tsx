import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <main
        className="dark text-white h-screen"
        style={{
          background:
            "linear-gradient(126deg, rgba(71,7,119,1) 0%, rgba(131,9,60,1) 35%, rgba(166,80,11,1) 100%)",
        }}
      >
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
