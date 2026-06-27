"use client";

import { Plus } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function FloatingButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-10
      right-10
      w-16
      h-16
      rounded-full
      bg-[#7A866D]
      text-white
      shadow-xl
      flex
      items-center
      justify-center
      hover:scale-105
      transition
      z-50
      "
    >
      <Plus size={28} />
    </button>
  );
}