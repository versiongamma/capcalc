import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useForm } from "react-hook-form";
import Details from "./components/details";
import Stats from "./components/stats";
import "./index.css";
import { CapacityUnit, Data } from "./type";

const App = () => {
  const { register, watch, control } = useForm<Data>({
    defaultValues: { capacityUnit: CapacityUnit.mAh },
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-black text-3xl mt-4 hidden sm:block sm:text-4xl max-[768px]:top-4 md:translate-y-[-80px] fixed">
        Lithium Battery Calculator
      </h1>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <Details register={register} control={control} />
        <Stats {...watch()} />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <main className="dark bg-neutral-900 text-white h-screen flex items-center justify-center">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
