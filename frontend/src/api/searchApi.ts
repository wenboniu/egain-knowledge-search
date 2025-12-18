import { mockArticles } from "../data/mockArticles";
import { Article } from "../types/Article";

export const searchArticles = async (
  query: string
): Promise<Article[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query === "error") {
        reject(new Error("Mock API error"));
      }
      resolve(
        mockArticles.filter(a =>
          a.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);
  });
};
