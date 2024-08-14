import { Input } from "@nextui-org/react";
import ChemistrySelector from "./components/chemisty-selector";
import Stats from "./components/stats";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[500px] gap-4 flex-col items-center">
        <h1 className="font-bold text-xl">Lithium Battery Calculator</h1>
        <h2>Cell Details</h2>
        <ChemistrySelector />
        <h2>Pack Details</h2>
        <div className="flex gap-4 w-full">
          <Input type="number" label="Series" />
          <Input type="number" label="Parallel" />
        </div>
        <Stats series={2} parallel={3} voltage={3.7} />
      </div>
    </div>
  );
}

export default App;
