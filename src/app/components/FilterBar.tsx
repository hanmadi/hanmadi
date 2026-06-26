"use client";

interface FilterBarProps {
  filters: string[];
  current: string;
  onChange: (value: string) => void;
}

export default function FilterBar({
  filters,
  current,
  onChange,
}: FilterBarProps) {
  return (
    <div className="flex gap-3 mt-6 flex-wrap">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-200

            ${
              current === item
                ? "bg-[#7A866D] text-white shadow-sm"
                : "bg-white border border-[#E6E2DA] text-[#666] hover:bg-[#F5F4F0]"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}