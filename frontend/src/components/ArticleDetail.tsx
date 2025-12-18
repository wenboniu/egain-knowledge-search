import { Article } from "../types/Article";

export const ArticleDetail = ({
  article,
  onClose
}: {
  article: Article;
  onClose: () => void;
}) => (
  <div className="modal">
    <h2>{article.title}</h2>
    <p>{article.content}</p>
    <button onClick={onClose}>Close</button>
  </div>
);
