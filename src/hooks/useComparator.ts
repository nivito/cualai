"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "cualai_compare";
const MAX_TOOLS = 4;

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStorage(slugs: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new Event("cualai_compare_change"));
}

export function useComparator() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setSelected(readStorage());

    const handler = () => setSelected(readStorage());
    window.addEventListener("cualai_compare_change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("cualai_compare_change", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const addTool = useCallback((slug: string) => {
    const current = readStorage();
    if (current.includes(slug) || current.length >= MAX_TOOLS) return;
    const next = [...current, slug];
    writeStorage(next);
    setSelected(next);
  }, []);

  const removeTool = useCallback((slug: string) => {
    const current = readStorage();
    const next = current.filter((s) => s !== slug);
    writeStorage(next);
    setSelected(next);
  }, []);

  const clearAll = useCallback(() => {
    writeStorage([]);
    setSelected([]);
  }, []);

  const isSelected = useCallback(
    (slug: string) => selected.includes(slug),
    [selected]
  );

  const isFull = selected.length >= MAX_TOOLS;

  return { selected, addTool, removeTool, clearAll, isSelected, isFull };
}
