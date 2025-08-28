import CategoryTabs from "./category-tabs";
import FilterButton from "./filter-button";
import SwitchCurrency from "./switch-currency";

export default function DealActions() {
  return (
    <div className="border-BlueGray-200 flex-between w-full border-b">
      <CategoryTabs />
      <div className="flex items-center justify-end gap-3">
        <SwitchCurrency />
        <FilterButton />
      </div>
    </div>
  );
}
