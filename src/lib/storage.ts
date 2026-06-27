import { Word } from "@/types/word";
import { defaultWords } from "@/data/defaultWords";

const STORAGE_KEY = "hanmadi_words";

export function getWords(): Word[] {
  if (typeof window === "undefined") {
    return defaultWords;
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultWords)
    );

    return defaultWords;
  }

  try {
    return JSON.parse(data) as Word[];
  } catch {
    return defaultWords;
  }
}

export function saveWords(words: Word[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(words)
  );
}

export function addWord(word: Word) {
  const words = getWords();

  saveWords([...words, word]);
}

export function updateWord(updated: Word) {
  const words = getWords().map((word) =>
    word.id === updated.id ? updated : word
  );

  saveWords(words);
}

export function deleteWord(id: number) {
  const words = getWords().filter(
    (word) => word.id !== id
  );

  saveWords(words);
}

export function toggleFavorite(id: number) {
  const words = getWords().map((word) =>
    word.id === id
      ? {
          ...word,
          favorite: !word.favorite,
        }
      : word
  );

  saveWords(words);
}