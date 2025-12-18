import { Article } from "../types/Article";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Resetting Your Password",
    content: "To reset your password, navigate to settings...",
    category: "Account",
    tags: ["password", "security"],
    relevanceScore: 0.92,
    createdDate: "2024-01-10",
    lastUpdated: "2024-03-01",
    viewCount: 1200
  },
  {
    id: "2",
    title: "Billing Disputes",
    content: "Billing disputes can be resolved by...",
    category: "Billing",
    tags: ["billing", "invoice"],
    relevanceScore: 0.85,
    createdDate: "2023-11-20",
    lastUpdated: "2024-02-14",
    viewCount: 980
  }
];
