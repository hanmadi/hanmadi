"use client";

import { useState } from "react";
import { RotateCcw, Star } from "lucide-react";
import { Word } from "@/types/word";

interface StudyCardProps {
  word: Word;
  onToggleFavorite: (id: number) => void;
}

export default function StudyCard({
  word,
  onToggleFavorite,
}: StudyCardProps) {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <div
      className="
        bg-white
        rounded-[32px]
        border
        border-[#ECE9E2]
        shadow-sm
        p-10
        max-w-2xl
        mx-auto
      "
    >
      <div className="flex justify-between items-center">
        <span
          className="
            px-3
            py-1
            rounded-full
            bg-[#EEF2E8]
            text-[#7A866D]
            text-sm
          "
        >
          {word.type}
        </span>

        <button
          onClick={() => onToggleFavorite(word.id)}
          className="hover:scale-110 transition"
        >
          <Star
            size={22}
            fill={
              word.favorite
                ? "#D8B25C"
                : "transparent"
            }
            color={
              word.favorite
                ? "#D8B25C"
                : "#B3B3B3"
            }
          />
        </button>
      </div>

      <div
        onClick={() =>
          setShowMeaning(!showMeaning)
        }
        className="
          cursor-pointer
          text-center
          py-20
          select-none
        "
      >
        <h2
          className="
            text-5xl
            font-light
            text-[#2D2D2D]
          "
        >
          {showMeaning
            ? word.meaning
            : word.word}
        </h2>

        <p
          className="
            mt-8
            text-[#999]
          "
        >
          클릭해서 뒤집기
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setShowMeaning(false)
          }
          className="
            flex
            items-center
            gap-2
            text-[#7A866D]
            hover:opacity-70
          "
        >
          <RotateCcw size={18} />
          다시 보기
        </button>
      </div>
    </div>
  );
}