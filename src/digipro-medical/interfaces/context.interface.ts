import { ICase } from "./case.interface";
import { IClient, IClientRegistry } from "./client.interface";

export interface ClientContext {
  clients: IClient[];
  clientsIsLoading: boolean;
  client: IClient,
  clientIsLoading: boolean;
  fetchAllClients: () => void;
  fetchClient: (id: number) => IClient;
  saveClient: (client: IClient) => void;
  updateClient: (id: number, client: IClient) => void;
}

export interface ClientRegistryContext {
  clientsRegistry: IClientRegistry[];
  registryIsLoaded: boolean;
  fetchClientRegistry: () => void;
}

export interface CaseContext {
  cases: ICase[];
  casesIsLoading: boolean;
  caseDetails: ICase;
  caseIsLoading: boolean;
  isLoading: boolean;
  fetchCases: () => ICase[];
  fetchCase: (id: number) => ICase;
  createCase: (caseObj: ICase) => void;
  updateCase: (id: number, caseData: ICase) => void;
}

// Setting this aside for now..., will see 8(
export type CaseContextType = {
  cases: ICase[];
  casesIsLoaded: boolean;
  fetchCases: () => void;
  fetchCase: (id: number) => void;
  saveCase: (caseObj: ICase) => void;
  updateCase: (id: number, caseData: ICase) => void;
};

