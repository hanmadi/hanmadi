"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, Star } from "lucide-react";

const initialWords = [
  {
    id: 1,
    word: "안녕하세요",
    meaning: "你好；您好",
    type: "표현",
    favorite: true,
    example: "오늘 처음 뵙겠습니다. 안녕하세요.",
    synonym: "안녕하십니까",
    antonym: "-",
    note: "正式场合也可以使用。",
  },
  {
    id: 2,
    word: "크다",
    meaning: "大",
    type: "형용사",
    favorite: false,
    example: "집이 정말 크네요.",
    synonym: "거대하다, 커다랗다",
    antonym: "작다",
    note: "经常用于描述空间大小。",
  },
  {
    id: 3,
    word: "배우다",
    meaning: "学习",
    type: "동사",
    favorite: true,
    example: "저는 한국어를 배우고 있어요.",
    synonym: "익히다",
    antonym: "-",
    note: "常与 언어、기술 搭配。",
  },
  {
    id: 4,
    word: "학생",
    meaning: "学生",
    type: "명사",
    favorite: false,
    example: "저는 대학생입니다.",
    synonym: "학습자",
    antonym: "-",
    note: "最基础的韩语名词之一。",
  },
  {
    id: 5,
    word: "천천히",
    meaning: "慢慢地",
    type: "부사",
    favorite: false,
    example: "천천히 말씀해 주세요.",
    synonym: "느리게",
    antonym: "빨리",
    note: "口语出现频率很高。",
  },
];

export default function VocabularyPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("전체");
  const [words, setWords] = useState(initialWords);

  const filters = ["전체", "⭐", "명사", "동사", "형용사", "부사", "표현"];

  const toggleFavorite = (id: number) => {
    setWords((prev) =>
      prev.map((word) =>
        word.id === id ? { ...word, favorite: !word.favorite } : word
      )
    );
  };

  const filteredWords = words.filter((word) => {
    const matchesSearch =
      word.word.includes(search) || word.meaning.includes(search);

    const matchesFilter =
      filter === "전체"
        ? true
        : filter === "⭐"
        ? word.favorite
        : word.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <Link href="/" className="text-lg font-medium text-[#7A866D] hover:opacity-70">
          ← Home
        </Link>

        <h1 className="text-6xl font-light mt-8 text-[#2D2D2D]">단어장</h1>

        <div className="relative mt-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search vocabulary..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-2xl border border-[#E6E2DA] bg-white outline-none"
          />
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === item
                  ? "bg-[#7A866D] text-white"
                  : "bg-white border border-[#E6E2DA] text-[#666]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {filteredWords.map((word) => (
            <VocabularyCard
              key={word.id}
              word={word}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function VocabularyCard({ word, toggleFavorite }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[30px] border border-[#ECE9E2] shadow-sm overflow-hidden">
      <div className="p-7 flex justify-between items-start">
        <button onClick={() => setOpen(!open)} className="flex-1 text-left">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-light text-[#2D2D2D]">
              {word.word}
            </h2>

            <span className="px-3 py-1 rounded-full text-xs bg-[#EEF2E8] text-[#7A866D]">
              {word.type}
            </span>
          </div>

          <p className="mt-2 text-[20px] text-[#555]">{word.meaning}</p>
        </button>

        <div className="flex items-center gap-4">
          <button onClick={() => toggleFavorite(word.id)}>
            <Star
              size={20}
              fill={word.favorite ? "#D8B25C" : "transparent"}
              color={word.favorite ? "#D8B25C" : "#A0A0A0"}
            />
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <ChevronUp size={22} className="text-[#7A866D]" />
            ) : (
              <ChevronDown size={22} className="text-[#7A866D]" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="px-7 pb-8">
          <Section titleKr="예문" titleCn="例句" content={word.example} />
          <Section titleKr="유의어" titleCn="同义词" content={word.synonym} />
          <Section titleKr="반의어" titleCn="反义词" content={word.antonym} />
          <Section titleKr="메모" titleCn="笔记" content={word.note} />
        </div>
      )}
    </div>
  );
}

function Section({ titleKr, titleCn, content }: any) {
  return (
    <div className="mt-6 pt-6 border-t border-[#F1EFE9]">
      <div className="mb-4">
        <div className="text-[18px] font-semibold text-[#2D2D2D]">
          {titleKr}
        </div>

        <div className="text-[13px] text-[#8A9382] mt-1">{titleCn}</div>
      </div>

      <div className="text-[17px] text-[#4B4B4B] leading-8">{content}</div>
    </div>
  );
}
