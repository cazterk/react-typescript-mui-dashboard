import { ICase, IGeneralExam, IVitals } from "../../interfaces/case.interface";


export interface IComplaint {
  id?: number;
  slug?: string;
  case: ICase;
  vitals: IVitals;
  general_exam: IGeneralExam;
  enabled?: boolean;
}

export interface IComplaintState {
  complaint: IComplaint | null;
  complaints: IComplaint[];
  complaintsLoading: boolean;
}
