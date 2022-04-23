import React from 'react';
import './App.css';

// mui font
import '@fontsource/roboto';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './shared/apolloClient';
import { RepositoryList } from './components/RepositoryList';
import { AppContainer } from './components/AppContainer';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer>
        <RepositoryList />
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
