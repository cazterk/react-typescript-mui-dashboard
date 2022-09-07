import { IRelationship } from "./relationship.interface";
import {
  IAlternateID,
  IClientAddress,
  // IClientAuxiliaryDetails,
  IClientBirthDetails,
  IClientContact,
  IClientRelationship,
} from "./patient.interface";
import { IReligion } from "./religion.interface";
import { IMaritalStatus } from "./alternate_id_type.interface";

export interface IRegistration {
  client_uuid: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  nupn: string;
  nick_name: string;
  date_of_birth: Date | string;
  sex: string;
  age: number;
  estimated_age: number;
  language: number;
  notes: string;
  caption?: string;
  enabled?: boolean;
  client_religion?: IReligion;
  client_marital_status?: IMaritalStatus;
}

// tslint:disable-next-line: no-empty-interface
export interface IPatient extends IRegistration {
  id?: number;
  client_addresses?: IClientAddress[];
  client_contacts?: IClientContact[];
  client_alternate_ids?: IAlternateID[];
  client_birth_details?: IClientBirthDetails;
  client_relationships?: IRelation[];
}

interface IRelation {
  id?: number;
  client: number;
  relation: IRelationship;
  client_relative: IPatient;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IPatientState {
  patient: {
    patient: IPatient | null;
    patientLoading: boolean;
  };
  patients: {
    patients: IPatient[];
    patientsLoading: boolean;
  };
}

export interface IClientRegState {
  client: IRegistration;
  client_address?: IClientAddress[];
  client_address_obj?: IClientAddress;
  client_contacts?: IClientContact[];
  client_contacts_obj?: IClientContact;
  client_alternate_ids?: IAlternateID[];
  client_alternate_id?: IAlternateID;
  client_birth_details?: IClientBirthDetails;
  client_relationships?: IClientRelationship[];
  client_relationships_obj?: IClientRelationship;
}
