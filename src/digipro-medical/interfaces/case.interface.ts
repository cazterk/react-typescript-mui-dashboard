/*-------------------------- Case Abstraction Types --------------------------
* Contains implicit interface definations for all Case object shapes. This makes
* sure that everything is implemented as expected.
* -----------------------------------------------------------------------------
*/

import { IAuditor } from "./index";
import { ICasePhysicalInput } from "../store/interfaces/case/case.physical.interfaces";
import { IPrescriptionInput } from "../store/interfaces/case/case.prescription";
import { IChronicCaseVisitInput } from "../store/interfaces/case/case.visit.details";
import { IMedicalHistoryInput } from "../store/interfaces/case/case.medical.history.interface";
// import { IVitalsInput } from "../store/interfaces/case/case.vitals";
import { IGeneralExamInput } from "../store/interfaces/case/case.general.exam";
import { ICaseInput } from "../store/interfaces/case/case";
import {
  IArtDrugExposureInput,
  IArtPresentingComplaintInput, ICaseReferralInput,
  IDiagnosisInput, IDrugExposureInput, IPresentingComplaintsInput, ITbPresentingComplaintInput
} from "../store/interfaces/case/case.general";
import {
  ICervicalCancerCaseTreatmentInput,
  ICervicalCancerMedicalHistoryInput
} from "../store/interfaces/case/cervical_cancer_medical_history.interface";
import { ICervicalCancerPhysicalInput } from "../store/interfaces/case/cervical_cancer_physical.interface";
import {
  ICervicalCancerPresentingComplaintsInput
} from "../store/interfaces/case/cervical_cancer_presenting_complaints.interface";
import { ICervicalCancerCaseFindingsInput } from "../store/interfaces/case/cervical_cancer_case_findings";
// import { PatientTypeEnum } from "../enums/reference/patient_type";
// import { CaseStatus } from "../enums/case/case_status";

export interface ICase extends IAuditor, ICaseInput {
  readonly case_uuid?: string;
  facility: string;
  art_presenting_complaints: IARTPresentingCompalint;
  art_drug_exposure: IARTDrugExposure;
  diagnostics: IDiagnosis[];
  drug_exposure: IDrugExposure;
  case_physical: ICasePhysical;
  prescriptions: IPrescription[];
  case_referral: ICaseReferral;
  chronic_case_visits: IChronicCaseVisit;
  medical_history: IMedicalHistory;
  presenting_complaints: IPresentingComplaints;
  tb_presenting_complaints: ITBPresentingComplaints;
}

export interface IARTPresentingCompalint extends IArtPresentingComplaintInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
  case: number;
}

export interface IARTDrugExposure extends IArtDrugExposureInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
  case: number;
}

export interface IDiagnosis extends IDiagnosisInput {
  case: number;
}

export interface IDrugExposure extends IDrugExposureInput {
  readonly id: number;
  case: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;

}

export interface ICasePhysical extends ICasePhysicalInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
  case: number;
}

export interface IPrescription extends IPrescriptionInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
}

export interface ICaseReferral extends ICaseReferralInput {
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly id: number;
  readonly created_by?: string;
  updated_by?: string;
}

export interface IChronicCaseVisit extends IChronicCaseVisitInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
  case: number;
}

export interface IMedicalHistory extends IMedicalHistoryInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: boolean;
  case: number;
}

export interface IPresentingComplaints {
  readonly id: number;
  general_exam: IGeneralExam;
  // vitals: IVitals;
  enabled: boolean;
  case: number;
}

export interface IGeneralExam extends IGeneralExamInput {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  readonly created_by?: Date;
  updated_by?: string;
}

// export interface IVitals extends IVitalsInput {
//   readonly id: number;
//   readonly created_at?: Date;
//   updated_at?: Date;
//   enabled: boolean;
//   readonly created_by?: string;
//   updated_by?: string;
// }

export interface ITBPresentingComplaints extends ITbPresentingComplaintInput {
  readonly id: number;
  readonly created_at?: Date;
  updated_at?: Date;
  enabled: boolean;
  readonly created_by?: string;
  updated_by?: string;
  case: number;
}


export interface ICaseState {
  cases: ICase[];
  case: ICase | null;
  casesLoading: boolean;
  caseLoading: boolean;
}

export interface ICasePayload {
  client: number;
  start_date: string;
  end_date: string;
  in_patient: boolean;
  passer_by: boolean;
  secondary_visit_type: string;
  // patient_type: PatientTypeEnum;
  fuzzy_patient_type: string;
  visit_type: number;
  reason_for_visit: string;
  details_for_visit: string;
  diagnosis: string;
  complaint_details: string;
  // status: CaseStatus;
  art_presenting_complaints: IArtPresentingComplaintInput | undefined,
  art_drug_exposure: IArtDrugExposureInput | undefined,
  diagnostics: IDiagnosisInput[],
  drug_exposure: IDrugExposureInput | undefined,
  case_physical: ICasePhysicalInput | undefined,
  case_prescription: IPrescriptionInput | undefined,
  case_referral: ICaseReferralInput | undefined,
  cervical_cancer: {
    medical_history: ICervicalCancerMedicalHistoryInput,
    physical: ICervicalCancerPhysicalInput,
    presenting_complaint: ICervicalCancerPresentingComplaintsInput,
    findings: ICervicalCancerCaseFindingsInput,
    treatment: ICervicalCancerCaseTreatmentInput,
  } | undefined,
  chronic_case_visits: IChronicCaseVisitInput | undefined,
  medical_history: IMedicalHistoryInput | undefined,
  presenting_complaints: IPresentingComplaintsInput | undefined,
  tb_presenting_complaints: ITbPresentingComplaintInput | undefined
}

export interface ICaseEditPayload {
  client: number;
  start_date: string;
  end_date: string;
  in_patient: boolean;
  passer_by: boolean;
  secondary_visit_type: string;
  // patient_type: PatientTypeEnum;
  fuzzy_patient_type: string;
  visit_type: number;
  reason_for_visit: string;
  details_for_visit: string;
  diagnosis: string;
  complaint_details: string;
  // status: CaseStatus;
  art_presenting_complaints: IArtPresentingComplaintInput | undefined,
  art_drug_exposure: IArtDrugExposureInput | undefined,
  diagnostics: IDiagnosisInput[],
  drug_exposure: IDrugExposureInput | undefined,
  case_physical: ICasePhysicalInput | undefined,
  case_prescription: IPrescriptionInput | undefined,
  case_referral: ICaseReferralInput | undefined,
  cervical_cancer: {
    medical_history: ICervicalCancerMedicalHistoryInput,
    physical: ICervicalCancerPhysicalInput,
    presenting_complaint: ICervicalCancerPresentingComplaintsInput,
    findings: ICervicalCancerCaseFindingsInput,
    treatment: ICervicalCancerCaseTreatmentInput,
  } | undefined,
  chronic_case_visits: IChronicCaseVisitInput | undefined,
  medical_history: IMedicalHistoryInput | undefined,
  presenting_complaints: IPresentingComplaintsInput | undefined,
  tb_presenting_complaints: ITbPresentingComplaintInput | undefined
}