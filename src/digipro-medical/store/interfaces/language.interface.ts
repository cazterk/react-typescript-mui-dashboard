export interface ILanguage {
  id?: number;
  name: string;
  slug?: string;
} 

export interface ILanguageState {
  languages: ILanguage[];
  languagesLoading: boolean;
}
