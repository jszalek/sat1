import { Button, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (search: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useState('');

  return (
    <Paper style={{ padding: 10, marginBottom: 30 }}>
      <form>
        <TextField value={search} onChange={e => setSearch(e.target.value)} label={'Search for repository name'}
                   variant="outlined"
                   fullWidth />
        <Button style={{ marginTop: 10 }} onClick={() => onSearch(search)} variant="contained"
                color="primary">Search</Button>
      </form>
    </Paper>
  );
};
