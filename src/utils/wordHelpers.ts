import { Word } from "@/types/word";

export const FILTERS = [
  "전체",
  "⭐",
  "명사",
  "동사",
  "형용사",
  "부사",
  "표현",
] as const;

export type FilterType = (typeof FILTERS)[number];

export function filterWords(
  words: Word[],
  search: string,
  filter: FilterType
): Word[] {
  const keyword = search.trim().toLowerCase();

  return words.filter((word) => {
    const matchesSearch =
      keyword === "" ||
      word.word.toLowerCase().includes(keyword) ||
      word.meaning.toLowerCase().includes(keyword);

    const matchesFilter =
      filter === "전체"
        ? true
        : filter === "⭐"
        ? word.favorite
        : word.type === filter;

    return matchesSearch && matchesFilter;
  });
}

export function sortWords(words: Word[]): Word[] {
  return [...words].sort((a, b) =>
    a.word.localeCompare(b.word, "ko")
  );
}

export function getNextId(words: Word[]): number {
  if (words.length === 0) return 1;

  return Math.max(...words.map((w) => w.id)) + 1;
}

export function randomWord(words: Word[]): Word | null {
  if (words.length === 0) return null;

  return words[Math.floor(Math.random() * words.length)];
}