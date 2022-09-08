export interface ICervicalCancerCaseFindingsInput {
  via?: boolean;
  via_reason_refused?: string;
  edi?: boolean;
  edi_reason_refused?: string;
  transformation_zone_seen?: boolean;
  screen_results?: string;
  client_eligible_for_cryotherapy?: boolean;
  client_eligible_for_thermal_coagulation?: boolean;
}