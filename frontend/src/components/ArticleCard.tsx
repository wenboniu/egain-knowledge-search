import { Article } from "../types/Article";

export const ArticleCard = ({
  article,
  onClick
}: {
  article: Article;
  onClick: (a: Article) => void;
}) => (
  <div className="card" onClick={() => onClick(article)}>
    <h3>{article.title}</h3>
    <p>{article.content.slice(0, 80)}...</p>
    <div className="tags">
      {article.tags.map(t => (
        <span key={t}>{t}</span>
      ))}
    </div>
    <small>
      Relevance: {article.relevanceScore.toFixed(2)} | Views: {article.viewCount}
    </small>
  </div>
);
