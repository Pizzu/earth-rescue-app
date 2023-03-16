import { getTrees } from '@query/trees';
import { useQuery } from 'react-query';

export const useTrees = () => {
  const { data, error, isLoading } = useQuery('trees', getTrees);

  return {
    treeList: data,
    loading: isLoading,
    error,
  };
};
