import { Api } from "./api";
import { GetBalanceRsp } from "@/types/wallets";

export const getWalletBalance = () => {
  return Api.get<GetBalanceRsp>("/wallet/balance", true);
};
