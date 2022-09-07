import { IMedicalHistoryInput } from "./case.medical.history.interface";
import {
  ICervicalCancerCaseTreatmentInput,
  ICervicalCancerMedicalHistoryInput
} from "./cervical_cancer_medical_history.interface";
import { ICervicalCancerPhysicalInput } from "./cervical_cancer_physical.interface";
import { ICervicalCancerPresentingComplaintsInput } from "./cervical_cancer_presenting_complaints.interface";
import { ICasePhysicalInput } from "./case.physical.interfaces";
import { IPrescriptionInput } from "./case.prescription";
import { IChronicCaseVisitInput } from "./case.visit.details";
import {
  IArtDrugExposureInput, IArtPresentingComplaintInput,
  ICaseReferralInput, IDiagnosisInput,
  IDrugExposureInput,
  IPresentingComplaintsInput, ITbPresentingComplaintInput
} from "./case.general";
import { ICervicalCancerCaseFindingsInput } from "./cervical_cancer_case_findings";
import { PatientTypeEnum } from "../../../enums/reference/patient_type";
import { CaseStatus } from "../../../enums/case/case_status";

export interface ICaseInput {
  client: number;
  start_date: Date;
  end_date: Date;
  in_patient: boolean;
  passer_by: boolean;
  secondary_visit_type: string;
  patient_type: PatientTypeEnum;
  fuzzy_patient_type: string;
  visit_type: number;
  reason_for_visit: string;
  details_for_visit: string;
  diagnosis: string;
  complaint_details: string;
  status: CaseStatus;
}

export interface ICaseRegState extends ICaseInput {
  artComplaints: IArtPresentingComplaintInput;
  artDrugExposure: IArtDrugExposureInput;
  drugExposure: IDrugExposureInput;
  physicalAssessment: ICasePhysicalInput;
  chronicVisit: IChronicCaseVisitInput;
  prescriptions: IPrescriptionInput;
  caseDiagnostics: IDiagnosisInput[];
  caseDiagnosis: IDiagnosisInput;
  presentingComplaints: IPresentingComplaintsInput;
  medicalHistory: IMedicalHistoryInput;
  referral: ICaseReferralInput;
  tbPresentingComplaints: ITbPresentingComplaintInput;
  cervicalCancerMedHistory?: ICervicalCancerMedicalHistoryInput;
  cervicalCancerPhysicals: ICervicalCancerPhysicalInput;
  cervicalCancerPresentingComplaints: ICervicalCancerPresentingComplaintsInput;
  cervicalCancerTreatment: ICervicalCancerCaseTreatmentInput;
  cervicalCancerCaseFindings: ICervicalCancerCaseFindingsInput;
}
