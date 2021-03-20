import { Container } from '@material-ui/core';
import React from 'react'

import RepoList from './repository/RepoList'
import Header from './header/Header';

function App() {
  return (
      <>
        <Header />
        <Container maxWidth={'sm'}>
          <RepoList />
        </Container>
      </>
  );
}

export default App;
