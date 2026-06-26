"use client";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  open,
  title = "삭제",
  message,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/30
        flex items-center justify-center
        z-[100]
      "
    >
      <div
        className="
          bg-white
          rounded-[28px]
          w-[420px]
          max-w-[90vw]
          p-8
          shadow-xl
        "
      >
        <h2 className="text-2xl font-medium text-[#2D2D2D]">
          {title}
        </h2>

        <p className="mt-5 text-[#666] leading-7">
          {message}
        </p>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onCancel}
            className="
              px-5
              py-2.5
              rounded-xl
              border
              border-[#E5E1D8]
              hover:bg-[#F8F7F3]
              transition
            "
          >
            취소
          </button>

          <button
            onClick={onConfirm}
            className="
              px-5
              py-2.5
              rounded-xl
              bg-red-500
              text-white
              hover:bg-red-600
              transition
            "
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}