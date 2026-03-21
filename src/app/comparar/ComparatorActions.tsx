"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useComparator } from "@/hooks/useComparator";

export default function ComparatorActions() {
  const { clearAll } = useComparator();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNew = () => {
    clearAll();
    router.push("/");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className="px-3 py-1.5 rounded text-xs border border-border text-text-muted hover:border-accent hover:text-accent transition-colors"
      >
        {copied ? "Copiado ✓" : "Compartir"}
      </button>
      <button
        onClick={handleNew}
        className="px-3 py-1.5 rounded text-xs border border-border text-text-muted hover:border-red hover:text-red transition-colors"
      >
        Nueva comparación
      </button>
    </div>
  );
}
