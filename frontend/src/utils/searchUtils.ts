import { Article } from "../types/Article";

export function applyFilters(
  articles: Article[],
  category: string,
  fromDate: string,
  toDate: string
): Article[] {
  return articles.filter(a => {
    if (category && a.category !== category) return false;
    if (fromDate && a.createdDate < fromDate) return false;
    if (toDate && a.createdDate > toDate) return false;
    return true;
  });
}

export function applySort(articles: Article[], sort: string): Article[] {
  const sorted = [...articles];
  switch (sort) {
    case "date":
      return sorted.sort(
        (a, b) => b.createdDate.localeCompare(a.createdDate)
      );
    case "popularity":
      return sorted.sort((a, b) => b.viewCount - a.viewCount);
    default:
      return sorted.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }
}
