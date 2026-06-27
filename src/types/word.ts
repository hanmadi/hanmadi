export type WordType =
  | "명사"
  | "동사"
  | "형용사"
  | "부사"
  | "표현";

export type WordCategory =
  | "TOPIK1"
  | "TOPIK2"
  | "TOPIK3"
  | "TOPIK4"
  | "TOPIK5"
  | "TOPIK6"
  | "일상"
  | "여행"
  | "비즈니스"
  | "K-POP"
  | "드라마"
  | "기타";

export interface Word {
  id: number;
  word: string;
  meaning: string;
  type: WordType;
  category: WordCategory;
  favorite: boolean;
  example: string;
  synonym: string;
  antonym: string;
  note: string;
}