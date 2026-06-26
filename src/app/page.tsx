"use client";

import Link from "next/link";
import {
  Play,
  BookOpen,
  PencilLine,
  Mic,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] flex items-center justify-center">
      <div className="w-full max-w-6xl px-8 -mt-16">

        {/* Logo */}
        <div className="text-center mb-16">
          <h1
            className="
            text-[74px]
            font-medium
            tracking-[0.14em]
            text-[#7A866D]
            "
          >
            한마디
          </h1>

          <div
            className="
            w-24
            h-[4px]
            bg-[#97A687]
            mx-auto
            mt-4
            rounded-full
            "
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-8">

          <Link href="/video-learning">
            <Card
              icon={<Play size={44} strokeWidth={2.5} />}
              korean="영상 학습"
              english="Video Learning"
            />
          </Link>

          <Link href="/vocabulary">
            <Card
              icon={<BookOpen size={44} strokeWidth={2.5} />}
              korean="단어장"
              english="Vocabulary"
            />
          </Link>

          <Link href="/writing-review">
            <Card
              icon={<PencilLine size={44} strokeWidth={2.5} />}
              korean="글쓰기 첨삭"
              english="Writing Review"
            />
          </Link>

          <Link href="/speaking-practice">
            <Card
              icon={<Mic size={44} strokeWidth={2.5} />}
              korean="따라 말하기"
              english="Speaking Practice"
            />
          </Link>

        </div>

      </div>
    </main>
  );
}

function Card({
  icon,
  korean,
  english,
}: {
  icon: React.ReactNode;
  korean: string;
  english: string;
}) {
  return (
    <div
      className="
      relative
      bg-white
      border
      border-[#ECE9E2]
      rounded-[32px]
      px-8
      pt-8
      pb-8
      h-[240px]
      shadow-[0_2px_12px_rgba(0,0,0,0.03)]
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      hover:-translate-y-2
      transition-all
      duration-300
      cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className="
        w-[72px]
        h-[72px]
        rounded-full
        bg-[#EEF2E8]
        flex
        items-center
        justify-center
        text-[#6E7C62]
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div className="mt-8">
        <h2
          className="
          text-[24px]
          font-medium
          text-[#2D2D2D]
          leading-none
          "
        >
          {korean}
        </h2>

        <p
          className="
          mt-3
          text-[16px]
          font-medium
          text-[#8A9182]
          tracking-[0.01em]
          "
        >
          {english}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
        absolute
        right-7
        bottom-7
        w-11
        h-11
        rounded-full
        bg-[#F5F3ED]
        flex
        items-center
        justify-center
        text-[#7B876F]
        "
      >
        <ArrowRight size={18} />
      </div>
    </div>
  );
}