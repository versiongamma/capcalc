import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { Control, UseFormRegister } from "react-hook-form";
import { FaBatteryFull } from "react-icons/fa";
import { Data } from "../type";
import ChemistrySelector from "./chemisty-selector";

type Props = {
  register: UseFormRegister<Data>;
  control: Control<Data>;
};

const Details = ({ register, control }: Props) => (
  <Card isBlurred className="m-4">
    <CardHeader>
      <div className="flex justify-between w-full">
        <h2 className="font-black text-lg">Cell Details</h2>
        <FaBatteryFull fontSize={32} />
      </div>
    </CardHeader>
    <CardBody>
      <ChemistrySelector register={register} control={control} />
      <div className="flex gap-4 w-full my-4">
        <Input
          type="number"
          label="Cells in Series"
          labelPlacement="outside"
          placeholder="Series"
          {...register("series")}
          endContent={
            <div className="flex gap-1">
              <FaBatteryFull />
              <FaBatteryFull />
            </div>
          }
        />
        <Input
          label="Cells in Parallel"
          labelPlacement="outside"
          placeholder="Parallel"
          {...register("parallel")}
          endContent={
            <>
              <FaBatteryFull className="-rotate-90" />
              <FaBatteryFull className="-rotate-90" />
            </>
          }
        />
      </div>
    </CardBody>
  </Card>
);
export default Details;
