export interface IAlternateIdType {
  id: number;
  code: string;
  description: string;
  alternate_id_type: string;
}

export interface IMaritalStatus {
  id: number;
  marital_status: string;
}

export interface IUtilsState {
  id_types: {
    id_types: IAlternateIdType[];
    id_types_loading: boolean;
  };

  marital_status: {
    marital_statuses: IMaritalStatus[];
    maritalStatusesLoading: boolean;
  };
}
