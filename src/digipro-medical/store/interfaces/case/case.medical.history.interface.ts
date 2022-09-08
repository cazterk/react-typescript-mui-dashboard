export interface IMedicalHistoryInput {
  case?: number;
  tb_history?: boolean;
  pneumonial_history?: boolean;
  oral_thrush?: boolean;
  ear_discharge_history?: boolean;
  sickle_cell_history?: boolean;
  cardiac_disease_history?: boolean;
  diarrhoea_history?: boolean;
  malnutrition_history?: boolean;
  neck_swelling_history?: boolean;
  epilepsy_history?: boolean;
  parotid_enlargement?: boolean;
  diabetes_history?: boolean;
  kidney_disease?: boolean;
  asthma_history?: boolean;
  hypertension_history?: boolean;
  psychiatric_history?: boolean;
  other_history?: string;
}
