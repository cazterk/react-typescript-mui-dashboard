export interface ICaseARTDrugExposure {
  id?: number;
  case_id: number;
  client_id: number;
  visit_date: Date;
  hiv_prep: string;
  hiv_pep: string;
  pmtct: string;
  art: string;
  other: any;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;
  updated_by?: number;
  enabled?: boolean;
}
