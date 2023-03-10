/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTreeInput = {
  id?: string | null,
  image: string,
  name: string,
  description: string,
  price: number,
  meaning: string,
  consume: number,
};

export type ModelTreeConditionInput = {
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  meaning?: ModelStringInput | null,
  consume?: ModelIntInput | null,
  and?: Array< ModelTreeConditionInput | null > | null,
  or?: Array< ModelTreeConditionInput | null > | null,
  not?: ModelTreeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Tree = {
  __typename: "Tree",
  id: string,
  image: string,
  name: string,
  description: string,
  price: number,
  meaning: string,
  consume: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTreeInput = {
  id: string,
  image?: string | null,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  meaning?: string | null,
  consume?: number | null,
};

export type DeleteTreeInput = {
  id: string,
};

export type ModelTreeFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  meaning?: ModelStringInput | null,
  consume?: ModelIntInput | null,
  and?: Array< ModelTreeFilterInput | null > | null,
  or?: Array< ModelTreeFilterInput | null > | null,
  not?: ModelTreeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTreeConnection = {
  __typename: "ModelTreeConnection",
  items:  Array<Tree | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTreeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  meaning?: ModelSubscriptionStringInput | null,
  consume?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTreeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTreeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTreeMutationVariables = {
  input: CreateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type CreateTreeMutation = {
  createTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTreeMutationVariables = {
  input: UpdateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type UpdateTreeMutation = {
  updateTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTreeMutationVariables = {
  input: DeleteTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type DeleteTreeMutation = {
  deleteTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTreeQueryVariables = {
  id: string,
};

export type GetTreeQuery = {
  getTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTreesQueryVariables = {
  filter?: ModelTreeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTreesQuery = {
  listTrees?:  {
    __typename: "ModelTreeConnection",
    items:  Array< {
      __typename: "Tree",
      id: string,
      image: string,
      name: string,
      description: string,
      price: number,
      meaning: string,
      consume: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnCreateTreeSubscription = {
  onCreateTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnUpdateTreeSubscription = {
  onUpdateTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnDeleteTreeSubscription = {
  onDeleteTree?:  {
    __typename: "Tree",
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    meaning: string,
    consume: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
