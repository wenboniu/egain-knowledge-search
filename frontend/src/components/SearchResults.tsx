import { Article } from "../types/Article";
import { ArticleCard } from "./ArticleCard";

export const SearchResults = ({
  articles,
  onSelect
}: {
  articles: Article[];
  onSelect: (a: Article) => void;
}) => (
  <div className="results">
    {articles.map(a => (
      <ArticleCard key={a.id} article={a} onClick={onSelect} />
    ))}
  </div>
);
