/* Client Shape Types and Contract Definations */
import { IClientAuditor } from "./index";

export interface IClientAlternateID extends IClientAuditor {
  alternate_id: string;
  alternate_id_type: number;
  client: number;
}

export interface IClientContact extends IClientAuditor {
  node_id?: string;
  primary_phone: string;
  secondary_phone?: string;
  email?: string;
  client: number;
}

export interface IClientAddress extends IClientAuditor{
  readonly node_id?: string;
  house_number?: string;
  street_name?: string;
  post_code?: string;
  landmarks?: string;
  address_type: string;
  address_details?: string;
  district: string;
  province: string;
  client: number;
}

export interface IClientBirthDetails extends IClientAuditor{
  readonly node_id?: string;
  place_of_birth: string;
  born_in_zambia?: boolean;
  country_of_origin?: string;
  client: number;
  district_of_birth: number;
  province_of_birth: number;
}

export interface IClientRelationship extends IClientAuditor{
  readonly node_id?: string;
  client: number;
  client_relative: number;
  relation: number;
}

export interface IClientHIVStatus extends IClientAuditor{
  hiv_status?: string;
  hiv_positive_date?: Date;
  art_start_date?: Date;
  client: number;
}

export interface IClientRegistry extends IClientAuditor {
  readonly client_uuid: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  nick_name: string;
  sex: string;
  nupn?: string;
  date_of_birth: Date;
  age?: number;
  estimated_age?: number;
  notes?: string;
  caption?: string;
  religion?: number;
  marital_status?: number;
  language?: number;
}

export interface IClient extends IClientAuditor {
  readonly client_uuid: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  nick_name: string;
  sex: string;
  nupn?: string;
  date_of_birth: Date;
  age?: number;
  estimated_age?: number;
  notes?: string;
  caption?: string;
  religion?: number;
  marital_status?: number;
  language?: number;
  client_alternate_ids?: IClientAlternateID[];
  client_contacts?: IClientContact[];
  client_addresses?: IClientAddress[];
  client_birth_details?: IClientBirthDetails;
  client_relationships?: IClientRelationship[];
  client_hiv_status?: IClientHIVStatus;
}