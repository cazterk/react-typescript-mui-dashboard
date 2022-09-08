export type Findings = "Normal" | "Abnormal" | "Not Known" | "Other";

export const findings: Findings[] = [
  "Normal",
  "Abnormal",
  "Not Known",
  "Other"
];

export interface ICervicalCancerPhysicalInput {
  pelvic: boolean | null;
  pelvic_findings: Findings;
  vulva?: boolean;
  vulva_findings?: Findings;
  cervix: boolean | null;
  cervix_findings: Findings;
  vagina: boolean | null;
  vagina_findings: Findings;
  lower_abdomen: boolean | null;
  lower_abdomen_findings: Findings;
  other_clinical_findings: string;
  post_treatment_complications?: string;
}
