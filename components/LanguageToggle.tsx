"use client";

import { cn } from "@/lib/utils";
import { useLanguageState } from "@/hooks/useLanguageState";

/**
 * 言語切り替えトグルボタンコンポーネント
 * JP ↔ EN の切り替えが可能
 */
export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguageState();
  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "relative w-15 h-8 rounded-full",
        "bg-white hover:bg-gray-200 opacity-100 md:opacity-75 hover:opacity-100 transition-all duration-200",
      )}
    >
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-main/80 rounded-full transition-transform duration-200",
          "flex items-center justify-center text-xs font-semibold text-white",
          language === "JA" ? "left-0.5" : "right-0.5",
        )}
      >
        {language}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-gray-400">
        <span className={cn(language === "JA" ? "opacity-0" : "opacity-100")}>
          JP
        </span>
        <span className={cn(language === "EN" ? "opacity-0" : "opacity-100")}>
          EN
        </span>
      </div>
    </button>
  );
};
