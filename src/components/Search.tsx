import { Button, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (search: string) => void;
  disabled?: boolean;
}

export const Search = ({ onSearch, disabled = false }: SearchProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => onSearch(search);

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Paper style={{ padding: 10, marginBottom: 30 }}>
      <TextField value={search}
                 label={'Search for repository name'}
                 onChange={onChange}
                 onKeyPress={onKeyPress}
                 variant="outlined"
                 fullWidth />
      <Button style={{ marginTop: 10 }}
              onClick={() => handleSearch()}
              disabled={disabled}
              variant="contained"
              color="primary">Search</Button>
    </Paper>
  );
};
