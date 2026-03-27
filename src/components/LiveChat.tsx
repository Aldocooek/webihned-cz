"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  from: "agent" | "user";
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Ahoj! 👋 Jak vám můžeme pomoci? Odpovíme do 5 minut.",
    from: "agent",
  },
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [replied, setReplied] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), text, from: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    if (!replied) {
      setTimeout(() => {
        const replyMsg: Message = {
          id: Date.now() + 1,
          text: "Děkujeme za zprávu! Ozveme se vám brzy.",
          from: "agent",
        };
        setMessages((prev) => [...prev, replyMsg]);
        setReplied(true);
      }, 800);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      {/* Chat window */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Live chat — Potřebujete pomoc?"
        aria-hidden={!open}
        className={[
          "fixed z-[45]",
          "bottom-24 right-6",
          "w-[calc(100vw-48px)] sm:w-80",
          "max-h-[400px] h-[400px]",
          "bg-surface border border-border rounded-2xl shadow-xl",
          "flex flex-col overflow-hidden",
          "origin-bottom-right",
          "transition-all duration-300",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-accent text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-sm font-semibold tracking-[-0.01em]">
              Potřebujete pomoc?
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Zavřít chat"
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={[
                  "max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed tracking-[-0.01em]",
                  msg.from === "agent"
                    ? "bg-border/30 text-text rounded-tl-sm"
                    : "bg-accent text-white rounded-tr-sm",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 border-t border-border flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Napište zprávu..."
            aria-label="Napište zprávu"
            tabIndex={open ? 0 : -1}
            className="flex-1 min-w-0 text-sm px-3 py-2 rounded-full border border-border bg-bg text-text placeholder:text-text-secondary/50 tracking-[-0.01em] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors duration-200"
          />
          <button
            onClick={handleSend}
            aria-label="Odeslat zprávu"
            tabIndex={open ? 0 : -1}
            className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/90 transition-colors duration-200 flex-shrink-0"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22 11 13 2 9l20-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Zavřít chat" : "Otevřít live chat"}
        aria-expanded={open}
        className={[
          "fixed bottom-6 right-20 z-[45]",
          "w-12 h-12 rounded-full",
          "bg-accent text-white",
          "flex items-center justify-center",
          "shadow-lg hover:shadow-xl",
          "hover:scale-110 active:scale-95",
          "transition-all duration-300",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
