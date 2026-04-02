import { useEffect, useState } from "react";
import { searchProduct } from "../Api/product";

export default function useSearch() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {

    if (!query) {
      setSuggestions([]);
      return;
    }

    const delay = setTimeout(async () => {

      if (query.length < 2) return;

      const res = await searchProduct(query);
      setSuggestions(res);

    }, 400);

    return () => clearTimeout(delay);

  }, [query]);

  const handleKeyDown = (e) => {

    if (e.key === "ArrowDown") {
      setActiveIndex(prev =>
        Math.min(prev + 1, suggestions.length - 1)
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex(prev =>
        Math.max(prev - 1, 0)
      );
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(suggestions[activeIndex].name);
      setSuggestions([]);
    }
  };

  return {
    query,
    setQuery,
    suggestions,
    setSuggestions,
    activeIndex,
    handleKeyDown
  };
}