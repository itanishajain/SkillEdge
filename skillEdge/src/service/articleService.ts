import { Article } from "@/types/article";


function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const fallbackArticles: Article[] = [
  // ... (previous fallback articles remain the same)
];

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const CATEGORIES = ['technology', 'business', 'science', 'education'];
const ARTICLES_PER_PAGE = 30;

export async function fetchArticles(page: number = 1): Promise<Article[]> {
  if (!API_KEY) {
    console.warn('No API key found. Using fallback data.');
    return fallbackArticles;
  }

  try {
    const articles: Article[] = [];
    
    for (const category of CATEGORIES) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${ARTICLES_PER_PAGE}&apiKey=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch articles: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      const transformedArticles: Article[] = data.articles
        .filter((article: { title: string; description: string; url: string }) => article.title && article.description && article.url)
        .map((article: { title: string; description: string; url: string; source: { name: string }; urlToImage?: string; publishedAt: string; author?: string }, index: number) => ({
          id: `${category}-${index}-${Date.now()}`,
          title: article.title,
          content: article.description,
          category: category.charAt(0).toUpperCase() + category.slice(1),
          source: article.source.name,
          sourceUrl: article.url,
          imageUrl: article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop',
          likes: 0,
          likedBy: new Set<string>(),
          saved: false,
          publishedAt: article.publishedAt,
          author: article.author || 'Unknown',
          readTime: estimateReadTime(article.description)
        }));
      
      articles.push(...transformedArticles);
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return page === 1 ? fallbackArticles : [];
  }
}