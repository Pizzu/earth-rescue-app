/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTree = /* GraphQL */ `
  query GetTree($id: ID!) {
    getTree(id: $id) {
      id
      image
      name
      description
      price
      priceId
      meaning
      consume
      createdAt
      updatedAt
    }
  }
`;
export const listTrees = /* GraphQL */ `
  query ListTrees(
    $filter: ModelTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        name
        description
        price
        priceId
        meaning
        consume
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
