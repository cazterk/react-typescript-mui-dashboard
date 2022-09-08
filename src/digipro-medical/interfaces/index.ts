/*------------------------ | Common Types Extensions | -------------------------
  <p>
    All Client and Case Data Model Definations (DMD's) have these common properties
    accross, hence, removing bioler plate when defining the data structures.
    Here we also apply extra constraints and validation rules
  </p>
*/

export interface IAuditor {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  readonly created_by?: string;
  updated_by?: string;
  enabled: boolean;
}

export interface IClientAuditor {
  readonly id: number;
  readonly created_at: Date;
  updated_at?: Date;
  readonly created_by?: string;
  updated_by?: string;
  enabled: boolean;
}
