import { ApiResponse } from "./auth";

export type BalanceTypes = {
  balance: {
    hbar: string;
    usd: number;
    ngn: number;
  };
};
export type GetBalanceRsp = ApiResponse & { data: BalanceTypes };
