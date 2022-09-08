export enum PastScreeningType {
  HPV = "HPV",
  PAP = "PAP",
  UNSPECIFIED = "UNSPECIFIED"
}

export interface ICervicalCancerMedicalHistoryInput {
  past_screening_type?: PastScreeningType;
  screening_date?: Date;
  sti_history?: boolean;
  genital_surgery?: boolean;
  other_surgery?: string;
  surgery_date?: Date;
}

export interface ICervicalCancerCaseTreatmentInput {
  date_referred_for_treatment?: Date;
  cryotherapy_treatment?: boolean;
  thermal_coagulation_treatment?: boolean;
  leep_treatment?: boolean;
  leep_atypical_vessal?: boolean;
  treatment_delayed?: boolean;
  reason_treatment_delayed?: string;
  delay_details?: string;
}
