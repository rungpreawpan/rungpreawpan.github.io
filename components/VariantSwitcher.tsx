"use client";

import { variants, type VariantKey } from "@/data/variants";

export function VariantSwitcher({
  current,
  onChange,
}: {
  current: VariantKey;
  onChange: (k: VariantKey) => void;
}) {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-white/85 p-1.5 shadow-lg backdrop-blur-xl">
        {(Object.keys(variants) as VariantKey[]).map((k) => {
          const v = variants[k];
          const on = k === current;
          return (
            <button
              key={k}
              onClick={() => onChange(k)}
              aria-pressed={on}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                on
                  ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: v.swatch }}
              />
              <span className="hidden sm:inline">{v.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
