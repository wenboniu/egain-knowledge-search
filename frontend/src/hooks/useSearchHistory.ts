import { useState } from "react";

export function useSearchHistory(limit = 5) {
  const [history, setHistory] = useState<string[]>([]);

  const add = (query: string) => {
    setHistory(prev =>
      [query, ...prev.filter(q => q !== query)].slice(0, limit)
    );
  };

  return { history, add };
}
