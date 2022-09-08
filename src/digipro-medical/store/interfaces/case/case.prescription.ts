export interface IPrescriptionInput {
  case?: number;
  strength: string;
  dose: string;
  duration: number;
  chronic_prescription?: boolean;
  quantity_per_dose: string;
  refills?: number;
  product: number;
  formulation: number;
  dose_uom: number;
  duration_uom: number;
  regimen_product: number;
  route?: number;
  quantity_per_dose_uom: number;
  frequency: number;
  reason?: number;
}