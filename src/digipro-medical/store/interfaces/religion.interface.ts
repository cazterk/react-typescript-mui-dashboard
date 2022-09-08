export interface IReligion {
  id?: number;
  religion: string;
}

export interface IReligionState {
  religions: IReligion[];
  religionsLoading: boolean;
}
