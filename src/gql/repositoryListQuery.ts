import { gql } from '@apollo/client';
import { RepositoryNode } from '../model/repositoryNode';

export const REPOSITORY_LIST_QUERY = gql`
    query Search($query: String!) {
        search(query: $query, type: REPOSITORY, first: 50) {
            repositoryCount
            pageInfo {
                endCursor
                startCursor
            }
            nodes {
                ... on Repository {
                    id
                    name
                    forkCount
                    stargazerCount
                    url
                }
            }

        }
    }
`;

export interface RepositoryListResponse {
  search: {
    repositoryCount: number;
    nodes: RepositoryNode[];
  };
}

export interface RepositoryListVariables {
    query: string;
}

