import {
  ICervicalCancerCaseTreatmentInput,
  ICervicalCancerMedicalHistoryInput,
  PastScreeningType
} from "../store/interfaces/case/cervical_cancer_medical_history.interface";
import { ICervicalCancerPhysicalInput } from "../store/interfaces/case/cervical_cancer_physical.interface";
import {
  ICervicalCancerPresentingComplaintsInput
} from "../store/interfaces/case/cervical_cancer_presenting_complaints.interface";
import { ICervicalCancerCaseFindingsInput } from "../store/interfaces/case/cervical_cancer_case_findings";

export interface ICervicalCancerMedicalHistory extends ICervicalCancerMedicalHistoryInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean
  readonly created_by?: string;
  updated_by?: string;
}

export interface ICervicalCaseTreatment extends ICervicalCancerCaseTreatmentInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
}

export interface ICervicalCasePhysical extends ICervicalCancerPhysicalInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
}

export interface ICervicalCasePresentingComplaints extends ICervicalCancerPresentingComplaintsInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
}

export interface ICervicalCaseFindings extends ICervicalCancerCaseFindingsInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
}

export interface ICervicalCancer {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  medical_history: ICervicalCancerMedicalHistory;
  physical: ICervicalCasePhysical;
  presenting_complaint: ICervicalCasePresentingComplaints;
  findings: ICervicalCaseFindings;
  treatment: ICervicalCaseTreatment;
}