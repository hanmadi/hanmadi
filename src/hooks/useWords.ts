import { useEffect, useState } from "react";
import { Word } from "@/types/word";
import {
  getWords,
  saveWords,
} from "@/lib/storage";

export function useWords() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    setWords(getWords());
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      saveWords(words);
    }
  }, [words]);

  function toggleFavorite(id: number) {
    setWords((prev) =>
      prev.map((word) =>
        word.id === id
          ? {
              ...word,
              favorite: !word.favorite,
            }
          : word
      )
    );
  }

  function addWord(word: Word) {
    setWords((prev) => [...prev, word]);
  }

  function updateWord(updatedWord: Word) {
    setWords((prev) =>
      prev.map((word) =>
        word.id === updatedWord.id
          ? updatedWord
          : word
      )
    );
  }

  function deleteWord(id: number) {
    setWords((prev) =>
      prev.filter((word) => word.id !== id)
    );
  }

  return {
    words,
    setWords,
    addWord,
    updateWord,
    deleteWord,
    toggleFavorite,
  };
}