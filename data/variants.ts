// ดีไซน์ 3 แบบบนโครง sidebar เดียวกัน — สลับได้จากปุ่มล่างจอ หรือ /?v=indigo|navy|sunset
// เลือกแบบที่ชอบแล้ว บอกได้เลย เดี๋ยวตั้งเป็นค่า default ให้

export type VariantKey = "indigo" | "navy" | "sunset";

export type Variant = {
  key: VariantKey;
  label: string;
  swatch: string; // สีจุดบนปุ่มสลับ
  vars: Record<string, string>;
};

export const variants: Record<VariantKey, Variant> = {
  // 1) Indigo Clean — sidebar ขาว accent ม่วง→ฟ้า (แบบปัจจุบัน)
  indigo: {
    key: "indigo",
    label: "Indigo Clean",
    swatch: "#4f46e5",
    vars: {
      "--bg": "#f5f6f8",
      "--surface": "#ffffff",
      "--text": "#0f172a",
      "--text-muted": "#64748b",
      "--border": "#e6e8ec",
      "--accent": "#4f46e5",
      "--accent-2": "#06b6d4",
      "--accent-soft": "#eef2ff",
      // sidebar
      "--sb-bg": "#ffffff",
      "--sb-text": "#0f172a",
      "--sb-muted": "#64748b",
      "--sb-border": "#e6e8ec",
      "--sb-soft": "#eef2ff",
      "--sb-accent": "#4f46e5",
    },
  },

  // 2) Navy Contrast — sidebar น้ำเงินเข้ม ตัวหนังสือขาว เนื้อหาสว่าง ดูทางการ
  navy: {
    key: "navy",
    label: "Navy Contrast",
    swatch: "#0f172a",
    vars: {
      "--bg": "#f8fafc",
      "--surface": "#ffffff",
      "--text": "#0f172a",
      "--text-muted": "#64748b",
      "--border": "#e2e8f0",
      "--accent": "#2563eb",
      "--accent-2": "#38bdf8",
      "--accent-soft": "#eff6ff",
      // sidebar
      "--sb-bg": "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      "--sb-text": "#f1f5f9",
      "--sb-muted": "#94a3b8",
      "--sb-border": "rgba(255,255,255,0.12)",
      "--sb-soft": "rgba(56,189,248,0.15)",
      "--sb-accent": "#7dd3fc",
    },
  },

  // 3) Sunset Warm — โทนอุ่น ครีม accent ส้ม→ชมพู ดูเป็นมิตร มีเอกลักษณ์
  sunset: {
    key: "sunset",
    label: "Sunset Warm",
    swatch: "#ea580c",
    vars: {
      "--bg": "#fdf9f4",
      "--surface": "#ffffff",
      "--text": "#292524",
      "--text-muted": "#78716c",
      "--border": "#ede4d8",
      "--accent": "#ea580c",
      "--accent-2": "#e11d48",
      "--accent-soft": "#ffedd5",
      // sidebar
      "--sb-bg": "linear-gradient(180deg, #fff7ed 0%, #ffe8e0 100%)",
      "--sb-text": "#292524",
      "--sb-muted": "#8c8177",
      "--sb-border": "#f3e5d8",
      "--sb-soft": "#ffe3cd",
      "--sb-accent": "#ea580c",
    },
  },
};

export function resolveVariant(v?: string | null): Variant {
  if (v && v in variants) return variants[v as VariantKey];
  return variants.indigo;
}
