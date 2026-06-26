export interface Word {
  id: number;
  word: string;
  meaning: string;
  type: "명사" | "동사" | "형용사" | "부사" | "표현";
  favorite: boolean;
  example: string;
  synonym: string;
  antonym: string;
  note: string;
}