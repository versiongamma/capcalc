import { useForm } from "react-hook-form";
import CellInput from "./components/cell-input";
import Stats from "./components/stats";
import { CapacityUnit, Data } from "./type";
import { FaInfoCircle } from "react-icons/fa";

const App = () => {
  const { register, watch, control } = useForm<Data>({
    defaultValues: { capacityUnit: CapacityUnit.mAh },
  });

  const standalone = window.matchMedia("(display-mode: standalone)").matches;

  return (
    <>
      <div className="flex flex-col h-screen pt-[env(safe-area-inset-top);] sm:items-center sm:justify-center">
        <h1 className="m-4 font-black text-3xl sm:text-4xl sm:top-4 md:top-8 block text-center sm:fixed">
          Battery Pack Configurator
        </h1>
        <div className="flex items-center flex-col md:flex-row">
          <CellInput register={register} control={control} />
          <Stats {...watch()} />
        </div>
      </div>
      {!standalone && (
        <a
          href="https://versiongamma.com"
          className="absolute bottom-6 right-6"
        >
          <FaInfoCircle fontSize={24} />
        </a>
      )}
    </>
  );
};

export default App;
