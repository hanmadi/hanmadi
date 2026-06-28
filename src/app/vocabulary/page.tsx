"use client";

import { useState } from "react";
import Link from "next/link";

import { useWords } from "@/hooks/useWords";

import SearchBar from "@/app/components/SearchBar";
import VocabularyCard from "@/app/components/VocabularyCard";
import WordModal from "@/app/components/WordModal";
import FloatingButton from "@/app/components/FloatingButton";

import { Word } from "@/types/word";

export default function VocabularyPage() {
  const {
    words,
    addWord,
    toggleFavorite,
  } = useWords();

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const filteredWords = words.filter((word) => {
    return (
      word.word.includes(search) ||
      word.meaning.includes(search)
    );
  });

  const handleAddWord = (word: Word) => {
    addWord({
      ...word,
      id: Date.now(),
    });
  };

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

      <WordModal
        open={modalOpen}
        initialValue={null}
        onClose={() => setModalOpen(false)}
        onSave={handleAddWord}
      />

      <FloatingButton
        onClick={() => setModalOpen(true)}
      />

    </main>
  );
}