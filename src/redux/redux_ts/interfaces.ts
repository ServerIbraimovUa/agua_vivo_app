export interface IAuthData {
  email: string;
  password: string;
}

export interface IAuthInitInfo {
  user: {
    name?: string;
    email: string;
    avatar: File | null;
    gender: "women" | "man" | "";
    dailyNorma?: number | null;
  };
  token: string;
  isAuthorized: boolean;
  isLoading: boolean;
  error: unknown | string;
}

export interface ICurrentUserData {
  name: string;
  email: string;
  avatar: File | null;
  gender: "women" | "man";
  dailyNorma: number | null;
}

export interface IGetUserInfo {
  user: {
    name: string;
    email: string;
    avatar: File | null;
    gender: "women" | "man";
    dailyNorma: number | null;
  };
}

export interface IUpdateUserinfo {
  name?: string;
  email?: string;
  gender?: "women" | "man";
}

export interface IUpdateUserAvatar {
  avatar: File | null;
}

export interface IUpdateUserDailyNorma {
  dailyNorma: number | null;
}

export interface IWaterPayload {
  id: string;
  waterVolume: number;
  time: string;
}

export type IAddWaterPortion = {
  waterVolume: number;
  date: string;
};

export interface IAmountDaily {
  amountOfWater: number;
  percentage: number;
  entries: [IWaterPayload];
}

export interface IMonth {
  id: string;
  date: string;
  amountOfWater: number;
  dailyNorma: number;
  percentage: number;
}

export interface IAmountMonthly {
  month: [IMonth];
}

export interface IDailyNorma {
  dailyNorma: number | null;
}

export interface IWater {
  waterList: IWaterPayload[];
  amountDaily: IAmountDaily | {};
  amountMonthly: IAmountMonthly | {};
  isLoading: boolean;
  error: unknown | string;
}
