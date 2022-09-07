export interface IUser{
	id?: number;
	facility_id?: number;
	name: string;
	last_name: string;
	email: string;
	user_name: string;
	password: string;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}