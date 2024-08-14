import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { CapacityUnit, Data } from "../type";
import { TbCircuitBattery } from "react-icons/tb";

const CapacityCalculationMap: Record<
  CapacityUnit,
  ({
    voltage,
    capacity,
    series,
    parallel,
  }: {
    voltage: number;
    capacity: number;
    series: number;
    parallel: number;
  }) => number
> = {
  [CapacityUnit.Wh]: ({ capacity, series, parallel }) =>
    capacity * series * parallel,
  [CapacityUnit.mAh]: ({ capacity, series, parallel, voltage }) =>
    (capacity * voltage * series * parallel) / 1000,
};

const Stats = ({
  series = 0,
  parallel = 0,
  voltage = 0,
  capacity,
  capacityUnit,
  maxVoltage = 0,
  minVoltage = 0,
}: Data) => {
  const packVoltage = voltage * series;
  const packMaxVoltage = maxVoltage * series;
  const packMinVoltage = minVoltage * series;

  return (
    <Card isBlurred className="w-[300px] m-4">
      <CardHeader>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-xl font-black">Battery Details</h2>
            <p className={`${!series || !parallel ? "text-transparent" : ""}`}>
              {series}s{parallel}p
            </p>
          </div>
          <TbCircuitBattery fontSize={32} />
        </div>
      </CardHeader>
      <CardBody className="flex gap-4">
        <div className="flex justify-between gap-4 bg-zinc-800 p-3 rounded-lg">
          <h1 className="text-zinc-400">Voltage: </h1>
          <div className="flex flex-col items-end mt-1">
            <p>
              <span className="font-bold font-mono ml-3">
                {packVoltage.toFixed(1)}V
              </span>
            </p>
            <p className="mt-3">
              Max:
              <span className="font-mono ml-3">
                {packMaxVoltage.toFixed(1)}V
              </span>
            </p>
            <p>
              Min:
              <span className="font-mono ml-[1.35rem]">
                {packMinVoltage.toFixed(1)}V
              </span>
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg  flex justify-between">
          <p className="text-zinc-400">Capacity:</p>
          <span className="font-mono ml-3">
            {!!capacityUnit && !!voltage
              ? CapacityCalculationMap[capacityUnit]({
                  capacity,
                  voltage,
                  series,
                  parallel,
                }).toFixed(2)
              : "0.00"}
            Wh
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Stats;
