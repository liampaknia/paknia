"use client";

import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    onSearch(debouncedInput.trim());
  }, [debouncedInput]);

  return (
    <div className="w-full mb-6">
      <input
        type="text"
        placeholder="جستجوی پست..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
