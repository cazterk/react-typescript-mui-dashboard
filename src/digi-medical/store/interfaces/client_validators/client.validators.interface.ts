export interface IClientBirthDetailsValidator{
	client_id_valid: boolean;
	place_of_birth_valid: boolean;
	district_of_birth_valid: boolean;
	province_of_birth_valid: boolean;
	born_in_zambia_valid: boolean;
	country_of_origin_valid: boolean;
}
export interface IClientAuxIdsValidator{
	client_id_valid: boolean;
	nupn_valid: boolean;
	nrc_valid: boolean;
	passport_valid: boolean;
	drivers_license_valid: boolean;
	art_number_valid: boolean;
	nhiman_no_valid: boolean;
	safe_motherhood_no_valid: boolean;
}

export interface IClientAddressValidator{
	client_id_valid: boolean;
	house_no_valid: boolean;
	street_name_valid: boolean;
	district_id_valid: boolean;
	province_id_valid: boolean;
	postal_code_valid: boolean;
	landmarks_valid: boolean;
	address_type_valid: boolean;
}

export interface IClientRelationshipValidator{
	client_id_valid: boolean;
	relatiive_client_id_valid: boolean;
	full_name_valid: boolean;
	primary_phone_valid: boolean;
	address_valid: boolean;
	relationship_type_valid: boolean;
}

export interface IClientContactvalidator{
	client_id_valid: boolean;
	primary_phone_valid: boolean;
}
