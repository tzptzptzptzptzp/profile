import { useState, useCallback } from "react";

export type Language = "JA" | "EN";

// グローバルな状態とリスナーを管理
let globalLanguage: Language = "JA";
const listeners: Set<(language: Language) => void> = new Set();

const setGlobalLanguage = (newLanguage: Language) => {
  globalLanguage = newLanguage;
  listeners.forEach((listener) => listener(newLanguage));
};

/**
 * 言語切り替え機能を提供するカスタムフック
 * 複数のコンポーネントで同じ言語状態を共有
 */
export const useLanguageState = () => {
  const [language, setLanguage] = useState<Language>(globalLanguage);

  // リスナーの登録/解除
  const updateLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

  // マウント時にリスナー追加、アンマウント時に削除
  useState(() => {
    listeners.add(updateLanguage);
    return () => {
      listeners.delete(updateLanguage);
    };
  });

  const toggleLanguage = useCallback(() => {
    const newLanguage = globalLanguage === "JA" ? "EN" : "JA";
    setGlobalLanguage(newLanguage);
  }, []);

  return {
    language,
    toggleLanguage,
  };
};
