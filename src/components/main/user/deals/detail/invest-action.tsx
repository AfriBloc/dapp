import { Minus, Plus } from "lucide-react";
import WalletIcon from "/public/svgs/wallet.svg";
import Image from "next/image";
import BaseButton from "@/components/ui/buttons/base-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getWalletBalance } from "@/services/apis/wallets.api";
import { MarketPrice, QtyInput } from "../deal-card";

export default async function InvestAction() {
  const rsp = await getWalletBalance();

  const balance = rsp?.ok ? rsp?.body?.data?.balance?.ngn : 0;

  return (
    <div className="col-start w-full gap-6">
      <div className="w-full rounded-lg p-3 text-start shadow-[0px_4px_20px_0px_#0000000D] outline-none md:p-5">
        <h3 className="text-lg font-bold md:text-2xl">
          Invest in this property
        </h3>
        <div className="col-start mt-5 w-full gap-1">
          <label htmlFor="unit" className="text-sm font-normal">
            Select unit to buy
          </label>
          <QtyInput />
        </div>
        <div className="col-start mt-5 w-full gap-1">
          <label htmlFor="payment-method" className="text-base font-semibold">
            Payment method
          </label>
          <RadioGroup defaultValue="wallet" className="!w-full">
            <div className="border-BlueGray-100 flex-between h-10 w-full rounded-lg border px-4 md:h-14">
              <div className="flex-start gap-2">
                <div className="flex-center bg-BlueGray-50 size-10 rounded-full">
                  <Image src={WalletIcon} alt="wallet icon" />
                </div>
                <label
                  htmlFor="wallet"
                  className="text-Gray-900 text-sm font-normal"
                >
                  Wallet
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-Gray-600 text-xs font-normal">
                  Balance:{"  "}
                  <MarketPrice
                    price={balance}
                    className="text-Gray-900 text-sm"
                  />
                </span>
                <RadioGroupItem value="wallet" id="wallet" className="" />
              </div>
            </div>
          </RadioGroup>
        </div>
        <BaseButton className="mt-5 w-full !py-4" disabled={balance === 0}>
          Make Payment
        </BaseButton>
      </div>
    </div>
  );
}
