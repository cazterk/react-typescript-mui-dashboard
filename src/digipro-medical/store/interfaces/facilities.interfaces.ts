export interface IFacilityOwner{
	name: string;
	description: string;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}

export interface IRole{
	facility_owner_id?: number;
	name: string;
	description: string;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}

export interface IUserFacilityRole{
	user_case_role_id?: number;
	role_id?: number;
	facility_id?: number;
	user_id?: number;
}