export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  likes: number;
  likedBy: Set<string>;
  saved: boolean;
  publishedAt: string;
  readTime?: string;
  author?: string;
}

export type Category = 'All' | 'Tech' | 'Education' | 'Innovation' | 'Job Growth' | 'Business' | 'Science';

export interface NewsAPIResponse {
  articles: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: {
      name: string;
    };
    author: string;
    publishedAt: string;
  }[];
}