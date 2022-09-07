import {
  BpNotTaken,
  HeightNotTaken,
  PulseNotTaken,
  RespiratoryNotTaken,
  TempNotTaken,
  WeightNotTaken,
} from "../../../enums/case/presenting_complaints";

export interface IVitalsInput {
  temp_not_taken?: TempNotTaken;
  temperature: number;
  bp_not_taken?: BpNotTaken;
  systolic_bp: number;
  diastolic_bp: number;
  pulse_not_taken?: PulseNotTaken;
  pulse_rate: number;
  respiratory_rate: number;
  respiratory_not_taken?: RespiratoryNotTaken;
  height_not_taken?: HeightNotTaken;
  height: number;
  weight_not_taken?: WeightNotTaken;
  weight: number;
}
