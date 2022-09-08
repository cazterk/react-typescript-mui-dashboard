export interface ITimeSheetHour{
	id?: number;
	timesheet_id: number;
	user_id: number;
	task_category_id: number;
	task_id: number;
	quantity: number;
	description: string;
	project_manager_id: number;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}

export interface ITimeSheet{
	id?: number;
	name: string;
	description: string;
	project_id: number;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
	user_id: number;
}

export interface ITimeCategory{
	id?: number;
	name: string;
	description: string;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}

export interface ITasks{
	id?: number;
	name: string;
	description: string;
	work: string;
	project_id: number;
	start_date: Date;
	end_date: Date;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;

}

export interface ITimeSheetCostCenter{
	id?: number;
	time_sheet_id: number;
	cost_center: number;
}

export interface IProjectCost{
	id?: number;
	project_id: number;
	cost_center_id: number;
}

export interface ICostCenter{
	id?: number;
	name: string;
	description: string;
	created_at?: Date;
	updated_at?: Date;
	enabled?: boolean;
}