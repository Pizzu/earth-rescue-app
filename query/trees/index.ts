import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { ITreePayload } from '@type/forms';
import { CreateTreeMutation, ListTreesQuery, Tree } from 'src/API';
import { createTree } from 'src/graphql/mutations';
import { listTrees } from 'src/graphql/queries';

export const getTrees = async () => {
  const result = await API.graphql<GraphQLQuery<ListTreesQuery>>({
    query: listTrees,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return result.data?.listTrees?.items as Tree[];
};

export const createTreeProduct = async (data: ITreePayload) => {
  const result = await API.graphql<GraphQLQuery<CreateTreeMutation>>({
    query: createTree,
    variables: {
      input: data,
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return result;
};
