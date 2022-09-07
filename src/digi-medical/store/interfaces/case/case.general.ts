import { IGeneralExamInput } from "./case.general.exam";
import { IVitalsInput } from "./case.vitals";

export interface IComplaints {
  id?: number;
  slug: string;
  case_id: number;
  vitals: {};
  general_exam: {};
  anatomic_axis: {};
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface ICaseReferralInput {
  case?: number;
  referral_facility?: string;
  referred_from_facility?: string;
  referral_date?: Date;
  reason_for_referral?: string;
  referral_details?: string;
}

export interface ITbPresentingComplaintInput {
  case?: number;
  cough: boolean;
  fever: boolean;
  night_sweats: boolean;
  weight_loss: boolean;
  chest_pain: boolean;
  tpt_taken_in_last_3years: boolean;
  patient_tpt_eligible_today: boolean;
  tpt_provided_today: boolean;
}


export interface IArtPresentingComplaintInput {
  case?: number;
  fatigue?: boolean;
  appetite_loss?: boolean;
  sores_in_mouth?: boolean;
  swelling_of_feet?: boolean;
  rush?: boolean;
  hemoptysis?: boolean;
  difficult_breathing?: boolean;
  dizziness?: boolean;
  abdominal_pain?: boolean;
  lower_abdominal_pain?: boolean;
  diarrhoea?: boolean;
  nausea?: boolean;
  vomiting?: boolean;
  genital_ulcers?: boolean;
  genital_discharge?: boolean;
  genital_warts?: boolean;
  genital_swelling?: boolean;
  bleeding?: boolean;
  seizures?: boolean;
  headache?: boolean;
  limb_weakness?: boolean;
  numbness?: boolean;
}


export interface IArtDrugExposureInput {
  case?: number;
  hiv_prep?: string;
  hiv_pep?: string;
  pmtct?: string;
  art?: string;
  other?: string;
}

export interface IDiagnosisInput {
  case?: number,
  symptom: number;
  date_of_onset: Date;
  date_resolved?: Date;
  past_med_hx: boolean;
  certainty: number;
  status: string;
  anatomic_axis: number;
  pathology_axis: number;
}

export interface IDrugExposureInput {
  case?: number;
  currently_taking_drug?: boolean;
  reason_stopped?: string;
  other_drug?: string;
  drug?: number;
}

export interface IPresentingComplaintsInput {
  case?: number;
  general_exam: IGeneralExamInput;
  vitals: IVitalsInput;
}

