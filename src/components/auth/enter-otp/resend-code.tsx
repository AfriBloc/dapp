import { useState } from "react";
import { showToast } from "@/lib/toast";
import useTimeLeft from "@/hooks/use-time-left";

export default function ResendCode({ email }: { email: string }) {
  const { timeLeft, setTimeLeft, formatTime } = useTimeLeft(300);
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeResend = async () => {
    try {
      setIsLoading(true);
      setTimeLeft(300);
      showToast(`Resend otp to ${email}`);
      //   const res = await requestPasswordResetAction(email);
      //   if (!res.error) {
      //   } else {
      //     showToast(res.message, "error");
      //   }
    } catch {
      showToast("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-between w-full">
      <button
        type="button"
        disabled={timeLeft > 0 || isLoading}
        onClick={handleCodeResend}
        className="text-Gray-800 text-sm font-normal disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Resending..." : "Resend"}
      </button>
      <p className="text-Orange-500 font-medium">{formatTime(timeLeft)}</p>
    </div>
  );
}
