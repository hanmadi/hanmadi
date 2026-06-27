"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Word } from "@/types/word";

interface WordModalProps {
  open: boolean;
  initialValue?: Word | null;
  onClose: () => void;
  onSave: (word: Word) => void;
}

const emptyWord: Word = {
  id: 0,
  word: "",
  meaning: "",
  type: "명사",
  category: "TOPIK1",
  favorite: false,
  example: "",
  synonym: "",
  antonym: "",
  note: "",
};

export default function WordModal({
  open,
  initialValue,
  onClose,
  onSave,
}: WordModalProps) {
  const [form, setForm] = useState<Word>(emptyWord);

  useEffect(() => {
    if (initialValue) {
      setForm(initialValue);
    } else {
      setForm(emptyWord);
    }
  }, [initialValue, open]);

  if (!open) return null;
  const handleChange = (
    key: keyof Word,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    if (!form.word.trim()) return;
    if (!form.meaning.trim()) return;

    onSave(form);
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        flex items-center justify-center
        z-[999]
      "
    >
      <div
        className="
          w-[720px]
          max-w-[92vw]
          bg-white
          rounded-[32px]
          shadow-xl
          p-8
          relative
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-6
            right-6
            text-gray-400
            hover:text-gray-700
          "
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-light text-[#2D2D2D] mb-8">
          {initialValue ? "단어 수정" : "단어 추가"}
        </h2>

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="단어"
            value={form.word}
            onChange={(value) =>
              handleChange("word", value)
            }
          />

          <Input
            label="뜻"
            value={form.meaning}
            onChange={(value) =>
              handleChange("meaning", value)
            }
          />

          <Select
            label="품사"
            value={form.type}
            options={[
              "명사",
              "동사",
              "형용사",
              "부사",
              "표현",
            ]}
            onChange={(value) =>
              handleChange("type", value)
            }
          />

          <Select
            label="분류"
            value={form.category}
            options={[
              "TOPIK1",
              "TOPIK2",
              "TOPIK3",
              "TOPIK4",
              "TOPIK5",
              "TOPIK6",
              "일상",
              "여행",
              "비즈니스",
              "K-POP",
              "드라마",
              "기타",
            ]}
            onChange={(value) =>
              handleChange("category", value)
            }
          />

          <Input
            label="예문"
            value={form.example}
            onChange={(value) =>
              handleChange("example", value)
            }
          />

          <Input
            label="유의어"
            value={form.synonym}
            onChange={(value) =>
              handleChange("synonym", value)
            }
          />

          <Input
            label="반의어"
            value={form.antonym}
            onChange={(value) =>
              handleChange("antonym", value)
            }
          />

          <div className="col-span-2">
            <Input
              label="메모"
              value={form.note}
              onChange={(value) =>
                handleChange("note", value)
              }
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-3">
          <button
            onClick={onClose}
            className="
              px-5
              py-3
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
            onClick={handleSave}
            className="
              px-6
              py-3
              rounded-xl
              bg-[#7A866D]
              text-white
              hover:bg-[#68755D]
              transition
            "
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function Input({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-[#666]">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          border-[#E6E2DA]
          px-4
          py-3
          outline-none
          focus:border-[#7A866D]
          transition
        "
      />
     
    </div>
  );
}
 function Select({
        label,
        value,
        options,
        onChange,
}: {
        label: string;
      value: string;
      options: string[];
  onChange: (value: string) => void;
}) {
  return (
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">
          {label}
        </label>

        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
          w-full
          rounded-xl
          border
          border-[#E6E2DA]
          px-4
          py-3
          outline-none
          focus:border-[#7A866D]
          transition
        "
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      );
}