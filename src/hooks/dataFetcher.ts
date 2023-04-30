import { useState, useEffect } from 'react';
import { getStories } from '../utils/api';
import { StoryType } from '../types/types';


const useDataFetcher = () => {
  const [stories, setStories] = useState<StoryType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories()
      .then((stories: any) => {
        setStories(stories);
        setIsLoading(false);
      }) 
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, stories };
};

export default useDataFetcher;