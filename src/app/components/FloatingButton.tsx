"use client";

import { Plus } from "lucide-react";

interface FloatingButtonProps {
  onClick: () => void;
}

export default function FloatingButton({
  onClick,
}: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Add Word"
      className="
        fixed
        bottom-8
        right-8
        w-16
        h-16
        rounded-full
        bg-[#7A866D]
        text-white
        shadow-lg
        hover:scale-105
        hover:bg-[#6A775E]
        active:scale-95
        transition-all
        duration-200
        flex
        items-center
        justify-center
        z-50
      "
    >
      <Plus size={28} strokeWidth={2.5} />
    </button>
  );
}