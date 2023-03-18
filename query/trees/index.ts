import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { ICreateStripeTreeResponse, ITreePayload } from '@type/forms';
import { Auth, Storage } from 'aws-amplify';
import { CreateTreeMutation, ListTreesQuery, Tree } from 'src/API';
import { createTree } from 'src/graphql/mutations';
import { listTrees } from 'src/graphql/queries';

export const getTrees = async () => {
  const result = await API.graphql<GraphQLQuery<ListTreesQuery>>({
    query: listTrees,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });

  const treeList = result.data?.listTrees?.items as Tree[];
  const updatedTreeList = await Promise.all(
    treeList.map(async (tree) => {
      const imageKey = tree.image;
      const imageUrl = await Storage.get(imageKey, { level: 'protected' });
      tree.image = imageUrl;
      return tree;
    })
  );
  return updatedTreeList;
};

export const createTreeProduct = async (data: ITreePayload) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();
  const response: ICreateStripeTreeResponse = await API.post('earthRescueStripeApi', '/create-stripe-tree', {
    headers: {
      Authorization: `${token}`,
    },
    body: data,
  });
  const graphqlResult = await API.graphql<GraphQLQuery<CreateTreeMutation>>({
    query: createTree,
    variables: {
      input: { ...data, priceId: response.result.priceId },
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return graphqlResult;
};
