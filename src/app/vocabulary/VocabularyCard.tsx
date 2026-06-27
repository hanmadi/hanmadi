"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Word } from "@/types/word";

interface Props {
  word: Word;
  onFavorite: (id: number) => void;
}

export default function VocabularyCard({
  word,
  onFavorite,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        bg-white
        rounded-[30px]
        border
        border-[#ECE9E2]
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      <div className="p-7 flex justify-between items-start">
        <button
          onClick={() => setOpen(!open)}
          className="flex-1 text-left"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-[30px] font-light text-[#2D2D2D]">
              {word.word}
            </h2>

            <span
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-[#EEF2E8]
                text-[#7A866D]
              "
            >
              {word.type}
            </span>

            <span
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-[#F7F5EF]
                text-[#9A8C62]
              "
            >
              {word.category}
            </span>
          </div>

          <p className="mt-3 text-[20px] text-[#555]">
            {word.meaning}
          </p>
        </button>

        <div className="flex items-center gap-4 ml-6">
          <button
            onClick={() => onFavorite(word.id)}
            className="transition hover:scale-110"
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
                  : "#A0A0A0"
              }
            />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="transition hover:scale-110"
          >
            {open ? (
              <ChevronUp
                size={22}
                className="text-[#7A866D]"
              />
            ) : (
              <ChevronDown
                size={22}
                className="text-[#7A866D]"
              />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="
            px-7
            pb-8
            space-y-6
            bg-[#FCFBF8]
            border-t
            border-[#F2EFE8]
          "
        >
          <Info
            titleKr="예문"
            titleCn="例句"
            value={word.example}
          />

          <Info
            titleKr="유의어"
            titleCn="同义词"
            value={word.synonym}
          />

          <Info
            titleKr="반의어"
            titleCn="反义词"
            value={word.antonym}
          />

          <Info
            titleKr="메모"
            titleCn="笔记"
            value={word.note}
          />
        </div>
      )}
    </div>
  );
}

function Info({
  titleKr,
  titleCn,
  value,
}: {
  titleKr: string;
  titleCn: string;
  value: string;
}) {
  return (
    <div className="border-t border-[#ECE9E2] pt-5">
      <div className="mb-2">
        <div className="text-[16px] font-medium text-[#2D2D2D]">
          {titleKr}
        </div>

        <div className="text-xs text-[#8A9382]">
          {titleCn}
        </div>
      </div>

      <div className="text-[16px] text-[#555] leading-7">
        {value || "-"}
      </div>
    </div>
  );
}