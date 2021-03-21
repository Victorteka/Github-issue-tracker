import { Container } from '@material-ui/core';
import React from 'react'

import RepoList from './repository/RepoList'
import Header from './header/Header';
import SearchBar from './search/SearchBar';

function App() {
  return (
      <>
        <Header />
        <Container maxWidth={'sm'}>
          <SearchBar />
          <RepoList />
        </Container>
      </>
  );
}

export default App;
