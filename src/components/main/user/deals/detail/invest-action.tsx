"use client";
import { Minus, Plus } from "lucide-react";
import WalletIcon from "/public/svgs/wallet.svg";
import Image from "next/image";
import BaseButton from "@/components/ui/buttons/base-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PropertyTypes } from "@/types/property";

export default function InvestAction({
  property,
}: {
  property: PropertyTypes;
}) {
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
          <div className="border-Gray-25 flex h-9 w-full items-center overflow-hidden rounded-lg border md:h-14">
            <button
              type="button"
              className="bg-Gray-25 flex-center size-9 border md:size-14"
            >
              <Minus className="size-5" />
            </button>
            <input
              type="number"
              inputMode="numeric"
              defaultValue={1}
              className="text-Heading h-full flex-1 text-center text-lg font-semibold outline-none"
            />
            <button
              type="button"
              className="bg-Gray-25 flex-center size-9 border md:size-14"
            >
              <Plus className="size-5" />
            </button>
          </div>
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
                  Balance:{" "}
                  <span className="text-Gray-900 text-sm">
                    {property.listingPrice}
                  </span>
                </span>
                <RadioGroupItem value="wallet" id="wallet" className="" />
              </div>
            </div>
          </RadioGroup>
        </div>
        <BaseButton className="mt-5 w-full !py-4">Make Payment</BaseButton>
      </div>
    </div>
  );
}
