import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VideoLearningPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-8 py-12">

        <Link
          href="/"
          className="
          inline-flex
          items-center
          gap-2
          text-[#7A866D]
          hover:opacity-70
          transition
          "
        >
          <ArrowLeft size={18} />
          Home
        </Link>

        <div className="mt-20">
          <h1
            className="
            text-[54px]
            font-medium
            text-[#2D2D2D]
            "
          >
            영상 학습
          </h1>

          <p
            className="
            mt-2
            text-[22px]
            text-[#7A866D]
            "
          >
            Video Learning
          </p>
        </div>

      </div>
    </main>
  );
}