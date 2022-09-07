export interface IVisitDetails {
  id?: number;
  slug: string;
  visit_uuid: number;
  client_id: number;
  facility_id: number;
  passer_by: boolean;
  reason_for_visit: string;
  detail_for_visit: string;
  visit_type: string;
  patient_type: string;
  completed: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IChronicCaseVisitInput {
  case?: number;
  visit_type_detail?: string;
  chronic_disease?: string;
  requires_prescription?: boolean;
  requires_labs?: boolean;
  requires_hospitalization?: boolean;
}