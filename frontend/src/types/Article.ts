export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  relevanceScore: number;
  createdDate: string;
  lastUpdated: string;
  viewCount: number;
}
