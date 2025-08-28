import Image from "next/image";
import IDCard from "/public/svgs/id-card.svg";

export default function KycStatInfo() {
  return (
    <div className="bg-Purple-25 text-Gray-900 flex w-full items-start gap-3 rounded-2xl px-4 py-4 lg:px-8">
      <div className="flex-center bg-Purple-100 size-9 rounded-full md:size-12">
        <Image src={IDCard} alt="Kyc Card" />
      </div>
      <div className="flex max-w-[80%] flex-col justify-between gap-4 md:gap-0 md:max-w-full md:flex-grow md:flex-row md:items-center">
        <div className="col-start">
          <h3 className="text-base font-semibold md:text-lg">
            Verify your account
          </h3>
          <p className="text-Gray-800 text-sm font-normal">
            Get started by verifying your profile to start investing in Africa’s
            top properties{" "}
          </p>
        </div>
        <button className="text-Purple-500 text-start text-sm font-semibold underline lg:text-base whitespace-nowrap">
          Start verification
        </button>
      </div>
    </div>
  );
}
