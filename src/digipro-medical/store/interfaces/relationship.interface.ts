export interface IRelationship {
  id?: number;
  name: string;
  slug?: string;
  relation_type: IRelationType;
}
export interface IRelationshipState {
  relationships: IRelationship[];
  relationshipsLoading: boolean;
}

export interface IRelationType{
  id?: number;
  name: string;
  slug?: string;
}
