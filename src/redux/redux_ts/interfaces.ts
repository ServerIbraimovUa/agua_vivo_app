export interface IWater {
    waterList: any[],
    dailyNorma: null | object,
    monthlyNorma: null | [],
    isLoading: boolean,
    error: unknown | string,
}

export interface IAuthInit {
    user: null | object;
    token: null | string;
    isAuthorized: boolean;
    isLoading: boolean;
    error: unknown | string;
  }