"use client";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "단어가 없습니다",
  description = "오른쪽 아래 + 버튼을 눌러 첫 번째 단어를 추가해 보세요.",
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-28
        text-center
      "
    >
      <div
        className="
          w-24
          h-24
          rounded-full
          bg-[#EEF2E8]
          flex
          items-center
          justify-center
          text-5xl
        "
      >
        📖
      </div>

      <h2
        className="
          mt-8
          text-3xl
          font-light
          text-[#2D2D2D]
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-[#777]
          leading-7
        "
      >
        {description}
      </p>
    </div>
  );
}