import { ChevronDown, Settings2 } from "lucide-react";

export default function FilterButton() {
  return (
    <button className="text-Gray-900 flex shrink-0 items-center gap-2">
      <Settings2 className="size-5" />
      <span className="text-sm font-medium">Filter</span>
      <ChevronDown className="size-5" />
    </button>
  );
}
