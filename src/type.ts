export enum CapacityUnit {
  mAh = "mAh",
  Wh = "Wh",
}

export type Data = {
  voltage: number;
  maxVoltage: number;
  minVoltage: number;
  capacity: number;
  capacityUnit: CapacityUnit;
  series: number;
  parallel: number;
};
