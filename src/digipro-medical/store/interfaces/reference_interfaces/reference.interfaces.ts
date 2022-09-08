export interface IIDType {
  slug?: string;
  name?: string;
  id?: string;
}

export interface IReferenceState {
  id_type: {
    id_types: IIDType[];
    idTypesLoading: boolean;
  };
}
