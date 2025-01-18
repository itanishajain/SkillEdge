import { useEffect, useCallback } from 'react';

export function useInfiniteScroll(onLoadMore: () => void, hasMore: boolean) {
  const handleScroll = useCallback(() => {
    if (!hasMore) return;
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      onLoadMore();
    }
  }, [onLoadMore, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
}