export interface IOccupation {
  id?: number;
  name: string;
  slug?: string;
}

export interface IOccupationState {
  occupations: IOccupation[];
  occupationsLoading: boolean;
}
