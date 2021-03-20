/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id?: string,
  name?: string,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateWebMentionEventInput = {
  targetId: string,
  targetSlug: string,
  targetName: string,
  targetType?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  type: WebMentionType,
  secret: string,
  source: string,
  target: string,
  postType: string,
  postUrl: string,
  authorName?: string | null,
  authorPhoto?: string | null,
  authorUrl?: string | null,
  published?: string | null,
  name?: string | null,
};

export enum WebMentionType {
  InReplyTo = "InReplyTo",
  LikeOf = "LikeOf",
  RepostOf = "RepostOf",
  BookmarkOf = "BookmarkOf",
  MentionOf = "MentionOf",
  RSVP = "RSVP",
}


export type ModelWebMentionEventConditionInput = {
  targetSlug?: ModelStringInput | null,
  targetName?: ModelStringInput | null,
  targetType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  secret?: ModelStringInput | null,
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  postType?: ModelStringInput | null,
  postUrl?: ModelStringInput | null,
  authorName?: ModelStringInput | null,
  authorPhoto?: ModelStringInput | null,
  authorUrl?: ModelStringInput | null,
  published?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelWebMentionEventConditionInput | null > | null,
  or?: Array< ModelWebMentionEventConditionInput | null > | null,
  not?: ModelWebMentionEventConditionInput | null,
};

export type WebMentionEvent = {
  __typename: "WebMentionEvent",
  targetId?: string,
  targetSlug?: string,
  targetName?: string,
  targetType?: string | null,
  createdAt?: string,
  updatedAt?: string,
  type?: WebMentionType,
  secret?: string,
  source?: string,
  target?: string,
  postType?: string,
  postUrl?: string,
  authorName?: string | null,
  authorPhoto?: string | null,
  authorUrl?: string | null,
  published?: string | null,
  name?: string | null,
};

export type UpdateWebMentionEventInput = {
  targetId: string,
  targetSlug?: string | null,
  targetName?: string | null,
  targetType?: string | null,
  createdAt: string,
  updatedAt?: string | null,
  type: WebMentionType,
  secret?: string | null,
  source?: string | null,
  target?: string | null,
  postType?: string | null,
  postUrl?: string | null,
  authorName?: string | null,
  authorPhoto?: string | null,
  authorUrl?: string | null,
  published?: string | null,
  name?: string | null,
};

export type DeleteWebMentionEventInput = {
  targetId: string,
  type: WebMentionType,
  createdAt: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items?:  Array<Todo | null > | null,
  nextToken?: string | null,
};

export type ModelWebMentionEventPrimaryCompositeKeyConditionInput = {
  eq?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
  le?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
  lt?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
  ge?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
  gt?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
  between?: Array< ModelWebMentionEventPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelWebMentionEventPrimaryCompositeKeyInput | null,
};

export type ModelWebMentionEventPrimaryCompositeKeyInput = {
  type?: WebMentionType | null,
  createdAt?: string | null,
};

export type ModelWebMentionEventFilterInput = {
  targetId?: ModelIDInput | null,
  targetSlug?: ModelStringInput | null,
  targetName?: ModelStringInput | null,
  targetType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  type?: ModelWebMentionTypeInput | null,
  secret?: ModelStringInput | null,
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  postType?: ModelStringInput | null,
  postUrl?: ModelStringInput | null,
  authorName?: ModelStringInput | null,
  authorPhoto?: ModelStringInput | null,
  authorUrl?: ModelStringInput | null,
  published?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelWebMentionEventFilterInput | null > | null,
  or?: Array< ModelWebMentionEventFilterInput | null > | null,
  not?: ModelWebMentionEventFilterInput | null,
};

export type ModelWebMentionTypeInput = {
  eq?: WebMentionType | null,
  ne?: WebMentionType | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelWebMentionEventConnection = {
  __typename: "ModelWebMentionEventConnection",
  items?:  Array<WebMentionEvent | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateTodoMutationVariables = {
  input?: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input?: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input?: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWebMentionEventMutationVariables = {
  input?: CreateWebMentionEventInput,
  condition?: ModelWebMentionEventConditionInput | null,
};

export type CreateWebMentionEventMutation = {
  createWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type UpdateWebMentionEventMutationVariables = {
  input?: UpdateWebMentionEventInput,
  condition?: ModelWebMentionEventConditionInput | null,
};

export type UpdateWebMentionEventMutation = {
  updateWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type DeleteWebMentionEventMutationVariables = {
  input?: DeleteWebMentionEventInput,
  condition?: ModelWebMentionEventConditionInput | null,
};

export type DeleteWebMentionEventMutation = {
  deleteWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id?: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items?:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWebMentionEventQueryVariables = {
  targetId?: string,
  type?: WebMentionType,
  createdAt?: string,
};

export type GetWebMentionEventQuery = {
  getWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type ListWebMentionEventsQueryVariables = {
  targetId?: string | null,
  typeCreatedAt?: ModelWebMentionEventPrimaryCompositeKeyConditionInput | null,
  filter?: ModelWebMentionEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListWebMentionEventsQuery = {
  listWebMentionEvents?:  {
    __typename: "ModelWebMentionEventConnection",
    items?:  Array< {
      __typename: "WebMentionEvent",
      targetId: string,
      targetSlug: string,
      targetName: string,
      targetType?: string | null,
      createdAt: string,
      updatedAt: string,
      type: WebMentionType,
      secret: string,
      source: string,
      target: string,
      postType: string,
      postUrl: string,
      authorName?: string | null,
      authorPhoto?: string | null,
      authorUrl?: string | null,
      published?: string | null,
      name?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type WebMentionEventsByTargetQueryVariables = {
  target?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWebMentionEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WebMentionEventsByTargetQuery = {
  webMentionEventsByTarget?:  {
    __typename: "ModelWebMentionEventConnection",
    items?:  Array< {
      __typename: "WebMentionEvent",
      targetId: string,
      targetSlug: string,
      targetName: string,
      targetType?: string | null,
      createdAt: string,
      updatedAt: string,
      type: WebMentionType,
      secret: string,
      source: string,
      target: string,
      postType: string,
      postUrl: string,
      authorName?: string | null,
      authorPhoto?: string | null,
      authorUrl?: string | null,
      published?: string | null,
      name?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type WebMentionEventsByTypeQueryVariables = {
  type?: WebMentionType | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWebMentionEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WebMentionEventsByTypeQuery = {
  webMentionEventsByType?:  {
    __typename: "ModelWebMentionEventConnection",
    items?:  Array< {
      __typename: "WebMentionEvent",
      targetId: string,
      targetSlug: string,
      targetName: string,
      targetType?: string | null,
      createdAt: string,
      updatedAt: string,
      type: WebMentionType,
      secret: string,
      source: string,
      target: string,
      postType: string,
      postUrl: string,
      authorName?: string | null,
      authorPhoto?: string | null,
      authorUrl?: string | null,
      published?: string | null,
      name?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type WebMentionEventsBySlugQueryVariables = {
  targetSlug?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWebMentionEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WebMentionEventsBySlugQuery = {
  webMentionEventsBySlug?:  {
    __typename: "ModelWebMentionEventConnection",
    items?:  Array< {
      __typename: "WebMentionEvent",
      targetId: string,
      targetSlug: string,
      targetName: string,
      targetType?: string | null,
      createdAt: string,
      updatedAt: string,
      type: WebMentionType,
      secret: string,
      source: string,
      target: string,
      postType: string,
      postUrl: string,
      authorName?: string | null,
      authorPhoto?: string | null,
      authorUrl?: string | null,
      published?: string | null,
      name?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWebMentionEventSubscription = {
  onCreateWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type OnUpdateWebMentionEventSubscription = {
  onUpdateWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};

export type OnDeleteWebMentionEventSubscription = {
  onDeleteWebMentionEvent?:  {
    __typename: "WebMentionEvent",
    targetId: string,
    targetSlug: string,
    targetName: string,
    targetType?: string | null,
    createdAt: string,
    updatedAt: string,
    type: WebMentionType,
    secret: string,
    source: string,
    target: string,
    postType: string,
    postUrl: string,
    authorName?: string | null,
    authorPhoto?: string | null,
    authorUrl?: string | null,
    published?: string | null,
    name?: string | null,
  } | null,
};
