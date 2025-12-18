import React from "react";

export const SearchBar = ({
  value,
  onChange
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <input
    className="search-bar"
    placeholder="Search articles..."
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
