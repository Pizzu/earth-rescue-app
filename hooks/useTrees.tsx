import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { useQuery } from 'react-query';
import { ListTreesQuery, Tree } from 'src/API';
import { listTrees } from 'src/graphql/queries';

export const useTrees = () => {
  const { data, error, isLoading } = useQuery('trees', async () => {
    const result = await API.graphql<GraphQLQuery<ListTreesQuery>>({
      query: listTrees,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    return result.data?.listTrees?.items as Tree[];
  });

  return {
    treeList: data,
    loading: isLoading,
    error,
  };
};
