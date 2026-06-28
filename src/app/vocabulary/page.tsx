"use client";

import { useState } from "react";
import Link from "next/link";
import { useWords } from "@/hooks/useWords";
import SearchBar from "@/app/components/SearchBar";
import VocabularyCard from "@/app/components/VocabularyCard";

export default function VocabularyPage() {
  const {
    words,
    toggleFavorite,
  } = useWords();

  const [search, setSearch] = useState("");

  const filteredWords = words.filter((word) => {
    return (
      word.word.includes(search) ||
      word.meaning.includes(search)
    );
  });

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <div className="max-w-5xl mx-auto px-8 py-20">

        <Link
          href="/"
          className="text-[#7A866D] hover:opacity-70"
        >
          ← Home
        </Link>

        <h1 className="text-6xl font-light mt-8">
          단어장
        </h1>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-10">

          <p className="text-gray-500 mb-6">
            共 {filteredWords.length} 个单词
          </p>

          <div className="space-y-5">

            {filteredWords.map((word) => (
              <VocabularyCard
                key={word.id}
                word={word}
                onToggleFavorite={toggleFavorite}
              />
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}