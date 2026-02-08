"use client";

import { useEffect, useState, useRef } from "react";
import { Balloon } from "./Balloon";
import { PROFILE_JA, PROFILE_EN } from "@/constants/profile";
import { useLanguageState } from "@/hooks/useLanguageState";

// 吹き出し表示間隔（750ms）
const INTERVAL_DELAY = 750;

/**
 * キャラクターのセリフを吹き出しで順次表示するコンポーネント
 * - 750ms間隔でフワッとしたアニメーションと共に吹き出しを表示
 * - 新しい吹き出しが表示されると自動的にスクロール（吹き出しの25px上）
 * - 左右交互に吹き出しを配置してチャット風の見た目を演出
 * - 言語切り替えに対応（JP/EN）
 */
export const DialogueArea = () => {
  const { language } = useLanguageState();
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null); // スクロールコンテナの参照
  const lastBalloonRef = useRef<HTMLDivElement>(null); // 最新の吹き出しの参照

  // 現在の言語に応じてデータを取得
  const currentProfile = language === "JA" ? PROFILE_JA : PROFILE_EN;

  // 750ms間隔で吹き出しを順次表示
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < currentProfile.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, INTERVAL_DELAY);

    return () => clearInterval(timer);
  }, [currentProfile.length]);

  // 言語が切り替わったときにリセット（key propでコンポーネントを再マウント）

  // 新しい吹き出しが表示されたとき、その吹き出しの30px上にスムーズスクロール
  useEffect(() => {
    if (visibleCount > 0 && lastBalloonRef.current && containerRef.current) {
      // フワッとしたアニメーションがある程度進行してからスクロール実行
      setTimeout(() => {
        if (lastBalloonRef.current && containerRef.current) {
          const balloonRect = lastBalloonRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const currentScrollTop = containerRef.current.scrollTop;

          // 吹き出しの位置から30px上にスクロール
          const targetScrollTop =
            currentScrollTop + balloonRect.top - containerRect.top - 30;

          containerRef.current.scrollTo({
            top: targetScrollTop,
            behavior: "smooth",
          });
        }
      }, 300); // アニメーション開始から300ms後に実行
    }
  }, [visibleCount]);

  return (
    <div
      key={language} // 言語変更時にコンポーネントをリマウントしてstateをリセット
      ref={containerRef}
      className="flex flex-col-reverse gap-6 overflow-y-scroll min-h-full px-6 pt-6 pb-[calc(100dvw+1rem)] md:pb-100 hide-scrollbar"
    >
      {currentProfile.slice(0, visibleCount).map((text, index) => (
        <div
          ref={index === visibleCount - 1 ? lastBalloonRef : null} // 最新の吹き出しに参照を設定
          className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-balloon-appear`}
          key={index}
        >
          <Balloon
            arrowPosition={index % 2 === 0 ? "bottom-right" : "bottom-left"} // 偶数は左寄せ+右下矢印、奇数は右寄せ+左下矢印
            className="max-w-11/12 font-semibold u-shadow-balloon"
          >
            {text}
          </Balloon>
        </div>
      ))}
    </div>
  );
};
