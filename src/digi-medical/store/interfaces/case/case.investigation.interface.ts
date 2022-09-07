// CHANGE TEST LOCATION

export interface ICaseInvestigation {
  id?: number;
  case_id: number;
  client_id: number;
  visit_date: Date;
  investigation_type: string;
  investigation_code: string;
  order_date: Date;
  order_by: string; // SUBJECT TO CHANGE
  approved_by: string; // SUBJECT TO CHANGE
  approval_date: Date;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;
  updated_by?: number;
  enabled?: boolean;
}

export interface ICaseInvestigationDetail {
  id?: number;
  case_id: number;
  client_id: number;
  case_investigation_id: number;
  result: string;
  priority: string;
  quantity: number;
  sample_collection_date: Date;
  sample_collection_time: string;
  sample_reception_date: Date;
  sample_reception_time: string;
  sample_dispatch_date: Date;
  sample_dispatch_time: string;
  test_location: any;
  lab_test_result: string;
  results_acknowledged: boolean;
  comments: string;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;
  updated_by?: number;
  enabled?: boolean;
}
