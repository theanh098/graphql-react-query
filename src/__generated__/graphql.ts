import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/build/esm/types.dom';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions
} from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type BusinessModel = {
  __typename?: 'BusinessModel';
  address?: Maybe<Scalars['String']>;
  chains: Array<Maybe<Scalars['String']>>;
  cmcId?: Maybe<Scalars['Int']>;
  contractAddress?: Maybe<Scalars['String']>;
  contractChain?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  feedbacks: Array<Maybe<FeedbackOnBusinessModelodel>>;
  followByU: Scalars['Boolean'];
  followers: Array<Maybe<UserModel>>;
  founderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  mainCategory: MainCategories;
  medias: Array<Maybe<MediaModel>>;
  name: Scalars['String'];
  overview: Scalars['String'];
  reviews: Array<Maybe<ReviewModel>>;
  startDate?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
  type: Array<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  whitepaperUrl?: Maybe<Scalars['String']>;
};

export type CampaignModel = {
  __typename?: 'CampaignModel';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  metadata?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  usersOnCampaign: Array<UserModel>;
};

export type DidModel = {
  __typename?: 'DidModel';
  doc: Scalars['JSON'];
  id: Scalars['Int'];
  txnHash: Scalars['String'];
  users?: Maybe<Array<UserModel>>;
};

export type FeedbackOnBusinessModelodel = {
  __typename?: 'FeedbackOnBusinessModelodel';
  business: BusinessModel;
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  dislikes: Array<Maybe<Scalars['Int']>>;
  id: Scalars['Int'];
  likes: Array<Maybe<Scalars['Int']>>;
  replies: Array<ReplyOnFeedbackModel>;
  text: Scalars['String'];
  urls: Array<Scalars['String']>;
  user: UserModel;
  userId: Scalars['Int'];
};

export enum MainCategories {
  Ai = 'ai',
  Cryptocurrencies = 'cryptocurrencies',
  Currencies = 'currencies',
  Exchange = 'exchange',
  LightningNetwork = 'lightning_network',
  Metaverse = 'metaverse',
  Nft = 'nft',
  Others = 'others'
}

export type MediaModel = {
  __typename?: 'MediaModel';
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  path?: Maybe<Scalars['String']>;
  source: MediaSoucres;
  url: Scalars['String'];
};

export enum MediaSoucres {
  Blog = 'Blog',
  Discord = 'Discord',
  Photo = 'Photo',
  Telegram = 'Telegram',
  Twitter = 'Twitter'
}

export type Mutation = {
  __typename?: 'Mutation';
  signEthereum: SignEthereumResponse;
};

export type MutationSignEthereumArgs = {
  message: SiweMessageInputs;
  signature: Scalars['String'];
};

export type NotificationModel = {
  __typename?: 'NotificationModel';
  business: BusinessModel;
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  from?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  metaData?: Maybe<Scalars['String']>;
  review: ReviewModel;
  reviewId: Scalars['Int'];
  seen: Scalars['Boolean'];
  to: Scalars['Int'];
  type: Notificationtypes;
  userFrom?: Maybe<UserModel>;
  userTo: UserModel;
};

export enum Notificationtypes {
  Dislike = 'dislike',
  Like = 'like',
  Reply = 'reply',
  ReviewApproved = 'review_approved',
  ReviewRejected = 'review_rejected',
  Tagged = 'tagged'
}

export type Query = {
  __typename?: 'Query';
  randomBusinesses: RandomBusinesses;
};

export type QueryRandomBusinessesArgs = {
  hasBannerOnly?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type RandomBusinesses = {
  __typename?: 'RandomBusinesses';
  data: Array<Maybe<BusinessModel>>;
  limit: Scalars['Int'];
  totalProject?: Maybe<Scalars['Int']>;
  totalReview?: Maybe<Scalars['Int']>;
};

export type ReplyModel = {
  __typename?: 'ReplyModel';
  createdAt: Scalars['DateTime'];
  desc: Scalars['String'];
  dislikes: Array<Maybe<Scalars['Int']>>;
  id: Scalars['Int'];
  likes: Array<Maybe<Scalars['Int']>>;
  review: ReviewModel;
  reviewId: Scalars['Int'];
  user: UserModel;
  userId: Scalars['Int'];
};

export type ReplyOnFeedbackModel = {
  __typename?: 'ReplyOnFeedbackModel';
  createdAt: Scalars['DateTime'];
  desc: Scalars['String'];
  feedback: FeedbackOnBusinessModelodel;
  feedbackId: Scalars['Int'];
  id: Scalars['Int'];
  user: UserModel;
  userId: Scalars['Int'];
};

export type ReviewModel = {
  __typename?: 'ReviewModel';
  business: BusinessModel;
  businessId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dislikes: Array<Maybe<Scalars['Int']>>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  likes: Array<Maybe<Scalars['Int']>>;
  rate: Scalars['Int'];
  replies: Array<ReplyModel>;
  sharings: Array<Maybe<Scalars['Int']>>;
  status: ReviewStatuses;
  txnHash?: Maybe<Scalars['String']>;
  user: UserModel;
  userId: Scalars['Int'];
};

export enum ReviewStatuses {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type SignEthereumResponse = {
  __typename?: 'SignEthereumResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SiweMessageInputs = {
  address: Scalars['String'];
  chainId: Scalars['Float'];
  domain: Scalars['String'];
  issuedAt: Scalars['String'];
  nonce: Scalars['String'];
  statement: Scalars['String'];
  uri: Scalars['String'];
  version: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  address?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  backgroundUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  did?: Maybe<DidModel>;
  didId?: Maybe<Scalars['Int']>;
  discord?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  feedbacksOnBusinesses: Array<FeedbackOnBusinessModelodel>;
  followingBusinesses: Array<BusinessModel>;
  google?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
  lastEditedDate?: Maybe<Scalars['DateTime']>;
  linkedin?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notiAccepted: Scalars['Boolean'];
  notifications: Array<NotificationModel>;
  onCampaigns: Array<CampaignModel>;
  password?: Maybe<Scalars['String']>;
  ratedBusinesses: Array<BusinessModel>;
  replies: Array<ReplyModel>;
  repliesOnFeedbacks: Array<ReplyOnFeedbackModel>;
  reviews: Array<ReviewModel>;
  role?: Maybe<Scalars['String']>;
  spamAccepted: Scalars['Boolean'];
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  walletAddress: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type SignEthereumMutationVariables = Exact<{
  address: Scalars['String'];
  chainId: Scalars['Float'];
  domain: Scalars['String'];
  issuedAt: Scalars['String'];
  nonce: Scalars['String'];
  statement: Scalars['String'];
  uri: Scalars['String'];
  version: Scalars['String'];
  signature: Scalars['String'];
}>;

export type SignEthereumMutation = {
  __typename?: 'Mutation';
  signEthereum: {
    __typename?: 'SignEthereumResponse';
    accessToken: string;
    refreshToken: string;
  };
};

export type GetRandombusinessesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']>;
  hasBannerOnly?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
}>;

export type GetRandombusinessesQuery = {
  __typename?: 'Query';
  randomBusinesses: {
    __typename?: 'RandomBusinesses';
    limit: number;
    totalReview?: number | null;
    data: Array<{
      __typename?: 'BusinessModel';
      id: number;
      mainCategory: MainCategories;
      name: string;
      overview: string;
      logo?: string | null;
      followByU: boolean;
      medias: Array<{
        __typename?: 'MediaModel';
        id: number;
        source: MediaSoucres;
      } | null>;
    } | null>;
  };
};

export const SignEthereumDocument = `
    mutation SignEthereum($address: String!, $chainId: Float!, $domain: String!, $issuedAt: String!, $nonce: String!, $statement: String!, $uri: String!, $version: String!, $signature: String!) {
  signEthereum(
    signature: $signature
    message: {address: $address, chainId: $chainId, domain: $domain, issuedAt: $issuedAt, nonce: $nonce, statement: $statement, uri: $uri, version: $version}
  ) {
    accessToken
    refreshToken
  }
}
    `;
export const useSignEthereumMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SignEthereumMutation,
    TError,
    SignEthereumMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    SignEthereumMutation,
    TError,
    SignEthereumMutationVariables,
    TContext
  >(
    ['SignEthereum'],
    (variables?: SignEthereumMutationVariables) =>
      fetcher<SignEthereumMutation, SignEthereumMutationVariables>(
        client,
        SignEthereumDocument,
        variables,
        headers
      )(),
    options
  );
export const GetRandombusinessesDocument = `
    query GetRandombusinesses($type: String, $hasBannerOnly: Boolean, $limit: Int!) {
  randomBusinesses(limit: $limit, type: $type, hasBannerOnly: $hasBannerOnly) {
    limit
    totalReview
    data {
      id
      mainCategory
      name
      overview
      logo
      followByU
      medias {
        id
        source
      }
    }
  }
}
    `;
export const useGetRandombusinessesQuery = <
  TData = GetRandombusinessesQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetRandombusinessesQueryVariables,
  options?: UseQueryOptions<GetRandombusinessesQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<GetRandombusinessesQuery, TError, TData>(
    ['GetRandombusinesses', variables],
    fetcher<GetRandombusinessesQuery, GetRandombusinessesQueryVariables>(
      client,
      GetRandombusinessesDocument,
      variables,
      headers
    ),
    options
  );
