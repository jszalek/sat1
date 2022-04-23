import React from 'react';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { RepositoryNode } from '../model/repositoryNode';

interface RepositoryTableProps {
  list: RepositoryNode[];
}

export const RepositoryTable = ({ list }: RepositoryTableProps) => {

  return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell data-testid="headerCell">Name</TableCell>
          <TableCell data-testid="headerCell">Stars</TableCell>
          <TableCell data-testid="headerCell">Forks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map(repository => (
          <TableRow data-testid="repositoryRow" key={repository.id}>
            <TableCell>
              <Link href={repository.url} target={'_blank'}>{repository.name}</Link>
            </TableCell>
            <TableCell>🌟 {repository.stargazerCount}</TableCell>
            <TableCell>🍴 {repository.forkCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
};
