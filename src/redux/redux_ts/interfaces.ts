export interface IWater {
  waterList: any[];
  monthlyNorma: null | [];
  isLoading: boolean;
  error: unknown | string;
}

export interface IAuthInit {
  user: null | object;
  token: null | string;
  isAuthorized: boolean;
  isLoading: boolean;
  error: unknown | string;
}
