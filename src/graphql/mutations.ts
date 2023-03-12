/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTree = /* GraphQL */ `
  mutation CreateTree(
    $input: CreateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    createTree(input: $input, condition: $condition) {
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
export const updateTree = /* GraphQL */ `
  mutation UpdateTree(
    $input: UpdateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    updateTree(input: $input, condition: $condition) {
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
export const deleteTree = /* GraphQL */ `
  mutation DeleteTree(
    $input: DeleteTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    deleteTree(input: $input, condition: $condition) {
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
