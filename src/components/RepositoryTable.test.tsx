import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { RepositoryListResponse } from '../gql/repositoryListQuery';
import { RepositoryTable } from './RepositoryTable';

const mockSearchData: RepositoryListResponse = {
  search: {
    repositoryCount: 5,
    nodes: [
      {
        id: 'mock1',
        forkCount: 1,
        stargazerCount: 1,
        name: 'first',
        url: 'url1',
      },
      {
        id: 'mock2',
        forkCount: 3,
        stargazerCount: 3,
        name: 'second',
        url: 'url2',
      },
    ],
  },
};

describe('RepositoryTable', () => {
  it('should render proper headers', () => {
    render(<RepositoryTable list={mockSearchData.search.nodes} />);
    const headerCells = screen.getAllByTestId('headerCell');
    expect(headerCells.length).toBe(3);
    expect(headerCells[0]).toHaveTextContent('Name');
    expect(headerCells[1]).toHaveTextContent('Stars');
    expect(headerCells[2]).toHaveTextContent('Forks');
  });

  it('should render given data', () => {
    render(<RepositoryTable list={mockSearchData.search.nodes} />);
    const rows = screen.getAllByTestId('repositoryRow');
    expect(rows.length).toBe(2);

    const expectedData = [
      ['first', '1', '1'],
      ['second', '3', '3'],
    ];

    rows.forEach((row, rowIndex) => {
      const cells = within(row).getAllByRole('cell');
      cells.forEach((cell, cellIndex) => {
        expect(cell).toHaveTextContent(expectedData[rowIndex][cellIndex]);
      });
    });
  });
});
