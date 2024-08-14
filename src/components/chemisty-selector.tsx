import { Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Control, useController, UseFormRegister } from "react-hook-form";
import { FaBolt } from "react-icons/fa";
import { CapacityUnit, Data } from "../type";

type BatteryType = {
  key: string;
  display: JSX.Element | string;
  voltage?: number;
  chargeVoltage?: number;
  dischargeVoltage?: number;
};

const BATTERY_TYPES: BatteryType[] = [
  {
    key: "liion",
    display: "Li-ion",
    voltage: 3.6,
    chargeVoltage: 4.2,
    dischargeVoltage: 2.8,
  },
  {
    key: "lfp",
    display: "LiFePO4",
    voltage: 3.2,
    chargeVoltage: 3.65,
    dischargeVoltage: 2.5,
  },
  {
    key: "leadacid",
    display: "Lead Acid",
    voltage: 12,
    chargeVoltage: 12.89,
    dischargeVoltage: 11.63,
  },
  { key: "custom", display: "Custom..." },
];

type Props = {
  register: UseFormRegister<Data>;
  control: Control<Data>;
};

const ChemistrySelector = ({ control, register }: Props) => {
  const [selectedType, setSelectedType] = useState<BatteryType | null>(null);

  const { field: vField } = useController({ control, name: "voltage" });
  const { field: maxVField } = useController({ control, name: "maxVoltage" });
  const { field: minVField } = useController({ control, name: "minVoltage" });

  const onBatteryTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = BATTERY_TYPES.find((a) => a.key === event.target.value);

    if (selected) {
      setSelectedType(selected);
      vField.onChange(selected.voltage);
      maxVField.onChange(selected.chargeVoltage);
      minVField.onChange(selected.dischargeVoltage);
    }
  };

  return (
    <div className="flex gap-4 flex-col w-full">
      <div className="flex gap-4">
        <Select
          label="Battery Type"
          labelPlacement="outside"
          placeholder="Cell chemistry"
          selectedKeys={selectedType ? [selectedType.key] : []}
          onChange={onBatteryTypeChange}
        >
          {BATTERY_TYPES.map(({ key, display }) => (
            <SelectItem key={key}>{display}</SelectItem>
          ))}
        </Select>
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="w-42"
          classNames={{
            base: "opacity-100",
          }}
          labelPlacement="outside"
          color={selectedType?.key !== "custom" ? "success" : "default"}
          placeholder="0"
          value={selectedType?.voltage?.toString()}
          isDisabled={selectedType?.key !== "custom"}
          onChange={vField.onChange}
          label="Nominal Voltage"
          endContent={<FaBolt />}
        />
      </div>
      {selectedType?.key === "custom" && (
        <div className="flex gap-4">
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            label="Charge Voltage"
            labelPlacement="outside"
            placeholder="0"
            {...register("maxVoltage")}
            endContent={<FaBolt />}
          />
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            label="Discharge Cutoff Voltage"
            labelPlacement="outside"
            placeholder="0"
            {...register("minVoltage")}
            endContent={<FaBolt />}
          />
        </div>
      )}
      <div className="flex gap-4 justify-end">
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          classNames={{ inputWrapper: "pr-0 pl-3", base: "w-56" }}
          label="Capacity"
          labelPlacement="outside"
          placeholder="0"
          {...register("capacity")}
          endContent={
            <Select
              className="w-36"
              classNames={{
                trigger: "bg-transparent",
              }}
              labelPlacement="outside"
              placeholder=" "
              {...register("capacityUnit")}
            >
              {Object.values(CapacityUnit).map((unit) => (
                <SelectItem key={unit}>{unit}</SelectItem>
              ))}
            </Select>
          }
        />
      </div>
    </div>
  );
};

export default ChemistrySelector;
