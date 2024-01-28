export interface IWater {
  waterList: any[];
  monthlyNorma: null | [];
  isLoading: boolean;
  error: unknown | string;
}

export interface IAuthInit {
  user: {
    email: string;
    avatar: string;
    gender?: "women" | "man" | "";
    dailyNorma?: string;
    name?: string;
  };
  token: string;
  isAuthorized: boolean;
  isLoading: boolean;
  error: unknown | string;
}
