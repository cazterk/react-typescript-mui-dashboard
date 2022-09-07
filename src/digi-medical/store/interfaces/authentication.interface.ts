export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthState {
  authentication: {
    auth: ILogin;
    isError: boolean;
    facilityId?: number;
    authLoading?: boolean;
  }
}