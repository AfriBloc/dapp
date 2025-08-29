import EmptyState from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

export default function TransactionHistory() {
  const data = [];
  return (
    <div
      className={cn(
        "col-start text-Gray-900 w-full gap-1 rounded-xl p-5",
        data.length === 0
          ? "bg-white shadow-[0px_4px_20px_0px_#0000000D]"
          : "bg-BlueGray-25",
      )}
    >
      <h3 className="text-lg font-semibold">Transaction history</h3>

      <div className="w-full">
        {data.length === 0 ? (
          <EmptyState
            title="No transactions yet"
            description="All transactions will appear here"
            className="min-h-[400px]"
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
