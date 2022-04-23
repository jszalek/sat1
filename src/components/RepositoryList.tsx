import React from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORY_LIST_QUERY, RepositoryListResponse, RepositoryListVariables } from '../gql/repositoryListQuery';
import { RepositoryTable } from './RepositoryTable';
import { Search } from './Search';
import { Typography } from '@material-ui/core';

const baseQuery = 'is:public';

export const RepositoryList = () => {
  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery<RepositoryListResponse, RepositoryListVariables>(REPOSITORY_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: { query: baseQuery },
  });

  const onSearch = (searchValue: string) => {
    refetch({ query: [baseQuery, searchValue].filter(Boolean).join(' ') });
  };

  const list = data?.search.nodes || [];

  const getList = () => {
    if (loading) return <>Loading...</>;
    if (error) return <>{`Error! ${error.message}`}</>;
    if (!list.length) return <Typography>No data to display.</Typography>;
    return <RepositoryTable list={list} />;
  };

  return <>
    <Search onSearch={onSearch} disabled={loading} />
    {getList()}
    <div style={{ marginTop: 30 }}>
      <Typography variant="caption">
        The list displays only 50 first repositories of {data?.search.repositoryCount || 0} found.
      </Typography>
    </div>
  </>;
};
