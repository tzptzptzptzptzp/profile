"use client";

import { useEffect, useState } from "react";
import { Balloon } from "./Balloon";

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
];

const INTERVAL_DELAY = 250;

export const DialogueArea = () => {
  const [visibleCount, setVisibleCount] = useState(0);

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

  return (
    <div className="flex flex-col-reverse gap-6 overflow-y-scroll min-h-full px-6 pt-4 pb-[100dvw] md:pb-100 hide-scrollbar">
      {mock.slice(0, visibleCount).map((text, index) => (
        <div
          className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-balloon-appear`}
          key={index}
          style={{
            animationDelay: `${index * INTERVAL_DELAY}ms`,
          }}
        >
          <Balloon
            arrowPosition={index % 2 === 0 ? "bottom-right" : "bottom-left"}
            className="max-w-11/12"
          >
            {text}
          </Balloon>
        </div>
      ))}
    </div>
  );
};
