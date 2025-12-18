import { useEffect, useState } from "react";
import { searchArticles } from "./api/searchApi";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { ArticleDetail } from "./components/ArticleDetail";
import { useDebounce } from "./hooks/useDebounce";
import { useSearchHistory } from "./hooks/useSearchHistory";
import { Article } from "./types/Article";

export default function App() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query);
  const [results, setResults] = useState<Article[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { history, add } = useSearchHistory();

  useEffect(() => {
    if (!debounced) return;
    setLoading(true);
    setError(null);

    searchArticles(debounced)
      .then(r => {
        setResults(r);
        add(debounced);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [debounced]);

  return (
    <div className="container">
      <SearchBar value={query} onChange={setQuery} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <SearchResults articles={results} onSelect={setSelected} />
      {selected && (
        <ArticleDetail article={selected} onClose={() => setSelected(null)} />
      )}
      <div className="history">
        <h4>Recent Searches</h4>
        <ul>{history.map(h => <li key={h}>{h}</li>)}</ul>
      </div>
    </div>
  );
}
