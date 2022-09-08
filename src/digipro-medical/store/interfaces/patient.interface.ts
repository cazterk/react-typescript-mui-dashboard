export interface IAlternateID {
  client?: number;
  alternate_id_type: number;
  alternate_id: string;
}

export interface IClientBirthDetails {
  id?: number;
  client: number;
  place_of_birth: string;
  district_of_birth: string | number;
  province_of_birth: string | number;
  born_in_zambia: boolean;
  country_of_origin: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientAddress {
  temp_id?: string;
  id?: number;
  client: number;
  house_number: string;
  street_name: string;
  district_of_birth: number;
  province_of_birth: number;
  post_code: string;
  landmarks: string;
  address_type: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientContact {
  temp_id?: string;
  id?: number;
  client: number;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientRelationship {
  id?: number;
  client: number;
  client_relative: number;
  relation: number;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}
