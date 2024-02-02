export interface IAuthData {
  email: string;
  password: string;
}

export interface IAuthInitInfo {
  user: {
    name?: string;
    email: string;
    avatar: string;
    gender: "woman" | "man" | "";
    dailyNorma?: number | null;
  };
  token: string | null;
  isAuthorized: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: unknown | string;
}

export interface ICurrentUserData {
  name: string;
  email: string;
  avatar: string;
  gender: "woman" | "man";
  dailyNorma: number | null;
}

export interface IGetUserInfo {
  user: {
    name: string;
    email: string;
    avatar: string;
    gender: "woman" | "man";
    dailyNorma: number | null;
  };
}

export interface IUpdateUserinfo {
  name?: string;
  email?: string;
  gender?: "woman" | "man";
}

export interface IUpdateUserAvatar {
  avatar: string;
}

export interface IUpdateUserDailyNorma {
  dailyNorma: number | null;
}

export interface IWaterPayload {
  _id: string;
  waterVolume: number;
  time: string;
}

export type IAddWaterPortion = {
  waterVolume: number;
  time: string;
};

export interface IAmountDaily {
  amountOfWater: number;
  percentage: number;
  entries: IWaterPayload[];
}

export interface IMonth {
  id: string;
  date: string;
  amountOfWater: number;
  dailyNorma: number;
  percentage: number;
}

export interface IAmountMonthly {
  month: IMonth[];
}

export interface IDailyNorma {
  dailyNorma: number | null;
}

export interface IWater {
  amountDaily: IAmountDaily;
  amountMonthly: IAmountMonthly | null;
  isLoading: boolean;
  error: unknown | string;
}
