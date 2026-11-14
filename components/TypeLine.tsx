"use client";

import { useEffect, useState } from "react";

// Types the text out once after the intro loader, then leaves a blinking caret.
export default function TypeLine({ text, delay = 1300, speed = 55 }: { text: string; delay?: number; speed?: number }) {
  const [shown, setShown] = useState(text.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);
    let i = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= text.length && timer) clearInterval(timer);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
    };
  }, [text, delay, speed]);

  return (
    <span className="type" aria-label={text}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
