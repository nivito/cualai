"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function OpenClawFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-xs text-left hover:bg-bg-hover transition-colors"
          >
            <span className="font-semibold text-text">{faq.question}</span>
            <span className="text-text-muted ml-2">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-3 text-xs text-text-muted leading-relaxed border-t border-border pt-3">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
