export interface ICaseDrugExposure {
  id?: number;
  case_id: number;
  client_id: number;
  visit_date: Date;
  drug_id: number;
  currently_taking_drug: boolean;
  reason_stopped?: string;
  other_drug_id?: number;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;
  updated_by?: number;
  enabled?: boolean;
}
