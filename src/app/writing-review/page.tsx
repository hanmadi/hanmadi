import Link from "next/link";

export default function WritingReviewPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-12 py-12">

        <Link
          href="/"
          className="text-[#7A866D] hover:opacity-70 transition"
        >
          ← Home
        </Link>

        <div className="mt-20">
          <h1 className="text-[64px] font-light text-[#2D2D2D]">
            글쓰기 첨삭
          </h1>

          <p className="mt-3 text-[28px] text-[#7A866D]">
            Writing Review
          </p>
        </div>

      </div>
    </main>
  );
}