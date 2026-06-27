"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative mt-10">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search vocabulary..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          pl-11
          pr-4
          py-4
          rounded-2xl
          border
          border-[#E6E2DA]
          bg-white
          outline-none
          focus:border-[#7A866D]
          transition
        "
      />
    </div>
  );
}