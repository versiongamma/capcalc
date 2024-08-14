import { useForm } from "react-hook-form";
import Stats from "./components/stats";
import { CapacityUnit, Data } from "./type";
import Details from "./components/details";

function App() {
  const { register, watch, control } = useForm<Data>({
    defaultValues: { capacityUnit: CapacityUnit.mAh },
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-black text-3xl mt-4 hidden sm:block sm:text-4xl max-[768px]:top-4 md:translate-y-[-80px] fixed">
        Lithium Battery Calculator
      </h1>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <Details {...{ register, control }} />
        <Stats {...watch()} />
      </div>
    </div>
  );
}

export default App;
