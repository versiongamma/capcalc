import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <main className="dark bg-neutral-900 text-white h-screen flex items-center justify-center">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
