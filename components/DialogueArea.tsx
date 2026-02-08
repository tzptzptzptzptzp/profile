"use client";

import { useEffect, useState, useRef } from "react";
import { Balloon } from "./Balloon";

// キャラクターのセリフデータ
const mock = [
  '"Hello, world!"',
  '"This is a sample profile page."',
  '"Feel free to explore more!"',
  '"Have a great day!"',
  '"Stay safe and healthy!"',
  '"Keep learning and growing!"',
  '"Enjoy every moment!"',
  '"Believe in yourself!"',
  '"Keep pushing forward!"',
  '"You are amazing!You are amazing!You are amazing!"',
  '"Have a great day!"',
  '"Stay safe and healthy!"',
  '"Keep learning and growing!"',
  '"Enjoy every moment!"',
  '"Believe in yourself!"',
  '"Keep pushing forward!"',
  '"You are amazing!You are amazing!You are amazing!"',
];

// 吹き出し表示間隔（750ms）
const INTERVAL_DELAY = 750;

/**
 * キャラクターのセリフを吹き出しで順次表示するコンポーネント
 * - 750ms間隔でフワッとしたアニメーションと共に吹き出しを表示
 * - 新しい吹き出しが表示されると自動的にスクロール（吹き出しの25px上）
 * - 左右交互に吹き出しを配置してチャット風の見た目を演出
 */
export const DialogueArea = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null); // スクロールコンテナの参照
  const lastBalloonRef = useRef<HTMLDivElement>(null); // 最新の吹き出しの参照

  // 750ms間隔で吹き出しを順次表示
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < mock.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, INTERVAL_DELAY);

    return () => clearInterval(timer);
  }, []);

  // 新しい吹き出しが表示されたとき、その吹き出しの25px上にスムーズスクロール
  useEffect(() => {
    if (visibleCount > 0 && lastBalloonRef.current && containerRef.current) {
      // フワッとしたアニメーションがある程度進行してからスクロール実行
      setTimeout(() => {
        if (lastBalloonRef.current && containerRef.current) {
          const balloonRect = lastBalloonRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const currentScrollTop = containerRef.current.scrollTop;

          // 吹き出しの位置から25px上にスクロール
          const targetScrollTop =
            currentScrollTop + balloonRect.top - containerRect.top - 25;

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
      ref={containerRef}
      className="flex flex-col-reverse gap-6 overflow-y-scroll min-h-full px-6 pt-4 pb-[100dvw] md:pb-100 hide-scrollbar"
    >
      {mock.slice(0, visibleCount).map((text, index) => (
        <div
          ref={index === visibleCount - 1 ? lastBalloonRef : null} // 最新の吹き出しに参照を設定
          className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-balloon-appear`}
          key={index}
        >
          <Balloon
            arrowPosition={index % 2 === 0 ? "bottom-right" : "bottom-left"} // 偶数は左寄せ+右下矢印、奇数は右寄せ+左下矢印
            className="max-w-11/12 u-shadow-balloon"
          >
            {text}
          </Balloon>
        </div>
      ))}
    </div>
  );
};
