"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Word } from "@/types/word";

interface VocabularyCardProps {
  word: Word;
  onToggleFavorite: (id: number) => void;
}

interface SectionProps {
  titleKr: string;
  titleCn: string;
  content: string;
}

function Section({
  titleKr,
  titleCn,
  content,
}: SectionProps) {
  return (
    <div className="mt-6 pt-6 border-t border-[#F1EFE9]">
      <div className="mb-4">
        <div className="text-[18px] font-semibold text-[#2D2D2D]">
          {titleKr}
        </div>

        <div className="text-[13px] text-[#8A9382] mt-1">
          {titleCn}
        </div>
      </div>

      <div className="text-[17px] leading-8 text-[#4B4B4B]">
        {content}
      </div>
    </div>
  );
}

export default function VocabularyCard({
  word,
  onToggleFavorite,
}: VocabularyCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[30px] border border-[#ECE9E2] shadow-sm overflow-hidden transition hover:shadow-md">
      <div className="p-7 flex justify-between items-start">
        <button
          onClick={() => setOpen(!open)}
          className="flex-1 text-left"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-light text-[#2D2D2D]">
              {word.word}
            </h2>

            <span className="px-3 py-1 rounded-full text-xs bg-[#EEF2E8] text-[#7A866D]">
              {word.type}
            </span>
          </div>

          <p className="mt-2 text-[20px] text-[#555]">
            {word.meaning}
          </p>
        </button>

        <div className="flex items-center gap-4 ml-4">
          <button
            onClick={() => onToggleFavorite(word.id)}
            className="transition hover:scale-110"
          >
            <Star
              size={20}
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
        <div className="px-7 pb-8">
          <Section
            titleKr="예문"
            titleCn="例句"
            content={word.example}
          />

          <Section
            titleKr="유의어"
            titleCn="同义词"
            content={word.synonym}
          />

          <Section
            titleKr="반의어"
            titleCn="反义词"
            content={word.antonym}
          />

          <Section
            titleKr="메모"
            titleCn="笔记"
            content={word.note}
          />
        </div>
      )}
    </div>
  );
}